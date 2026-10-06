# Contributing to the World Toolkit Manual

The manual is plain Markdown in the [`docs/`](docs/) folder. Every push to `main` rebuilds and publishes the site with [Zensical](https://zensical.org).

## Small fixes

Use the edit button at the top of any page on the site. GitHub opens the file, and you can propose the change as a pull request without cloning anything.

## Running the site locally

Requires Python 3.10 or newer.

```bash
python -m venv .venv
.venv/Scripts/activate        # Windows
source .venv/bin/activate     # macOS / Linux
pip install -r requirements.txt
zensical serve
```

Then open http://localhost:8000/wtk-manual/. The page reloads when you save a file.

## Conventions

- **One page per tool or concept**, named in lowercase with dashes: `docs/roads/creating-roads.md`.
- **New pages must be added to `nav`** in [`zensical.toml`](zensical.toml), otherwise they don't show up in the sidebar.
- **Images** go in `docs/assets/images/<section>/`, as `.webp`. Reference them with a relative path and always write alt text:
  `![Extruding a face](../assets/images/modelling/extrude.webp)`
- **Icons:** every page sets an `icon:` in its front matter, and headings start with one. Use the editor's own icons (`:wtk-modify-extrude:`) for tools and components, and [Lucide](https://lucide.dev/icons/) icons (`:lucide-settings:`) for everything else.
- **Write for artists and designers.** Lead with what the tool is for and how to use it in the editor. Use the names exactly as they appear in the Unity UI, in **bold**, and menu paths as **Window > World Toolkit > ...**.
- **Use admonitions** for tips and warnings:

  ```markdown
  !!! tip
      Hold ++shift++ to add to the selection.
  ```
