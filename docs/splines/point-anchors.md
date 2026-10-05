# Point Anchors

A **Spline Point Anchor** keeps an object attached to a point on a spline. When the spline changes, the object follows. Use it for lamp posts at a road corner, a sign at the end of a path, or anything that must stay in place along a curve.

Add it with **Add Component > World Toolkit > Splines > Spline Point Anchor**.

## Settings

**Container** and **Path Index**
:   The spline the object is attached to. **Path Index** picks the path when the container has several.

**Position**
:   Where along the spline the object sits.

**Anchor Position**
:   Moves the object to the spline point. **Position Offset** is applied in the spline's own directions: X to the right, Y up, Z forward.

**Anchor Rotation**
:   Rotates the object to follow the spline direction. **Rotation Offset** adds an extra rotation on top.

**Anchor Scale**
:   If the spline has a float curve named **Scale Data Name** (by default, `Scale`), the object is scaled by the curve's value at the anchor point, multiplied by **Base Scale**.
