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
    config_path.write_text(new_content, encoding="utf-8")
    print(f"Set commit_hash in zensical.toml to: {commit_sha[:7] if commit_sha else '(none)'}")


if __name__ == "__main__":
    main()
