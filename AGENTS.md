# Working on the World Toolkit manual

Notes for agents writing or updating this manual. Read them before touching a page: most of them were learned the slow way.

## The repo

- Plain Markdown in `docs/`, built with [Zensical](https://zensical.org) from `zensical.toml`, published to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
- Zensical is pinned in `requirements.txt`; it's still 0.0.x, so bump it on purpose and check the build.
- Local check: `python -m venv .venv`, `pip install -r requirements.txt pillow`, then `zensical build --clean` (must print "No issues found") or `zensical serve` (http://localhost:8000/wtk-manual/; the first request after a rebuild can 404, reload).
- New pages must be added to `nav` in `zensical.toml`. Multi-line nested nav tables work.
- Commit as `rorugamestudio <338178956+rorugamestudio@users.noreply.github.com>` (set in the repo's local git config), with no AI co-author line.
- Commit in small chunks as you go (a page, a section, a batch of images), not only at the end, and push after every commit so the site stays current. Build with `zensical build --clean` before each commit. If a push is rejected for authentication, don't retry with other credentials: leave the commits local and ask the maintainer to push.
- This repo is public. Never commit local paths, machine or account names, or anything describing where the World Toolkit source lives. Grep the staged diff for them before every commit, and look at every screenshot before publishing it.

## Writing pages

- **Write only what the code shows.** Take names from the editor UI: button labels, tooltips, `[Tooltip]` attributes, Inspector field names (Unity nicifies `camelCase` fields), `MenuItem` and `CreateAssetMenu` paths, enum values. The Scene view context tips providers (`*ContextTipsProvider.cs`) describe each tool in user language and are the best single source.
- When something is inferred rather than read, verify it in the implementation before writing it, or leave it out. Past mistakes caught this way: Merge variants, Hard Edge Angle, which junction settings are per "conversion", which mask adjustments nest inside a fill, slope masks reading the terrain from before their own stamp, Rip being labelled Extract in face mode.
- Audience: artists and designers. Lead with what a tool is for, then how to use it. UI names in **bold**, menu paths as **Tools > World Toolkit > ...**, keys as `++ctrl+d++`.
- Definition lists (`**Name**` then `:   text`) for settings, tables for options. Admonitions for tips and warnings.
- Section and heading names are linked from the World Toolkit components' `[HelpURL]`s (constants in `Assets/Scripts/Common/Documentation/` of the Unity project, anchors are heading slugs). If you rename a page or a linked heading, update those constants too.

## Icons

The editor's own button icons are a custom icon set: `:wtk-<name>:` (e.g. `:wtk-modify-extrude:`, `:wtk-component-editable-mesh-road:`). Put them next to tools, components and modules the first time they appear on a page, and in headings of tool sections. Section index pages set `icon: wtk/<module>` in front matter for the navigation.

The SVGs in `overrides/.icons/wtk/` are generated: the editor icons are white for the dark skin, and the sync script turns white into `currentColor` so they work in both themes. Don't edit them by hand; resync instead (below).

## Images

- `docs/assets/images/<section>/`, WebP. Result renders are `<name>.webp`; editor UI screenshots are `ui-<name>.webp`.
- Insert as a figure with a caption; UI screenshots get a class that limits their width:

  ```html
  <figure markdown="span" class="wtk-ui">
    ![Alt text](../assets/images/roads/ui-road.webp){ loading=lazy }
    <figcaption>The road inspector.</figcaption>
  </figure>
  ```

  `wtk-ui` for inspectors and panels (380 px), `wtk-ui-wide` for the Scene view and wide windows (720 px), no class for result renders. Styles are in `docs/stylesheets/wtk.css`.
- No text in images. Names go in captions, so a label change doesn't force a new image.

### Regenerating images

All images come from scripts in `Tools/Manual/` of the World Toolkit Unity project, so they can be redone when the tools change. They drive the open editor through the Unity CLI (`unity cmd run_script`), which compiles one C# file in memory without a domain reload; the runners merge `Tools/Manual/Shots/*.cs` into one file first. They publish straight into this repo's `docs/assets/images/`.

- `render_manual_shots.py [Class.Method ...]`: offscreen result renders (buildings, roads, terrain, modelling). No focus needed.
- `capture_manual_ui.py [name-prefix ...]`: editor screenshots of the World Toolkit window tabs, single panel sections, inspectors, the UV View, the Style Wizard and Scene view overlays. Unity must be the focused app and stay untouched while it runs; ask the user to click into Unity and not come back to the chat until it finishes (replying moves focus away, and the script then waits).
- `sync_manual_icons.py`: refreshes the `:wtk-*:` icon set.

What made them work (keep these when extending them):

- **Never touch the user's scenes, selection or windows without restoring them.** Content is built in a temporary additive scene that is closed unsaved, then rendered from `PreviewRenderUtility`. The UI capture remembers the selection and each module's tab and puts them back.
- Roads find their junctions with `FindObjectsByType`, which skips preview scenes: build roads in the temporary *loaded* scene, then move the roots into the preview to render. Place a junction object where the roads meet before calling `SetSplineLinkKnots`, because the link group moves the knots to its own transform. Rebuild roads, then junctions, then roads again.
- Buildings: generate inside `BuildingGeneratedPiecePoolIsolation`. Floor counts include moulding rows, so a box needs about 4 floors to show 1 visible storey.
- Terrain: a stamp's shape adjustments (Border, Offset...) belong in a fill's `ShapeAdjustments`, not in the mask list. Slope and height masks read the terrain from before their own stamp, so paint slopes from a second stamp. Set `treeBillboardDistance` high, or non-SpeedTree trees render as broken billboards.
- Modelling tools: call the per-mesh operations (`EditableMeshModifyOperations` private overloads taking an `EditableMesh`) with the component mode override set, then `EditableMeshEditorUtility.RefreshMesh`. Don't drive them through the editor selection: it is unreliable from a script and can hit the user's objects.
- URP ignores `Light.shadowBias` unless the light opts out of pipeline settings; without it, shadows detach from distant objects.
- UI screenshots: Unity only draws windows while it is the focused app, so `GrabPixels` comes back blank; the scripts read screen pixels (`InternalEditorUtility.ReadScreenPixel` with the window position in points) only while `isApplicationActive`, and reject any capture that doesn't look like the editor skin, so another app can never end up in an image. Long content is scrolled and stitched; sections are cropped from their Foldout's rect.
- Scene view shots use a separate floating Scene view and demo content placed 5 km from the origin (`customScene` does not isolate a regular scene). Spline overlays (New Splines, Selected Knots) are forced by the tool and can't be hidden; Create Mesh Options only shows while dragging.
- The Unity CLI formats numbers with the machine's locale: return them with `CultureInfo.InvariantCulture`.

## Open items

- `getting-started/installation.md` is still a stub: it needs the distribution method, minimum Unity version and supported render pipelines from the maintainer.
- Overlays still missing screenshots: Create Mesh Options (while dragging), Knife and the other tool options panels, the Buildings Layout Overlay labels, the Modelling Tools search popup.
