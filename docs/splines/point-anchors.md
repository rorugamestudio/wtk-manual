---
icon: wtk/component-spline-point-anchor
---

# Point Anchors

A :wtk-component-spline-point-anchor: **Spline Point Anchor** keeps an object attached to a point on a spline. When the spline changes or the spline's object moves, the anchored object follows. Use it for lamp posts at a road corner, a sign at the end of a path, or anything that must stay in place along a curve. It works in the editor and in Play mode.

## :lucide-list-ordered: Setting one up

1. Select the object to attach and add **Add Component > World Toolkit > Splines > Spline Point Anchor**.
2. Drag the object with the spline into **Container**. If it holds several splines, set **Path Index** (0 is the first).
3. In **Position**, pick where to measure from (**Start**, **End** or a **Knot**), then how far along the spline.
4. Choose what the spline controls with **Anchor Position**, **Anchor Rotation** and **Anchor Scale**, and add offsets if the object shouldn't sit exactly on the line.

!!! tip "Use the offsets, not the Move tool"
    While **Anchor Position** or **Anchor Rotation** is on, the anchor puts the object back on the spline whenever the spline changes. To shift the object, change **Position Offset** or **Rotation Offset** instead of moving it by hand.

## :lucide-settings: Settings

**Container** and **Path Index**
:   The spline the object is attached to. **Path Index** picks the spline when the container has several.

**Position**
:   Where along the spline the object sits, in one row:

    - The point to measure from: **Start** or **End** of the spline, or a **Knot**. For a knot, type its number after **K** (the first knot is 0; turn on **Show Knot Indexes** in the [Spline Settings](settings.md) to see the numbers).
    - The distance from that point, after **+**. Negative values go back toward the start.
    - **Units** measures that distance in world units along the spline. **Percent** measures it as a fraction of the spline's whole length: 0.5 is halfway.

    Drag the **K** or **+** label left and right to change the value, like any Unity number label.

**Anchor Position**
:   Moves the object to the spline point. **Position Offset** is applied in the spline's own directions: X to the right, Y up, Z forward.

**Anchor Rotation**
:   Rotates the object to follow the spline direction. **Rotation Offset** adds an extra rotation on top.

**Anchor Scale**
:   If the spline has a **Float Curve** [path data](spline-container.md#paths-and-path-data) entry named **Scale Data Name** (`Scale` by default), the object is scaled by the curve's value at the anchor point, multiplied by **Base Scale**.
