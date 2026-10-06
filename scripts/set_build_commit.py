import os
import re
import subprocess
from pathlib import Path


def main() -> None:
    commit_sha = os.environ.get("GITHUB_SHA", "").strip()
    if not commit_sha:
        try:
            commit_sha = (
                subprocess.check_output(["git", "rev-parse", "HEAD"])
                .decode()
                .strip()
            )
        except Exception:
            commit_sha = ""

    config_path = Path("zensical.toml")
    if not config_path.exists():
        return

    content = config_path.read_text(encoding="utf-8")
    new_content = re.sub(
        r'commit_hash\s*=\s*"[^"]*"',
        f'commit_hash = "{commit_sha}"',
        content,
    )
    if commit_sha:
        new_content = re.sub(
            r"^(extra_css|extra_javascript)\s*=.*$",
            lambda line: version_asset_urls(line.group(0), commit_sha[:7]),
            new_content,
            flags=re.MULTILINE,
        )
    config_path.write_text(new_content, encoding="utf-8")
    print(f"Set commit_hash in zensical.toml to: {commit_sha[:7] if commit_sha else '(none)'}")


def version_asset_urls(line: str, version: str) -> str:
    """Append ?v=<commit> to each stylesheet and script so a deploy never serves them from a stale cache."""
    return re.sub(r'"([^"?]+)(\?v=[^"]*)?"', rf'"\1?v={version}"', line)


if __name__ == "__main__":
    main()
