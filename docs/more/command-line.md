---
icon: lucide/square-terminal
---

# Command Line

World Toolkit adds its own commands to the Unity command line (CLI). They run inside the open editor, so scripts, build pipelines and AI coding agents can create, list, check, change and rebuild World Toolkit content (terrains, roads, splines, spawners, buildings and meshes) without clicking through the editor. They're also how an agent can look at what it made: render it to images, measure it, and compare it with a reference picture.

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

lists every World Toolkit command with its description. Narrow it to one group with `--tag worldtoolkit/<group>`:

| Tag | Commands for |
| --- | --- |
| `worldtoolkit/catalog` | [Any World Toolkit object](#any-world-toolkit-object): finding, describing, checking, changing and rebuilding. |
| `worldtoolkit/terrain` | [Terrain](#terrain) stamps and their targets. |
| `worldtoolkit/splines` | [Splines](#splines) and spline links. |
| `worldtoolkit/roads` | [Roads](#roads), junctions and road rules. |
| `worldtoolkit/spawners` | [Array and area spawners](#spawners). |
| `worldtoolkit/buildings` | [Buildings](#buildings). |
| `worldtoolkit/modelling` | [Editable Meshes](#modelling). |
| `worldtoolkit/inspection` | [Renders and checks](#inspection) of any object. |
| `worldtoolkit/session` | [Scenes, checkpoints and pending rebuilds](#scenes-and-sessions). |

`--query <text>` finds commands by name or description and shows their argument names. For a full, machine-readable list with every argument and result, see [`wtk_manifest`](#the-command-manifest).

### :lucide-box: Pointing at objects

Arguments that take an object (`--target`, `--road`, `--spline`, `--parent`...) accept any one of these forms:

| Form | Example |
| --- | --- |
| Hierarchy path | `"/City Block/Building 3"` |
| Asset path | `"Assets/Rules/Villa_BuildingRules.asset"` |
| Global object ID | `"GlobalObjectId_V1-2-..."` |
| GUID | `"guid:0123456789abcdef0123456789abcdef"` |
| JSON object | `'{"hierarchyPath":"/Villa"}'` |

Commands that list or create objects return their hierarchy path and global ID. Use the global ID when two objects share a name: a hierarchy path takes the first match across all open scenes.

A few arguments take several objects at once (`--objects`, `--terrains`, `--targets`). They're JSON lists of hierarchy paths or global IDs, such as `'["/Spline A", "/Spline B"]'`.

### :lucide-history: Long commands

Add `--detach` to start a command as a job and get its ID right away, then follow it with `unity job status <id>` or `unity job wait <id>`. Use this for [`wtk_buildings_audit`](#buildings) with `--thoroughness thorough` on large buildings, which can take tens of seconds.

## :lucide-shield-check: Safe by default

- Commands marked *read-only* below never change the scene. Renders are made from an offscreen copy.
- Commands that change objects can be undone with ++ctrl+z++, and they leave the changed scene unsaved. Only the [scene commands](#scenes-and-sessions) save scenes, and only the scene you name. Commands that write new assets (presets, rules, terrain data) say so in their description.
- Commands that create or change content finish its rebuild before they return, so the next command, render or check sees the result.
- Overwriting a file or throwing away changes needs `--confirm true`.
- `--dry_run true`, where available, reports what a command would do without doing it.
- Images go to a new folder under the project's `Temp/WorldToolkitCommands` unless you pass `--output_dir`.

## :lucide-library-big: Any World Toolkit object

Commands that work the same way on every module (tag `worldtoolkit/catalog`). An agent can find what's in the project and the open scenes, understand it, and change it, without knowing each module's inspector.

| Command | What it does |
| --- | --- |
| `wtk_types` | *Read-only.* Every World Toolkit component and asset type, with its module, whether it's a component or an asset, its **Add Component** or **Create** menu path, and a link to its page in this manual. Filter with `--module`, `--kind component` or `asset`, and `--query`. |
| `wtk_objects_list` | *Read-only.* The World Toolkit objects in the open scenes, grouped by GameObject, with their handles and components. Objects that a tool generated (spawned instances, building pieces) are left out unless you pass `--include_generated true`. |
| `wtk_assets_list` | *Read-only.* The World Toolkit assets in the project (road profiles and rules, stamp presets, building rules, spawner rules...), with their paths. Filter with `--module`, `--type` and `--folder`. |
| `wtk_describe` | *Read-only.* Describes any World Toolkit object the way its module sees it: a road's ends and the junctions they meet at, a stamp target's terrains and its stamps in the order they apply, a spawner's slots and how many objects it placed, a building's layout. Types without such a description return their settings. |
| `wtk_validate` | *Read-only.* Checks any World Toolkit object or asset for the problems its inspector would show, or that make it build nothing: a stamp without a target, a spline mask without a spline, a junction with one road, a spawner slot without a prefab. Each problem has a severity and, when it comes from a field, its property path. |
| `wtk_rebuild` | Regenerates any World Toolkit object right away, like its **Rebuild** or **Regenerate** button, along with what depends on it (a road's junctions, the roads using a profile, the spawners following a rules asset). `--dry_run true` only reports what would be rebuilt. |
| `wtk_properties_get` | *Read-only.* Reads a component's or asset's settings as JSON: enums by name, references as asset paths or hierarchy paths. Lists of masks, operations and other polymorphic items include each item's type in `"$type"`. `--path` reads a single setting. |
| `wtk_properties_set` | Changes settings from JSON in the same shape `wtk_properties_get` returns, in one undo step, then finishes the rebuild the change needs. Keys can be property paths (`"layers[0].stamps[0].mode"`) or nested objects. A list given in full replaces the list; `{"2": value}` changes one item. To add or replace a polymorphic item, give its `"$type"`. |
| `wtk_manifest` | *Read-only.* Every World Toolkit command, with its arguments and results described as JSON schemas. See [The command manifest](#the-command-manifest). |

!!! example "Turn a texture stamp into a round patch of rock"

    ```bash
    unity cmd wtk_properties_get --target '{"hierarchyPath":"/Rock Patch"}' --path "layers[0]"
    unity cmd wtk_properties_set --target '{"hierarchyPath":"/Rock Patch"}' --values '{"layers[0].maskComposition": [{"$type": "TerrainCircleStampMask"}], "layers[0].stamps[0].terrainLayer": "Assets/Terrain/Rock.terrainlayer"}'
    ```

    If a `"$type"` isn't accepted, the error lists the types that are.

### :lucide-file-braces: The command manifest

`wtk_manifest` describes every World Toolkit command in one JSON document: its description, its group, whether it's read-only or undoable, each argument's type, default and whether it's required, and the shape of its result. It's generated from the commands themselves, so it always matches the version installed.

The editor also writes the manifest to `Library/WorldToolkit/AgentManifest.json` in the project after every script compilation. A tool or agent can read that file to see what it can call, without waiting for the editor to answer. `--output_file` writes a copy anywhere else; `--tag` limits the manifest to one group.

## :lucide-scan-search: Inspection

Commands that work on any scene object or prefab (tag `worldtoolkit/inspection`).

| Command | What it does |
| --- | --- |
| `wtk_render_views` | *Read-only.* Renders the object to PNG files from named views (`iso`, `iso_back`, `front`, `back`, `left`, `right`, `top`, `bottom`), in perspective or orthographic (`--projection`). `--mode shaded`, `wireframe` or `material_ids` (one flat color per material, with a legend). Frame a close-up with `--focus_min`/`--focus_max`, or place a free camera with `--camera_position`, `--camera_target` and `--fov`. |
| `wtk_render_compare` | *Read-only.* Compares the object's silhouette with a reference picture (blueprint, photo, sketch) in one orthographic `--view`. `--reference_fit width`, `height` or `bounds` places the picture automatically; `--reference_crop` picks one view out of a blueprint sheet. Returns how well they overlap (IoU), the size differences along each edge in metres, and difference and overlay images. |
| `wtk_audit_overlaps` | *Read-only.* Finds z-fighting: pairs of meshes with coplanar, overlapping faces, largest first, each with a position and normal. |

## :wtk-terrain: Terrain

Commands for [terrain stamps](../terrain/index.md) (tag `worldtoolkit/terrain`). [`wtk_describe`](#any-world-toolkit-object), `wtk_validate` and `wtk_rebuild` also work on stamp targets, stamps, terrains and stamp presets.

| Command | What it does |
| --- | --- |
| `wtk_terrain_create` | Creates a terrain ready for stamps: one tile or a grid of connected tiles (`--tiles`) with their TerrainData assets, under a new Terrain Stamp Target. The base is flat at `--base_height`, painted with `--layer`, and captured as the base state. |
| `wtk_terrain_create_target` | Puts existing Unity terrains under a new Terrain Stamp Target and captures their surface as its base state. |
| `wtk_terrain_create_stamp` | Creates a stamp like **Create with Selected** in the Terrain window: a preset's layers (or a default stamp of one `--type`) on the stamp target of the terrain below, then rebuilds. Pass a spline's object as `--on` to turn it into the stamp. |
| `wtk_terrain_apply_preset` | Replaces a stamp's layers with a preset's, bound to the stamp's spline. |
| `wtk_terrain_save_preset` | Saves a stamp's layers as a new Terrain Stamp Preset asset. |
| `wtk_terrain_rebuild` | Rebuilds one stamp target, or every one in the open scenes, and waits for progressive rebuilds to finish. |
| `wtk_terrain_base` | `--action capture` takes the terrain's current surface as the base (after sculpting it by hand), `restore` puts the base back without stamps, and `clear` makes the base flat at `--height` and rebuilds the stamps on top. |
| `wtk_terrain_sample` | *Read-only.* The surface height, normal, slope and strongest terrain layer under a list of points. Use it to place objects on the ground, or to check what a stamp did. |

## :wtk-splines: Splines

Commands for [spline containers](../splines/spline-container.md) and [link groups](../splines/link-groups.md) (tag `worldtoolkit/splines`). Everything built on a spline (roads, stamps, spawners, buildings) follows it: after a change, these commands finish those rebuilds before returning.

| Command | What it does |
| --- | --- |
| `wtk_splines_create` | Creates a spline from knot positions, on a new object or `--on` an existing one. |
| `wtk_splines_set_paths` | Replaces a spline's paths with new knot positions, or appends paths with `--mode append`. |
| `wtk_splines_sample` | *Read-only.* Points at even distances along a spline (`--spacing` in metres, or `--count`), each with its position, direction and up vector. |
| `wtk_splines_link` | Links two knots of different paths so they move together, under a new Spline Link object. Knots are written as `{"spline": "/Spline", "path": 0, "knot": -1}`; a negative knot counts from the end of the path. |

Paths are JSON. Positions are in world space unless you pass `--space local`:

```json
[
  {"knots": [[0, 0, 0], [20, 0, 0], [40, 0, 10]], "closed": false},
  {"knots": [[0, 0, 30], {"position": [20, 0, 30], "tangentMode": "Linear"}]}
]
```

A knot is `[x, y, z]`, or an object with `position` and, optionally, `tangentMode` (`Linear`, `AutoSmooth`, `Mirrored`, `Broken`, `Continuous`), `tension`, `rotation`, `tangentIn` and `tangentOut`. A single path can be given without the outer list, and a bare list of knots is one open path.

## :wtk-roads: Roads

Commands for [roads](../roads/index.md) and [junctions](../roads/junctions.md) (tag `worldtoolkit/roads`). `wtk_describe`, `wtk_validate` and `wtk_rebuild` also work on roads, junctions, road rules and profiles.

| Command | What it does |
| --- | --- |
| `wtk_roads_create` | Creates a road along knot positions (paths as in [Splines](#splines)), following `--rules` or the new-road rules from the Roads settings. |
| `wtk_roads_convert` | Turns splines into roads and Spline Links into junctions, like **Create Roads/Junctions from Selection**. |
| `wtk_roads_connect` | Joins road ends in a new junction. With `--to_road`, the ends meet that road at the point nearest to `--at`, making a T-junction. The junction takes its core, UV, material and corner settings from `--rules`. Without it, the junction uses the Road Rules asset all the connected roads follow, or the new-road rules if they don't share one. |
| `wtk_roads_disconnect` | Takes road ends out of their junctions. A junction left with one road is removed. |
| `wtk_roads_apply_rules` | Applies a Road Rules asset to roads and junctions. By default the roads follow the asset from then on (`--mode follow`). `--mode copy` gives them a copy, like **Apply Rules** in the Roads window. |
| `wtk_roads_save_rules` | Saves a road's layers and generation settings as a new Road Rules asset. |
| `wtk_roads_rebuild` | Rebuilds every road and junction in the open scenes, or only those of one scene with `--scene`. Every scene it rebuilds is left modified, so use `--scene` to leave the other open scenes untouched. |

Road ends are written as `{"road": "/Road", "path": 0, "end": "start"}` (or `"end"`). The road can be a handle string, as here, or a handle object such as `{"hierarchyPath": "/Road"}`. Use `{"road": ..., "path": 0, "knot": 3}` instead to join a junction at a knot in the middle of a road. `wtk_describe` on a road lists its ends and the junction each one meets.

!!! example "A T-junction"

    ```bash
    unity cmd wtk_roads_create --name "Main Street" --paths '[[0,0,0],[80,0,0]]'
    unity cmd wtk_roads_create --name "Side Street" --paths '[[40,0,60],[40,0,10]]'
    unity cmd wtk_roads_connect --endpoints '[{"road":"/Side Street","end":"end"}]' --to_road '{"hierarchyPath":"/Main Street"}' --at '[40,0,0]'
    ```

## :wtk-more: Spawners

Commands for the [Array Spawner](array-spawner.md) and [Area Spawner](area-spawner.md) (tag `worldtoolkit/spawners`). `wtk_describe`, `wtk_validate` and `wtk_rebuild` also work on spawners and Spline Array Rules.

| Command | What it does |
| --- | --- |
| `wtk_spawners_create_array` | Places prefabs along a spline with an array spawner. Give it `--rules` (a Spline Array Rules asset), or `--prefabs` with an optional `--spacing` or `--count` for one segment slot. |
| `wtk_spawners_create_area` | Fills the area inside a closed spline with copies of a prefab or object, on a `--grid`, or at a `--spacing`. |
| `wtk_spawners_save_rules` | Saves what an array spawner places as a new Spline Array Rules asset. |
| `wtk_spawners_bake` | Turns the spawned objects into ordinary objects and removes the spawner, like **Make Editable**. |

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
| `wtk_settle` | Runs every rebuild World Toolkit has waiting: roads and junctions, terrain stamps, spawners, buildings, booleans. |

!!! info "Why `wtk_settle`"
    World Toolkit rebuilds content a moment after it changes, between editor frames. While the editor is in the background, as it usually is when an agent drives it, those frames come rarely, so a change made with Unity's own commands (`set_serialized_field`, `set_transform`, `add_component`...) can sit unbuilt for a long time. World Toolkit's own commands finish their rebuilds before they return. After using other commands, run `wtk_settle` before reading, rendering or checking the result.

## :lucide-bot: AI agents

Coding agents that can run shell commands (Claude Code, Codex, Cursor and similar) can use these commands as they are. Point the agent at the listing command above, or at [the command manifest](#the-command-manifest): each description says what the command does, what it returns and which arguments it takes, and was written for an agent to read.

A typical loop for an agent:

1. Find what exists with `wtk_types`, `wtk_objects_list` and `wtk_assets_list`, and reuse the project's presets, profiles and rules.
2. Create content with the module commands, or change it with `wtk_properties_set`.
3. Understand and check it with `wtk_describe` and `wtk_validate`.
4. Look at it with `wtk_render_views`.

When an agent works in the editor while you do:

- Have it create its own scene with `wtk_scene_create` and build there, so your open scenes stay untouched.
- Turn on `wtk_session_configure --isolate_undo true`, and let it use `wtk_scene_checkpoint` and `wtk_scene_restore` for its own undo.
- Ask it to check its results with `wtk_render_views`, `wtk_render_compare` and the validate and audit commands, instead of guessing from numbers.
- If it changes World Toolkit objects with Unity's own commands, have it run `wtk_settle` before checking the result.

## :lucide-triangle-alert: Known limitations

- **Windows PowerShell 5.1** strips the double quotes inside arguments it passes to other programs, so JSON like `'{"hierarchyPath":"/Villa"}'` arrives broken. Use a hierarchy path or global ID without JSON, or run the command from another shell.
- **Git Bash** rewrites arguments that start with `/` into Windows paths (`"/Knob"` becomes `C:/Program Files/Git/Knob`). Set `MSYS_NO_PATHCONV=1` before the command, or use the object's global ID.
- **Large shapes go in a file.** The Windows command line has a length limit that large vertex lists exceed. For big meshes, splines, point lists and settings, use the file form of the argument (`--input_file`, `--paths_file`, `--points_file`, `--values_file`).
- **Projected patches** land on the faces of the surface that face the projection direction only, and an outline that touches itself can fail to fill.
- **Open revolves**, made with less than a full turn, face away from the axis.
