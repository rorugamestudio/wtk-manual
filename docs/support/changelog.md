---
icon: lucide/history
---

# Changelog

What changed in each World Toolkit release, newest first.

<div class="wtk-version-picker"></div>

## :lucide-tag: v0.0.7

!!! warning "Upgrading from v0.0.6"
    - **Stairs** rebuilt from their parameters (any edit of their settings or spline, or **Force Rebake**) lay their steps out anew: a segment between knots at the same height becomes a landing without steps, and every step of a flight gets the same height. Stairs with a single straight flight keep their shape. See [Stairs](../modelling/primitives.md#stairs).
    - **Lofts** with a rail that doesn't reach every profile take a new shape at their next rebuild: the rail steers only the profiles it reaches, and past them the surface keeps its own shape instead of bending towards the rail's end. Lofts whose rails reach every profile don't change. See [Loft](../modelling/loft.md#shape).
    - **Lofts** of open profiles made from now on face the side given by their profile order, which can be the other side from before. That includes lofts made by scripts with `wtk_modelling_create_loft`: pass `"facing": "ConvexSide"` for the old side. Lofts saved with v0.0.6 keep facing the way they did. See [Loft](../modelling/loft.md#surface).

### :wtk-modelling: Modelling (Editable Mesh)

- **Stairs** turn a spline segment between two knots at the same height into a landing: one flat face, with no steps
- **Stairs Step Mode** **Height** builds steps of a set height (0.18 m for new stairs), stretched or squeezed so each flight fits its rise; **Count** shares the steps among the flights by their rise
- The Editable Primitive inspector shows the height the stairs' steps got, and with **Height** how many steps it made
- Stairs risers face the right way when the spline is drawn from the top down
- Loft **Facing**: a surface of open profiles faces the side set by the direction of its first profile and the order of its profiles (**Profile Order**), so reshaping it never turns it over and **Reverse Order** does. Lofts made before keep the old rule, now called **Convex Side**
- A loft **Rail** can end short of the outer profiles: it steers only the profiles it reaches, and past them the surface carries on smoothly. A rail that reaches fewer than two profiles is left out
- A loft end set to **Tangent** can carry on from the side of another loft: a loft that has the end's profile as a rail along one of its sides. Two lofts meet in an L without a crease. See [Joining a loft to the side of another](../modelling/loft.md#joining-a-loft-to-the-side-of-another)
- A loft end set to **Tangent** has **Match Normals**: the seam takes the neighbour's shading and blends back into the loft's own over a share of its first span, so no line shows in the light along it. See [Joining lofts without a crease](../modelling/loft.md#joining-lofts-without-a-crease)
- Eyedropper buttons on the loft's rails, **Centerline**, profile **Spline** and **Point**, and an end's **Neighbour** pick them in the Scene view, in the Loft tab and the Inspector. **Neighbour** only offers the lofts that end can carry on from. The eyedropper on **Centerline** replaces **Pick Centerline**. See [Picking in the Scene view](../getting-started/world-toolkit-window.md#picking-in-the-scene-view)

### :wtk-splines: Splines

- With the **Center** handle position, selected Spline Containers are moved, rotated and scaled about the average of their knots instead of their objects' pivots. See [Moving whole splines](../splines/spline-container.md#moving-whole-splines)

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
