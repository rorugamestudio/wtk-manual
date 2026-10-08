---
icon: lucide/mountain
---

# Height

The **Height** operation changes the shape of the ground inside its [mask](masks.md). It takes a height from a **source** (a spline, a collider or a mesh) and moves the terrain toward it.

## :lucide-sliders-horizontal: Mode

**Mode** sets how the stamp's height combines with the terrain:

| Mode | Result |
|---|---|
| **Set** | Moves the terrain to the stamp height. |
| **Blend** | Blends from the terrain height to the stamp height, following the mask. |
| **Add** | Raises the terrain by the stamp height, measured from the terrain's base level (the Y position of the terrain object). |
| **Subtract** | Lowers the terrain by that same amount. |
| **Clamp** | Cuts terrain that is above the stamp height down to it. Lower terrain is left untouched. |

In every mode the mask strength scales the change: where the mask is weaker, the terrain moves only part of the way.

## :lucide-crosshair: Height Source

The surface the stamp takes its height from:

:lucide-spline: **Spline**
:   The height of the **Source Spline**. New stamps use their own outline: draw the outline at the height you want, and the ground follows it. Between the knots, the heights of the nearby parts of the spline are blended. With no spline assigned, the stamp uses the height of its own object.

:lucide-box: **Collider**
:   The top surface of the **Source Collider**, as seen from above. Use it to make the terrain match a road, a plaza or a platform. If **Source Collider** is empty, the layer's first **Collider** mask is used.

:lucide-cuboid: **Mesh**
:   The surface of the **Source Mesh** (a Mesh Filter). **Source Mesh Uses Front Facing Triangles** chooses which side counts: on, the triangles that face up; off, the ones that face down. If **Source Mesh** is empty, the layer's first **Mesh** mask is used, with its own setting.

With a collider or mesh source, only the ground under that object changes.

**Source Height Offset** moves the source height up or down, in meters.

A spline that carries a [Terrain Spline Snap](terrain-spline-snap.md#terrain-spline-snap) can't be used as a source: stamps ignore it.

## :lucide-chart-spline: Source Mode and profile

**Source Mode** chooses how the source and the **Profile Curve** combine. The curve shapes the stamp across its area: the left end of the curve (time 0) is the stamp's edge, and the right end (time 1) is its deepest point, the one furthest from the edge. **Profile Multiplier** scales the curve's values.

:lucide-blend: **Blend To Source**
:   The stamp height blends between the height of the source's nearest edge (curve value 0) and the source's own surface (curve value 1). A spline outline whose knots are all at the same height gives a flat surface at that height.

:lucide-move-vertical: **Offset From Source**
:   The stamp height is the source surface plus the **Profile Curve** value times **Profile Multiplier**, in meters. Use it to build shapes along the source, such as a hill, an embankment along a road or a ditch beside it.

## :lucide-list-ordered: Examples

### Raise a hill

1. Draw a stamp outline on the ground.
2. In its Height operation, set **Mode** to **Set** and **Source Mode** to **Offset From Source**.
3. Edit **Profile Curve** so it rises from 0 on the left (the outline) to 1 on the right (the middle of the stamp).
4. Set **Profile Multiplier** to the height of the hill, in meters.

### Fit the ground to a plaza or road mesh

1. Draw a stamp outline around the mesh.
2. In its Height operation, set **Mode** to **Set**, **Source Mode** to **Offset From Source** and **Height Source** to **Mesh**.
3. Assign the mesh's Mesh Filter to **Source Mesh**. Leave **Profile Curve** flat at 0, so the ground matches the mesh surface.
4. A small negative **Source Height Offset** keeps the ground just below the surface.

!!! tip
    With a spline source, combine **Height** with a **Border** adjustment on the stamp's **Spline Area** mask for a soft transition into the surrounding terrain. See [Shape adjustments](masks.md#shape-adjustments).
