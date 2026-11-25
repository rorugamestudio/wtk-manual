---
icon: wtk/transform-options
---

# Transform

Move, rotate and scale the selected components with Unity's regular **Move**, **Rotate** and **Scale** tools. The handle appears at the selection's pivot.

!!! tip "Extrude while you drag"
    In edge or face mode, hold ++shift++ when you start dragging a **Move**, **Rotate** or **Scale** handle: the selection is extruded first, and the new geometry follows the handle. Extrude and transform are a single undo step, and the **Move** tool shows the extruded distance in the Scene view.

## :lucide-crosshair: Pivot and orientation

Both are in the Scene view's **Tool Settings**, in place of Unity's **Center**/**Pivot** and **Global**/**Local** dropdowns, while a modelling transform tool is active.

**Origin** sets where the handle sits:

| Origin | Pivot |
|---|---|
| :wtk-pivot-origin-center: **Center** | The center of the whole selection. |
| :wtk-pivot-origin-individual: **Individual** | Each selected element transforms around its own center. |
| :wtk-pivot-origin-custom: **Custom** | A position you stored with **Set Custom Pivot**. |

**Orient** sets how the handle is rotated:

| Orient | Axes |
|---|---|
| :wtk-pivot-orientation-global: **Global** | World axes. |
| :wtk-pivot-orientation-local: **Local** | The object's axes. |
| :wtk-pivot-orientation-normal: **Normal** | Aligned to the selection's surface direction. |
| :wtk-pivot-orientation-edges: **Edges** | Aligned to the selected edges. |
| :wtk-pivot-orientation-custom: **Custom** | A rotation you stored with **Set Custom**, or set with **Point to**, which aims from the custom pivot toward the selection. |

Unity's own shortcuts work on them: ++z++ switches the origin between **Center** and **Individual** (Unity's **Pivot**), and ++x++ the orientation between **Global** and **Local**. **Custom**, **Normal** and **Edges** are picked from the dropdowns.

### :wtk-pivot-origin-custom: Custom pivots

With **Origin** set to **Custom**:

- **Set Custom Pivot** stores the center of the current selection.
- **Edit** moves the stored pivot with a handle in the Scene view.
- **Auto Update Custom Pivot** moves the stored pivot along with the selection when you use **Move**.

**Custom Orient** works the same way, with **Auto Update Custom Orientation** following **Rotate**.

You can also press ++d++ in the Scene view to edit the pivot, starting from where the handle is: the first press edits its position with a handle, the second its rotation, and the third finishes. ++esc++ cancels.

## :wtk-transform-options: Transform Options

**Lock on axis**
:   Restricts the transform to the chosen axes.

:wtk-proportional-transform: **Proportional Transform**
:   Also moves nearby unselected components, fading with distance, for smooth soft edits. Turn it on with **Activate**, then set the **Radius** of the effect and its **Falloff** shape: **Smooth**, **Sphere**, **Root**, **Sharp**, **Linear**, **Constant**, or a **Custom** curve. **Domain** decides what counts as "nearby": everything within the radius (**World**), or only components connected to the selection (**Connected**).

:wtk-proportional-2-axis: **Proportional 2-Axis Scaling**
:   A toolbar toggle. When you drag one of the **Scale** tool's plane handles, which scale two axes at once, both axes scale by the same amount.

## :wtk-transform-numeric: Numeric Transform

Type exact values instead of dragging:

1. Choose **Move**, **Rotate** or **Scale**.
2. Enter the values and press **Apply**. **Reset** clears them.

**Absolute**
:   Moves the pivot to the typed world position, instead of moving by that amount.

**Flip Normals**
:   When a scale mirrors the faces (one or three negative axes), flips them so they keep facing outward.

**Flip UVs**
:   When a scale is negative, mirrors the UVs too. Faces with automatic UVs become manual.

