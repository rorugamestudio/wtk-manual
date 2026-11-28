---
icon: lucide/history
---

# Changelog

What changed in each World Toolkit release, newest first.

<div class="wtk-version-picker"></div>

## :lucide-tag: v0.0.7

!!! warning "Upgrading from v0.0.6"
    - Road layers have **Is Lane** and **Is Border**, which used to be set on the profile. Layers saved before take them from their profile when their rules or road are opened or edited; save the Road Rules (and scenes with roads that have their own layers) to keep them there. Scripts reading `RoadProfile.IsLane` / `IsBorder` get the old profile values (now obsolete): read `RoadLayer.IsLane` / `IsBorder`. See [Layers](../roads/profiles-and-layers.md#layers).
    - A **centred** layer group now puts the middle of its lane layers on the road's spline, with the layers beside them extending outwards. Roads whose borders differ on each side (a sidewalk wider on one side, by the rules or by a Layer Override) move sideways at their next rebuild so that their lanes are centred on the spline. See [Layer Groups](../roads/profiles-and-layers.md#layer-groups).
    - **Stairs** rebuilt from their parameters (any edit of their settings or spline, or **Force Rebake**) lay their steps out anew: a segment between knots at the same height becomes a landing without steps, and every step of a flight gets the same height. Stairs with a single straight flight keep their shape. See [Stairs](../modelling/primitives.md#stairs).
    - **Lofts** with a rail that doesn't reach every profile take a new shape at their next rebuild: the rail steers only the profiles it reaches, and past them the surface keeps its own shape instead of bending towards the rail's end. Lofts whose rails reach every profile don't change. See [Loft](../modelling/loft.md#shape).
    - **Lofts** of open profiles made from now on face the side given by their profile order, which can be the other side from before. That includes lofts made by scripts with `wtk_modelling_create_loft`: pass `"facing": "ConvexSide"` for the old side. Lofts saved with v0.0.6 keep facing the way they did. See [Loft](../modelling/loft.md#surface).

### :wtk-modelling: Modelling (Editable Mesh)

- **Stairs** turn a spline segment between two knots at the same height into a landing: one flat face, with no steps
- **Stairs Step Mode** **Height** builds steps of a set height (0.18 m for new stairs), stretched or squeezed so each flight fits its rise; **Count** shares the steps among the flights by their rise
- The Editable Primitive inspector shows the height the stairs' steps got, and with **Height** how many steps it made
- Stairs risers face the right way when the spline is drawn from the top down
- Loft **Facing**: a surface of open profiles faces the side set by the direction of its first profile and the order of its profiles (**Profile Order**), so reshaping it never turns it over and **Reverse Order** does. Lofts made before keep the old rule, now called **Convex Side**
- Lofts rebuild much faster: with **Auto Bake Lightmap UVs** on, the lightmap UVs no longer bake at every change but once edits settle, as a cancellable task in **Background Tasks** (meshes over 20,000 faces when the scene is saved). A 66,000-face loft rebuilds in half a second instead of over a minute. See [Editable Meshes](../modelling/editable-meshes.md#uv-options)
- A loft change that would build over about 400,000 vertices waits two seconds as a task in **Background Tasks**; **Cancel** keeps the loft as it was. **Max Edge Length** and **Max Deviation** apply once typed in, not at every keystroke. See [Editing a loft](../modelling/loft.md#editing-a-loft)
- Loft **Spline from Sides**: click a side of a loft between two profiles to make a spline along it (++shift++-click to take several; segments that meet make one spline), with a knot on each profile and Bezier tangents that follow the side exactly. With **Add as Rail** the splines become the loft's rails. See [Shape](../modelling/loft.md#shape)
- Loft **Rail Pacing**: **Surface**, a new loft's default, walks the rails at the pace the surface has, so a rail drawn along the surface leaves it as it is; **Even** is how lofts made before walk them, and they keep it
- A loft **Rail** can end short of the outer profiles: it steers only the profiles it reaches, and past them the surface carries on smoothly. A rail that reaches fewer than two profiles is left out
- A loft end set to **Tangent** can carry on from the side of another loft: a loft that has the end's profile as a rail along one of its sides. Two lofts meet in an L without a crease. See [Joining a loft to the side of another](../modelling/loft.md#joining-a-loft-to-the-side-of-another)
- A loft end set to **Tangent** has **Match Grid**: the loft's columns land on the neighbour's vertices along the shared spline, so the two meshes meet vertex to vertex. See [Ends](../modelling/loft.md#ends)
- A loft end set to **Tangent** has **Match Normals**: the seam takes the neighbour's shading and blends back into the loft's own over a share of its first span, so no line shows in the light along it. See [Joining lofts without a crease](../modelling/loft.md#joining-lofts-without-a-crease)
- An end's **Cap** is disabled when the profile at that end is open
- With several lofts selected, the **Loft** tab edits them together: an option changed applies to all of them, a field shows **–** while they differ, and what each loft has of its own (profiles, rails, centerline, neighbours) is disabled. The Scene view shows the profiles, rails and seams of every selected loft. See [Several lofts at once](../modelling/loft.md#several-lofts-at-once)
- The options of a loft that's still being set up in the Loft tab (**Shape**, **Alignment**, **Tessellation**, **Surface**) can be changed again before **Create Loft**, and the new loft takes them
- Eyedropper buttons on the loft's rails, **Centerline**, profile **Spline** and **Point**, and an end's **Neighbour** pick them in the Scene view, in the Loft tab and the Inspector. **Neighbour** only offers the lofts that end can carry on from. The eyedropper on **Centerline** replaces **Pick Centerline**. See [Picking in the Scene view](../getting-started/world-toolkit-window.md#picking-in-the-scene-view)
- Copies of a vertex or edge on the same spot (split corners, the corner of an object resting on another, a long edge over shorter ones at a T-junction) are told apart by the face under the cursor: hovering the spot from inside a face picks the one that belongs to it, for the highlight and the click alike, also across selected objects. See [Selection](../modelling/selection.md#selecting)
- **Preselection Glow**: the highlighted vertex or edge glows into the faces it belongs to, so a split copy glows on its own face and a shared one on all of them. Its color and size are in the Modelling Settings. See [Preselection Glow](../modelling/settings.md#preselection-glow)

### :wtk-roads: Roads

- **Show Width Controls** (Roads panel, under **Show Lane Controls**): a width handle on each layer of the selected roads in the Scene view; drag it, or click it to type the layer's width in metres or its **Width Multiplier**. On a road with rules it changes the layer's width override, offering to turn it on first. See [Layer widths in the Scene view](../roads/creating-roads.md#layer-widths-in-the-scene-view)
- **Show Spline Range Controls**: the spline ranges of the selected roads' groups, layers and sub layers in the Scene view. Drag an end along the road (it keeps its anchor and units), click it to type its value, right-click a range to flip or remove it and the road to add one. See [Editing spline ranges in the Scene view](../roads/profiles-and-layers.md#editing-spline-ranges-in-the-scene-view)
- **Layer Overrides** has **Override Spline Ranges** for each layer and each of its sub layers, and the new **Group Overrides** for each group: a road that follows rules can have its own spline ranges. See [Road settings](../roads/creating-roads.md#road-settings)
- The Road Outliner's **Overrides** column counts spline range overrides too
- Range and width handles are small cubes; a selected handle lights up the range or layer line it changes and fades the others; its settings show in the **Spline Range** or **Layer Width** overlay (bottom right by default), and ++f++ frames it
- Right-click a range or width handle and choose **Remove Override** to follow the rules again
- Range ends sit exactly where the ranges start and end (they used to drift up to half a metre along roads whose spline speeds up and slows down), and the selected end's fields set the range type, the anchor (Start, End or Knot), the knot and Units or Percent, keeping the end in place
- Right-click a spline range to change its **Anchor** (Spline or Junction Mouths)
- Width handles of layers left of a centred road's middle sit on their left edge; each group's handles sit one step further along the road than the previous group's; while dragging, the handles stay put along the road until the mouse is released
- Ranges of different elements drawn over the same stretch move apart sideways instead of covering each other
- The lane and width controls cross the road under the middle of the view (also when looking towards the horizon) and glide along it with the camera instead of jumping between points
- A click on a range or width handle a few pixels off its centre no longer falls through and deselects the road
- Faster: dragging a spline range no longer resolves the junctions again at every step, and roads rebuild faster (about twice as fast in a test crossing) since ranges in percent no longer measure the whole road each time
- **Is Lane** and **Is Border** are set on each layer instead of on its profile, so one profile serves lane and non-lane layers. See [Layers](../roads/profiles-and-layers.md#layers)
- A centred group centres its lane layers on the spline; the layers beside them extend outwards, so borders of different widths on each side no longer shift the lanes. See [Layer Groups](../roads/profiles-and-layers.md#layer-groups)
- Single lanes can be limited to **Spline Ranges** in a road's **Lane Overrides** (also on roads without rules) and in the Scene view; outside them the lane's place stays empty. See [Lanes](../roads/profiles-and-layers.md#lanes)
- **Embed Rules Into Component** on the road component's context menu: the road takes its rules' layers and settings with its overrides built in and lets the rules go, building the same mesh. See [How roads use rules](../roads/creating-roads.md#how-roads-use-rules)
- The **Spline Range** and **Layer Width** overlays list what the selected handle belongs to (Road, Group, Layer, Sublayer, Lane, Range) as read-only lines, and the Spline Range overlay picks the range's **Anchor**
- **Show Mesh Wireframe** (Roads panel, under **Points**) hides the Editable Mesh wireframe of selected roads and junctions when off
- **Add Anchored Connection** is no longer on the road component's context menu: add a Road Anchor Connection component, or drag a road end onto another road's edge
- Junctions rebuild about twice as fast, and roads a fifth faster, in scenes with many junctions: a junction looks for its neighbours along its roads with one search of the scene per rebuild, and what is recorded for Undo after each rebuild no longer reads the whole Road Rules asset again while it hasn't changed. The meshes come out the same

### :wtk-splines: Splines

- With the **Center** handle position, selected Spline Containers are moved, rotated and scaled about the average of their knots instead of their objects' pivots. See [Moving whole splines](../splines/spline-container.md#moving-whole-splines)
- New splines, roads, stamp outlines and building footprints are drawn with :wtk-new-splines: **Create Splines** on the Splines Edit toolbar, in place of ++shift++-click. Creation stays on for the next spline; ++esc++ with nothing being drawn turns it off, and ++enter++ finishes a spline like a right-click. The **New Splines** panel only shows while creation is on. See [Drawing splines](../splines/spline-container.md#drawing-splines)
- The selected objects' splines, and their children's, are always drawn, even outside spline editing. **Always Show Splines** is now **Always Show All Splines**, also in the Spline Settings
- **Show Splines Toolbar Outside Context** keeps the Splines Edit toolbar in the Scene view outside spline editing. See [Splines Edit toolbar](../splines/index.md#splines-edit-toolbar)

### :lucide-bug: Bug fixes

- **Apply to Selected**, **Create Road Rules From Current Setup** and other copies of road rules keep junction-mouth spline ranges as they are: the copies used to lose their anchor, setback and length, which moved crossings and lane dividers
- Scene view handles and outlines drawn away from the world origin no longer wobble: thick lines turned jagged, dots moved or disappeared, a few pixels off at 1 km from the origin and tens of pixels at 20 km

## :lucide-tag: v0.0.6

!!! warning "Upgrading from v0.0.5"
    - **Terrain Stamp Targets** no longer keep a copy of their terrains as the base for the stamps: the base is now flat ground at one height, painted with one terrain layer, with no holes, details or trees. A target saved with v0.0.5 gets a base flat at the bottom of each terrain (the terrain object's height), painted with its first terrain layer, at the next rebuild. Set its **Base Height** and click **Apply Base**, and rebuild any relief you sculpted by hand with stamps. See [Setting up a Stamp Target](../terrain/stamps.md#setting-up-a-stamp-target).
    - **Building Blocks** whose knots aren't all on one plane get new lot heights, so their buildings regenerate when their scene opens.

### :wtk-terrain: Terrain

- Stamps apply over a flat base set on the target with **Base Height**, **Base Layer** and **Apply Base**, in place of **Capture Base** and **Restore Base**. Scenes with many terrains get much smaller, and a selected stamp target no longer slows the editor down
- **Building Block** and **Building Lots** masks, and the **Area Mask** height source, to level the terrain under a building block or under each of its lots. Two sample presets set it up. See [Level the ground under a building block](../terrain/height.md#level-the-ground-under-a-building-block)
- Progressive rebuilds can be canceled, from Unity's **Background Tasks** window or with **Cancel Rebuild** on the stamp target
- A stamp drawn with **Edit Terrain Stamps** rebuilds only what it covers, instead of the whole target

### :wtk-buildings: Buildings

- Building block lots follow the heights of the block's knots, instead of one plane fitted through them, so a block drawn across uneven ground follows it
- Lots are drawn flat at the height their building stands on
- **Lot Overlays** settings: **Draw Occluded** and **Occluded Opacity** for lot lines and their handles behind geometry. See [Buildings Settings](../buildings/settings.md#lot-overlays)
- Lot, floor, corner and row height handles say what they adjust when you hover them, and show their value while you drag

### :wtk-modelling: Modelling (Editable Mesh)

- **Individual Origins** and **Projection Offset** for the **Projected Edge** and **Projected Face** snaps. See [Projected snaps](../modelling/transform.md#projected-snaps)
- **Projected Face** lands on the face as it's drawn, also on faces that aren't flat, and only inside the face
- **Edge Draw Mode**: mesh edges, UV seams and border edges can be solid or dashed. See [Modelling Settings](../modelling/settings.md#components-visibility)
- **Apply to Selection** in **Vertex Color** colors whole meshes when Editable Mesh objects are selected outside the editing context
- Cycling the pivot origin (++z++) or orientation (++x++) briefly shows the new choice in the Scene view
- The **Object Pivot** overlay becomes a dropdown when docked in a toolbar
- The hover highlight treats other objects like a click does: objects you aren't editing no longer hide the component under the cursor

### :wtk-splines: Splines & Roads

- Deleting a road, a spline or a linked knot takes its knots out of their link groups in the same undo step. A **Spline Link** left with fewer than two knots is deleted, and a road junction left with a single road is removed. See [Deleting linked splines](../splines/link-groups.md#deleting-linked-splines)

### :wtk-more: Editor & Tooling

- **Scene Label** component: a line and a label that name an object in the Scene view. See [Scene Labels](../more/scene-labels.md)
- The Snapping and pivot dropdowns and the Modelling Edit and UV editor toolbar buttons fit vertical toolbars and are rounded like Unity's own toolbar buttons

### :lucide-bug: Bug fixes

- Unity 7: component and tool icons were blank in the Inspector, Hierarchy and Project windows, on the Modelling and Splines context buttons and on the module windows' buttons
- Unity 7: the Modelling box selection rectangle hid everything under it
- Terrain: a rebuild that stopped early left terrain tiles drawn at full detail, slowing the Scene view down on large terrains. Scenes saved that way are fixed when they open
- Terrain: deleting a stamp that covers the whole terrain could run the editor out of graphics memory while the terrains rebuilt
- Terrain: every stamp edit during a progressive rebuild left a failed item in **Background Tasks**
- Terrain: **Mesh** masks applied from a preset didn't pick up the mesh on the stamp's object again
- Modelling: snapping while dragging one arrow of the **Move** handle could move the selection along every axis, far from the world origin
- Modelling: right-clicking opened the **Modelling Tools** menu only about every other time, and after picking a tool from it, the hover highlight and some shortcuts could stop working until the next right-click
- Modelling: the hover highlight went blank for a moment after every operation
- Modelling: the hover highlight could stop working for the rest of the session
- Splines: deleting a road or spline object left **Missing Container** entries in its link group, and deleting a knot from a two-knot link left a link, and its junction, with a single knot

## :lucide-tag: v0.0.5

Released: Nov 18, 2026

### :wtk-splines: Splines

- WTK's own spline system with knots, paths, link groups, pivots and anchors
- Shape modes: Circle, Rectangle, Polygon/Star, Spiral
- Free-form drawing, inserting knots mid-path, extracting to knots, and editing only selected knots
- Selection pivot controls and float curves shown in the Scene View
- Linking more than two knots at once, and editing the handles of linked knots
- **Circularize** in the knot menu
- Importing SVG files as splines
- Drawing splines in orthographic side views, and a highlight of the part of the spline each selected knot shapes

### :wtk-roads: Roads & Junctions

- Mesh roads with a rules system, plus a graph editor for road profiles and per-span materials
- Lanes: overrides per lane, divisions based on direction, one-way anchors, lane guides
- Road roll, curve quality, maximum and minimum strip lengths
- Junctions: several intersection modes, distances per mouth, biased S transitions, auto-rounded corners
- Junction markings (box markings included), wear masks, border merge
- Junction heights: **Plane** and **Spline Blend**, and neighbouring junctions sharing the road between them
- City blocks: automatic discovery of block floors from the road network
- Road materials with normal and mask maps, and UV unfold for trim sheets
- Create roads and junctions from a selection
- **Road Outliner**: the roads of the open scenes in an editable table
- Width overrides for the rules' layers on each road, and lane overrides for new roads
- Road names in the Scene view, and a **Show Lane Controls** toggle

### :wtk-buildings: Buildings

- Procedural buildings made of floor rows, foundation rows and procedural rows
- Multiple independent row lists, curved walls, max piece count
- Building blocks: lots cut along the block's streets by **Lot Rules**, setbacks, an overall inset, chance rules
- Automatic mesh baking, snapshots, a piece pool, and corner post-processing
- 3D previews for rules and walls
- Sample kits: Villa and Dublin Georgian terrace

### :wtk-modelling: Modelling (Editable Mesh)

- Primitives: Cylinder (with inner radius), radial with angle ranges, Arch, Tube, and a Surface primitive built from a spline
- Primitives drawn in orthographic side views, and flat cylinders with a height of 0
- **Loft**: surfaces lofted through spline profiles
- Boolean stack, mesh deformation, several face fill types
- Shading: Smooth by Angle and flat faces
- Vertex paint that can target face corners
- Vertex and edge slide, rectangle transforms, X-Ray preview, a pivot toolbar
- Edge **Connect** with **Segments**, **Slide** and **Pinch**
- Tool search in the Scene View
- Mesh Decals in stroke and area modes
- Binary externalization of mesh data, with optional per-scene auto-externalize
- **EditableMesh Outliner**: every Editable Mesh of the open scenes and where its data is stored

### :wtk-uv-view: UV Editing

- 2D UV editor with snapping and a custom pivot
- Flip, rotate, Normalize U/V, align, join faces
- Island gridify and straighten, strip unwrapping, tile alignment grid
- Lightmap UV generation
- Exporting the UV layout to PNG or SVG

### :wtk-terrain: Terrain

- Stamps: height, smoothing, erosion, holes, trees and details
- Masks: noise, mesh, height/slope (with incidence-based alpha), blur
- Snapping terrain to splines, with baking
- Support for multiple terrains and a mute option on stamps

### :wtk-component-spline-spawner: Spawners

- Spline Spawner, Spline Array Spawner (slots, corners, lattice, prefab chance) and Spline Area Spawner

### :wtk-more: Editor & Tooling

- Module windows (Roads, Buildings, Terrain, More), all built in UI Toolkit with SVG icons
- Snapping and Object Pivot overlays
- Debounce controls for rebuilds in each module
- Settings catalog that loads its defaults from `WorldToolkit.settings.initial.json`
- About window
- `wtk_*` CLI and MCP commands available
- Scene View performance overlay
- **Scene View Modes**: Geometry Height colours the scene by its height
- Camera menu (hold ++space++): the opposite views **Bottom**, **Right** and **Back**, and axis views that open with the rotation locked
