---
icon: lucide/square-terminal
---

# Command Line

World Toolkit adds its own commands to the Unity command line (CLI). They run inside the open editor, so scripts, build pipelines and AI coding agents can list, check, rebuild and model World Toolkit content without clicking through the editor. They're also how an agent can look at what it made: render it to images, measure it, and compare it with a reference picture.

!!! warning "Experimental"
    The commands are built on Unity's **Unity Pipeline** package (`com.unity.pipeline`), which is still experimental. Names, arguments and results can change between World Toolkit versions. The command list in the editor is always the current reference: see [Listing the commands](#listing-the-commands).

## :lucide-package: Requirements

- The **Unity CLI** (the `unity` command).
- The **Unity Pipeline** package in your project. Add it from **Window > Package Manager** with **+ > Install package by name...** and the name `com.unity.pipeline`.
- The Unity editor open on the project. The commands talk to the running editor; they don't start one.

World Toolkit only compiles its commands when the package is installed. Without it, nothing is added and nothing else in World Toolkit changes. So if the commands are missing, check the package first.

## :lucide-play: Running a command

```bash
unity cmd wtk_buildings_list
```

Arguments are written `--name value`. Lists and points are JSON arrays, in single quotes so the shell passes them unchanged:

```bash
unity cmd wtk_modelling_find_components --target "/Knob" --kind faces --normal '[0,1,0]'
```