!!! tip "Repeat it"
    Press ++enter++ in the Scene view to repeat the last move, rotation or scale, dragged or typed, on the current selection. See [Repeating the last action](editing-tools.md#repeating-the-last-action).

## :wtk-pivot: Object pivot

The **Object Pivot** overlay in the Scene view works on the selected Editable Mesh object's own pivot, its Transform. Docked in a Scene view toolbar, it becomes a dropdown with the pivot icon that opens the same options. Its buttons move or rotate that pivot without moving the mesh:

**Show Object Pivot**
:   Draws the selected object's pivot in the Scene view.

**Align To Selection Pivot**
:   Moves the object's pivot to the pivot of the current component selection.

**Orient To Selection Pivot**
:   Rotates the object's pivot to the orientation of the current component selection pivot.

**X**, **Y** and **Z**
:   Move the object's pivot to the start, middle or end of the mesh's bounds on that axis: **Left**, **Center** or **Right**; **Bottom**, **Middle** or **Top**; **Back**, **Center** or **Front**.

**Bake Transform**
:   **Position**, **Rotation**, **Scale** or **All** bakes that part of the object's transform into the mesh, while the mesh and its child objects stay where they are.

## :lucide-arrow-down-to-line: Drop to Ground

With components selected, **Drop to Ground** (++alt+shift+d++) moves every vertex of the selection straight down onto the surface below it, so the selection follows the ground. The mesh's own colliders are ignored. With objects selected instead, the same command drops the whole objects; see [Drop to Ground](../more/ground-snap.md#drop-to-ground).

## :wtk-snap: Snapping

Press ++shift+v++ to turn snapping on or off. The :wtk-snap: **Snapping** overlay in the Scene view (its title reads **Snapping: On** or **Snapping: Off**) sets what the selection snaps to and how close it has to be. The same options are in the **Snapping** section of the [Modelling settings](settings.md#snapping), for the Scene view and for the UV View.

| Option | What it does |
|---|---|
| **Activate Snapping** | Turns all the chosen snap modes on or off at once, without changing them. Same as ++shift+v++. |
| **Snap To Selected Only** | Only uses the selected objects as snap targets. |
| **Use snapping outside Edit Mode** | Allows snapping while using tools outside their main edit mode. |
| **Grid** | Snaps to the grid, every **Grid Size**. |
| **Vertex**, **Edge**, **Face Surface** | Snaps to vertices, to edges, or to any point on a face. |
| **Edge Center**, **Face Center** | Snaps to the middle of edges and faces. |
| **Spline Knot** | Snaps to spline knots. |
| **Increment** | Moves in fixed steps. |
| **Surface (Collider)** | Snaps to the colliders in the scene. |
| **Projected Edge**, **Projected Face** | Snaps to visible edges or faces projected along an axis. **Automatic** follows the axis of the handle you drag, or the normal of a plane handle; dragging freely needs **X**, **Y** or **Z**. |

Most modes have a **Tolerance**: how close the cursor has to get before that target catches it. The UV View has fewer modes: the UV grid, vertices, edges, and edge and face centers.

While you drag one arrow of the **Move** handle, snapping only moves the selection along that arrow's axis; a plane handle snaps along its two axes.

### :lucide-arrow-down-to-dot: Projected snaps

**Projected Face** lands on the surface of the face as it's drawn, even when the face isn't flat. The point has to fall inside the face: when the pivot isn't over the face under the cursor, it lands on the face of that mesh it is over, and with nothing of the mesh on its axis there's no snap. Faces that move with the selection aren't targets.

**Projected Edge** and **Projected Face** each have two more options, shown right under them in the snapping options:

**Individual Origins**
:   Projects every selected element from its own origin, so each one lands on the target: a vertex, the middle of an edge or the center of a face. Off, the whole selection moves as one with the projection of its pivot. It applies when you move components with the **Move** tool; with [Proportional Transform](#transform-options), and for pivots and objects, the selection still moves as one.

**Projection Offset**
:   Leaves a gap, in meters, between what is projected and the target, along the projection axis and on the side it started from. It stops short of the target however far you drag; negative values go past it. The dashed line of the snap highlight spans the gap.
