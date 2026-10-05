# Spline Container

A :wtk-component-spline-container: **Spline Container** holds one or more spline paths. Create one from **GameObject > World Toolkit > Spline Container**, or add it with **Add Component > World Toolkit > Splines > Spline Container**.

To add another path to the same container, click **Add Spline Path** in its inspector.

## Drawing splines

While editing splines:

- Hold ++shift++ and **click** empty space to start a new spline, then **click** to add each knot.
- Press ++esc++ or **right-click** to finish drawing.
- **Double-click** the end knot of a spline to continue drawing from it.

The :wtk-new-splines: **New Splines** panel in the Scene view sets how new knots are created:

**New Spline Mode**
:   **Auto** creates smooth curves, with handles set automatically. **Linear** creates straight segments.

**Append to Selected Container**
:   Adds new splines to the selected container instead of creating a new object.

### :wtk-shape-freeform: Freeform drawing

**Draw Freeform Spline** lets you draw a spline by holding the mouse button and dragging, like a pencil. The stroke is turned into a smooth curve.

| Setting | What it does |
|---|---|
| **Minimum Sample Distance** | How far apart the captured points of the stroke are. |
| **Simplification Tolerance** | How much the stroke is simplified. Higher values give fewer knots. |
| **Close Distance** | If the stroke ends this close to where it started, the spline is closed. |
| **Stick to Surface** | Draws on the objects under the cursor instead of a flat plane. |

### :wtk-shape-ellipse: Shapes

Draw common shapes in one drag:

**Circle**
:   Drag corner to corner. Hold ++ctrl++ for a perfect circle.

**Rectangle**
:   Drag corner to corner. Hold ++ctrl++ for a square.

**Polygon**
:   Drag from the center to set the radius and rotation. **Sides** sets the number of sides, or the number of points for a star. **Inset** pulls every other knot toward the center to make a star, and **Spike Size** rounds the outer points.

**Spiral**
:   Drag from the center. **Turns** sets the number of revolutions.

**Stick to Surface** starts the shape on the surface under the cursor, aligned with it.

## Editing knots

- **Click** a knot or handle to select it. Hold ++shift++ to add to the selection, ++ctrl++ to remove from it.
- **Drag** across empty space to box-select knots.
- **Drag** a selected knot or handle to move it.
- ++delete++ or ++backspace++ deletes the selected knots.

The :wtk-selected-knots: **Selected Knots** panel shows the selection's **Position** and **Rotation**, and whether the spline is **Closed**. It also has the knot **type**:

| Type | Curve |
|---|---|
| **Linear** | Straight lines in and out of the knot, no handles. |
| **Auto** | Smooth, with handles set automatically. |
| **Bezier** | Handles you control. Choose how they behave: **Mirrored** (both sides equal), **Continuous** (aligned, but different lengths) or **Broken** (independent). |

### Knot menu

**Right-click** with knots selected for more operations:

**Split**
:   Cuts the spline at the selected knots.

**Extract**
:   Moves the selected part into a new spline.

**Join**
:   Connects the selected end knots of two splines into one.

**Link** and **Link to Selected Knot Link**
:   Make knots of different splines move together. See [Link Groups](link-groups.md).

**Drop to Ground**
:   Moves the selected knots down onto the surface below.

**Center Pivot on Selection**
:   Moves the container's pivot to the center of the selected knots.

## Settings

Spline display options are in the **Settings** tab of the **More** module:

- **Always Show Splines**, **Line Thickness**, **Knot Size** and **Show Knot Indexes**.
- **Draw Occluded** and **Occluded Opacity** show splines hidden behind other objects.
- **Edit Selected Containers Only** only shows editable knots on the containers you have selected. Useful in busy scenes.
- **Colors** for every part of the spline display.