Add `--json` for machine-readable output. Commands stop after 30 seconds by default; raise that with `--timeout <seconds>`, or run long ones as jobs (see [Long commands](#long-commands)).

### :lucide-list: Listing the commands

```bash
unity cmd --tag worldtoolkit --detail compact
```

lists every World Toolkit command with its description. Narrow it to one module with `--tag worldtoolkit/buildings`, `worldtoolkit/modelling`, `worldtoolkit/inspection` or `worldtoolkit/session`. `--query <text>` finds commands by name or description and shows their argument names.

### :lucide-box: Pointing at objects

Arguments that take an object (`--target`, `--building`, `--parent`...) accept any one of these forms:

| Form | Example |
| --- | --- |
| Hierarchy path | `"/City Block/Building 3"` |
| Asset path | `"Assets/Rules/Villa_BuildingRules.asset"` |
| Global object ID | `"GlobalObjectId_V1-2-..."` |
| GUID | `"guid:0123456789abcdef0123456789abcdef"` |
| JSON object | `'{"hierarchyPath":"/Villa"}'` |

Commands that list or create objects return their hierarchy path and global ID. Use the global ID when two objects share a name: a hierarchy path takes the first match across all open scenes.

### :lucide-history: Long commands

Add `--detach` to start a command as a job and get its ID right away, then follow it with `unity job status <id>` or `unity job wait <id>`. Use this for [`wtk_buildings_audit`](#buildings) with `--thoroughness thorough` on large buildings, which can take tens of seconds.

## :lucide-shield-check: Safe by default

- Commands marked *read-only* below never change the scene. Renders are made from an offscreen copy.
- Commands that change objects can be undone with ++ctrl+z++, and they leave the changed scene unsaved. Only the [scene commands](#scenes-and-sessions) save scenes, and only the scene you name.
- Overwriting a file or throwing away changes needs `--confirm true`.
- `--dry_run true`, where available, reports what a command would do without doing it.
- Images go to a new folder under the project's `Temp/WorldToolkitCommands` unless you pass `--output_dir`.

## :lucide-scan-search: Inspection

Commands that work on any scene object or prefab (tag `worldtoolkit/inspection`).

| Command | What it does |
| --- | --- |
| `wtk_render_views` | *Read-only.* Renders the object to PNG files from named views (`iso`, `iso_back`, `front`, `back`, `left`, `right`, `top`, `bottom`), in perspective or orthographic (`--projection`). `--mode shaded`, `wireframe` or `material_ids` (one flat color per material, with a legend). Frame a close-up with `--focus_min`/`--focus_max`, or place a free camera with `--camera_position`, `--camera_target` and `--fov`. |
| `wtk_render_compare` | *Read-only.* Compares the object's silhouette with a reference picture (blueprint, photo, sketch) in one orthographic `--view`. `--reference_fit width`, `height` or `bounds` places the picture automatically; `--reference_crop` picks one view out of a blueprint sheet. Returns how well they overlap (IoU), the size differences along each edge in metres, and difference and overlay images. |
| `wtk_audit_overlaps` | *Read-only.* Finds z-fighting: pairs of meshes with coplanar, overlapping faces, largest first, each with a position and normal. |

## :wtk-buildings: Buildings

Commands for [buildings](../buildings/index.md) (tag `worldtoolkit/buildings`).

| Command | What it does |
| --- | --- |
| `wtk_buildings_list` | *Read-only.* Every building in the open scenes, with its handles, rules, and volume and floor counts. |
| `wtk_buildings_describe` | *Read-only.* A building's resolved layout: each volume's footprint segments and walls, each floor's height and rows, the last generation's counts, and every slot that didn't fit. |
| `wtk_buildings_validate` | *Read-only.* Checks a building, Building Rules, Volume Wall or Roof the way its inspector does, and lists the errors, warnings and info. Buildings and rules also check the walls and roofs they use. |
| `wtk_buildings_audit` | *Read-only.* Looks for holes and z-fighting in a generated building by rendering every facade from several angles. Real gaps in the geometry are told apart from tiny rendering cracks. `--thoroughness thorough` adds grazing angles; `--pixels_per_meter` finds smaller gaps; `--overview true` also renders overview images. |
| `wtk_buildings_rebuild` | Regenerates a building from its volumes or rules. With `--dry_run true`, reports the last generation and the building's issues instead. |
| `wtk_buildings_create_rules` | Saves a building's volumes, floors and subfloors as a [Building Rules](../buildings/building-rules.md) asset at `--path`. |

`wtk_buildings_validate` and `wtk_buildings_audit` work well as automatic content checks, for example before a build.

## :wtk-component-editable-mesh: Modelling

Commands that create and edit [Editable Meshes](../modelling/editable-meshes.md) without using the editor selection (tag `worldtoolkit/modelling`).

| Command | What it does |
| --- | --- |
| `wtk_modelling_create_mesh` | Creates an Editable Mesh from a list of vertices and polygons. |
| `wtk_modelling_create_revolve` | Creates an Editable Mesh by turning a profile around an axis: wheels, tyres, lamps, knobs. |
| `wtk_modelling_create_loft` | Creates an Editable Mesh surface through a grid of control points, smooth or with creases, optionally mirrored and capped. |
| `wtk_modelling_create_projected_patch` | Creates shapes projected onto another mesh, following its surface like a decal: windows, grilles, trims, panel lines, rings and text. |
| `wtk_modelling_describe_mesh` | *Read-only.* Vertex and face counts, open and non-manifold edges, degenerate faces, volume, bounds, and faces per material. |
| `wtk_modelling_find_components` | *Read-only.* Finds faces, edges or vertices by material, facing direction, position inside a box, or open edges. The result feeds `wtk_modelling_apply`. |
| `wtk_modelling_apply` | Runs a modelling operation on listed faces, edges or vertices, or on all of them: extrude, inset, bevel, loop cut, merge, dissolve, cleanup, delete, assign material, translate, rotate, scale and more, plus whole-mesh `subdivide_surface` and `mirror`. Returns the selection the operation left, so operations can be chained. |
| `wtk_modelling_boolean` | Combines Editable Meshes with a [Boolean Stack](../modelling/booleans.md): difference, union, intersection or slice. `--bake true` turns the result into a plain Editable Mesh. |

The four `create` commands take their shape as JSON, from a file (`--input_file`, absolute or relative to the project folder) or inline (`--definition`). Their descriptions in the command list name every field. Pass `--target` with an existing Editable Mesh to rebuild it in place, keeping its transform, children and references.

!!! example "A knob, start to finish"

    `knob.json`, a profile of radius and height pairs:

    ```json
    {
      "profile": [[0, 0], [0.4, 0], [0.4, 0.3], [0.25, 0.5], [0, 0.5]],
      "segments": 24,
      "hard_points": [1, 2]
    }
    ```

    Create the mesh, find the faces of its top, and raise them by 10 cm:

    ```bash
    unity cmd wtk_modelling_create_revolve --input_file knob.json --name Knob
    unity cmd wtk_modelling_find_components --target "/Knob" --kind faces --normal '[0,1,0]' --max_angle 10
    unity cmd wtk_modelling_apply --target "/Knob" --operation extrude --distance 0.1 --faces '[3,7,11,15,19,23]'
    unity cmd wtk_render_views --target "/Knob" --mode wireframe
    ```

    Pass the face indices that `wtk_modelling_find_components` returned to `--faces`; the list above is shortened.

## :lucide-layers: Scenes and sessions

Commands for working beside someone who is using the editor at the same time, typically an AI agent (tag `worldtoolkit/session`). They keep the agent's work in its own scene and away from the user's.

| Command | What it does |
| --- | --- |
| `wtk_scene_create` | Creates an empty scene, saves it and opens it next to the open scenes. Unlike Unity's own `create_scene`, it doesn't take over the active scene, so the user's new objects keep going to their own scene. |
| `wtk_scene_create_object` | Creates an empty GameObject under a parent, or at the root of a given open scene, without changing the active scene. |
| `wtk_scene_set_active` | Makes an open scene the active one. |
| `wtk_scene_save` | Saves one open scene. Unity's `save_all` would save the user's scenes too. |
| `wtk_scene_close` | Closes an open scene, saving it first with `--save true`. |
| `wtk_scene_checkpoint` | Takes a snapshot of an open scene under a label, without saving the scene. |
| `wtk_scene_restore` | Puts a scene back to a checkpoint. Everything changed since is lost, so it needs `--confirm true`; `--dry_run true` lists the checkpoints instead. |
| `wtk_session_configure` | `--isolate_undo true` keeps the changes World Toolkit commands make out of the undo history, so the user's ++ctrl+z++ can't silently revert an agent's work. Lasts until the editor closes. |

## :lucide-bot: AI agents

Coding agents that can run shell commands (Claude Code, Codex, Cursor and similar) can use these commands as they are. Point the agent at the listing command above: each description says what the command does, what it returns and which arguments it takes, and was written for an agent to read.

When an agent works in the editor while you do:

- Have it create its own scene with `wtk_scene_create` and build there, so your open scenes stay untouched.
- Turn on `wtk_session_configure --isolate_undo true`, and let it use `wtk_scene_checkpoint` and `wtk_scene_restore` for its own undo.
- Ask it to check its results with `wtk_render_views`, `wtk_render_compare` and the validate and audit commands, instead of guessing from numbers.

## :lucide-triangle-alert: Known limitations

- **Windows PowerShell 5.1** strips the double quotes inside arguments it passes to other programs, so JSON like `'{"hierarchyPath":"/Villa"}'` arrives broken. Use a hierarchy path or global ID without JSON, or run the command from another shell.
- **Git Bash** rewrites arguments that start with `/` into Windows paths (`"/Knob"` becomes `C:/Program Files/Git/Knob`). Set `MSYS_NO_PATHCONV=1` before the command, or use the object's global ID.
- **Large shapes go in a file.** The Windows command line has a length limit that large vertex lists exceed, so use `--input_file` rather than `--definition` for big meshes.
- **Projected patches** land on the faces of the surface that face the projection direction only, and an outline that touches itself can fail to fill.
- **Open revolves**, made with less than a full turn, face away from the axis.
