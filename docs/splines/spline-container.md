---
icon: wtk/component-spline-container
---

# Spline Container

A :wtk-component-spline-container: **Spline Container** holds one or more splines, which its inspector calls paths. Create one from **GameObject > World Toolkit > Spline Container**, which adds an object with a short two-knot spline, or add the component with **Add Component > World Toolkit > Splines > Spline Container**. You can also draw new ones directly while [editing splines](index.md#where-to-edit-splines).

## :lucide-pen-tool: Drawing splines

While editing splines:

1. With no knots selected, hold ++shift++ and **click** away from other splines to place the first knot. If a Spline Container is selected, the new spline is added to it. Otherwise a new **Spline** object is created.
2. **Click** to add each knot. **Click and drag** to pull out the new knot's handles: it becomes a **Bezier** knot with **Mirrored** handles.
3. Finish the spline in one of these ways:
    - **Right-click**, or press ++esc++.
    - **Click the knot at the other end** of the spline, usually the first one, to close it into a loop.
    - **Click the end knot of another open spline** to join the new spline to it.

**Double-click** either end knot of an open spline to continue drawing from it: the new knots take that knot's type. **Double-click** a spline between two knots to insert a knot there.

!!! note "Single-knot splines"
    If you right-click after placing just one knot of a new spline object, the object is removed again. ++esc++ always keeps the knots you placed.

### :wtk-snap: Where new knots land

New knots use the [snapping](../modelling/transform.md#snapping) options shared by all World Toolkit tools. Turn snapping on in the :wtk-snap: **Snapping** panel of the Scene view, or with ++shift+v++.

| Snapping | Where the new knot goes |
|---|---|
| Off | On the ground plane, at height 0. |
| On, over a snap target | On the target under the cursor, among the ones turned on in the **Snapping** panel: vertices, edges, face surfaces, spline knots, collider surfaces (**Surface (Collider)**) and so on. On a face or collider surface, the knot is also tilted to match it. |
| **Grid** | Away from targets, onto the grid (**Grid Size**). On a face or collider surface, the rounding happens along the surface, so the knot stays on it. |
| **Increment** | After the first knot, a whole number of **Grid Size** steps away from the previous knot, across the ground plane. It wins over **Grid** when both are on. |

The knot you're drawing from is never a snap target, so it can't swallow the next knot. Handles you pull out of a new knot snap the same way, and a highlight shows what the knot is snapping to.

## :wtk-new-splines: New Splines panel

The :wtk-new-splines: **New Splines** panel in the Scene view sets up the splines you draw:

**New Spline Mode**
:   The type of the knots you click: **Auto** creates smooth curves with handles set automatically, **Linear** creates straight segments.

### :lucide-signature: Freeform drawing

Click **Draw Freeform Spline**, then hold the mouse button and drag in the Scene view to draw a spline like a pencil stroke. The stroke is turned into a smooth curve of **Auto** knots. The tool stays on so you can draw more strokes: click **Exit Freeform Spline** or press ++esc++ to stop.

| Setting | What it does |
|---|---|
| **Minimum Sample Distance** | How far apart the captured points of the stroke are. |
| **Simplification Tolerance** | How much the stroke is simplified. Higher values give fewer knots. |
| **Close Distance** | If the stroke ends this close to where it started, the spline is closed. |
| **Stick to Surface** | Draws on the colliders under the cursor instead of the ground plane. |
| **Append to Selected Container** | Adds the stroke to the selected Spline Container instead of creating a new object. |

### :lucide-shapes: Shapes

Click a shape button, then drag in the Scene view to draw the whole shape in one go. The shape tool stays on so you can draw several: click its button again, or press ++esc++, to stop. ++esc++ during a drag only cancels that shape.

:lucide-circle: **Circle**
:   Drag corner to corner. Hold ++ctrl++ for a perfect circle.

:lucide-rectangle-horizontal: **Rectangle**
:   Drag corner to corner. Hold ++ctrl++ for a square.

:lucide-pentagon: **Polygon**
:   Drag from the center to set the radius and rotation. **Sides** sets the number of sides, or the number of points for a star. **Inset** pulls every other knot toward the center to make a star, and **Spike Size** rounds the outer points.

:lucide-shell: **Spiral**
:   Drag from the center to set the outer radius and rotation. **Turns** sets the number of revolutions. **Inner Radius** is where the spiral starts, as a fraction of the dragged radius: 0 starts at the center, 1 keeps the radius constant. **Height** lifts the end of the spiral off the surface, so a constant radius with a height makes a spring; a negative height coils downwards. **Radius Bias** and **Height Bias** pack the turns toward the start (negative) or the end (positive) of the radius and of the height.

**Stick to Surface** starts the shape on the collider under the cursor, aligned with it; the rest of the drag stays on that plane. **Append to Selected Container** adds the shape to the selected Spline Container instead of creating a new object. Both have their own setting here, separate from the freeform ones.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/splines/spline-shapes.webp">
    <source src="../assets/videos/splines/spline-shapes.mp4" type="video/mp4">
  </video>
  <figcaption>Freeform strokes, circles, rectangles, polygons and stars.</figcaption>
</figure>

## :lucide-mouse-pointer-click: Editing knots

- **Click** a knot or handle to select it. Hold ++shift++ to add to the selection, ++ctrl++ to remove from it.
- **Drag** across empty space to box-select knots, with the same modifiers.
- ++ctrl+a++ selects every knot of the splines you already have knots on, or every visible knot when nothing is selected.
- **Click** a spline's line to select its object.
- **Drag** a selected knot or handle to move it. With snapping on, dragged knots snap too.
- Unity's **Move**, **Rotate** and **Scale** tools work on the selected knots. Rotating a single knot turns it in place, and several knots turn around their center.
- ++f++ frames the selected knots.
- ++delete++ or ++backspace++ deletes the selected knots. Deleting the last knot of a spline removes the spline.

### :wtk-selected-knots: Selected Knots panel

The :wtk-selected-knots: **Selected Knots** panel says how many knots are selected, on how many splines and containers, and edits them all at once:

**Closed**
:   Whether the selected knots' splines are closed loops.

**Position** and **Rotation**
:   The knots' position and rotation, relative to their Spline Container.

**Linear**, **Auto** and **Bezier**
:   The knot type, see the table below. With a single **Bezier** knot selected, the **Bezier** list picks how its handles behave.

**In** and **Out**
:   The length of the knot's two handles. Expand them to type each handle's position. Typing a handle value turns the knot into a **Bezier** knot with **Broken** handles, unless it is **Mirrored**.

| Type | Curve |
|---|---|
| **Linear** | Straight lines in and out of the knot, no handles. |
| **Auto** | Smooth, with handles set automatically. |
| **Bezier** | Handles you control. Choose how they behave: **Mirrored** (both sides equal), **Broken** (independent) or **Continuous** (aligned, but different lengths). |

### :lucide-menu: Knot menu

**Right-click** with knots selected for more operations:

**Split**
:   Cuts an open spline in two at each selected knot; both new ends sit on that knot. On a closed spline, opens the loop at the knot. The two end knots of an open spline can't be split.

**Extract**
:   With two or more knots of the same spline selected, moves that stretch into a copy of the spline's object, named after it with **Extracted** added. The original keeps the rest, cut open where the stretch was.

**Join**
:   With two end knots selected, joins two open splines into one, or closes a spline when both ends are its own. The joined knot sits halfway between them.

**Link** and **Link to Selected Knot Link**
:   Make knots of different splines move together. See [Link Groups](link-groups.md).

**Drop to Ground** (++alt+shift+d++)
:   Moves the selected knots onto the ground below them: any collider or terrain. Knots buried under the ground move up onto it. The spline's own object is ignored, so a road doesn't land on its own mesh.

**Center Pivot on Selection**
:   Moves the container's pivot to the center of the selected knots, without moving the spline.

## :lucide-list-tree: Paths and path data

The inspector lists the container's splines under **Paths**. **Add Spline Path** adds a new short two-knot spline. Each path has:

**Closed**
:   Whether the spline is a closed loop.

**Knots**
:   The knots, usually edited in the Scene view.

**Path Data**
:   Extra values stored along the spline, each with a **Name** that other tools look up. Add an entry and pick its type, for example **Float Curve** (a curve from the start of the spline, 0, to its end, 1) or **Gradient** (colors along it). A [Point Anchor](point-anchors.md) can read a **Float Curve** to scale its object.

**Override Debug Sampling** and **Debug Samples Per Segment**
:   Draw this spline smoother or coarser than the **Samples Per Segment** in the [Spline Settings](settings.md).

**Debug Thickness Data Name** and **Debug Color Data Name**
:   The name of a **Float Curve** that sets the drawn line's thickness along the spline, and of a **Gradient** that colors it.

??? info "Editing a Float Curve in the Scene view"
    Set a **Float Curve**'s **Show On Scene As** to draw it along the spline while its object is selected and splines are shown. **Sides Mirrored** draws two lines, one on each side of the spline, half the value away from it, which suits widths. **Sides** draws one line offset to the right, negative values going left. **Vertical Mirrored** and **Vertical** do the same above and below the spline.

    - **Double-click** a line to add a key, and **double-click** a key to delete it.
    - **Drag** a key along the spline to move it, or across it to change its value.
    - **Right-click** a key for **Delete Key**, **Edit Key...** and the curve's tangent options.

## :lucide-settings: Settings

The [Spline Settings](settings.md), in the **Settings** tab of the More module, set how splines and knots are drawn and which containers you can edit.
