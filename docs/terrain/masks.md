---
icon: lucide/blend
---

# Masks

Masks decide **where** a stamp layer applies and **how strongly**, from 0 (no effect) to 1 (full effect). They live in the layer's **Mask Composition** list, which is read from top to bottom: each fill is combined with the result of the entries above it, and value adjustments change everything above them.

To add an entry, pick its type from the searchable list: fills are under **Fill > Shape** and **Fill > Field**, adjustments under **Adjustment > Value** and **Adjustment > Raster**.

## :lucide-paint-bucket: Fills

Fills create mask values. Every fill has:

**Alpha**
:   The fill's strength, from 0 to 1.

**Mode**
:   How the fill combines with the masks above it.

**Adjustments**
:   Adjustments attached to this fill. See [Adjustments](#adjustments).

| Mode | Result |
|---|---|
| **Add** | Adds the fill to the mask above. |
| **Subtract** | Removes the fill from the mask above. |
| **Difference** | How far apart the two are: the larger value minus the smaller. |
| **Multiply** | Multiplies the two: the mask only stays where both are strong. |
| **Divide** | Divides the mask above by the fill. |

The result always stays between 0 and 1.

!!! tip "Where a layer can reach"
    A layer whose first fill is **Global**, **Noise**, **Texture**, **Terrain Height** or **Terrain Slope**, in **Add** or **Difference** mode, covers the whole terrain. Otherwise it works around its shapes. To keep a field inside a shape, put the shape first and the field below it in **Multiply** mode.

### :lucide-shapes: Shapes

| Fill | Area | Settings |
|---|---|---|
| **Spline Area** | Inside a spline outline, usually the stamp's own. Every spline of the container counts. | **Spline Container** |
| **Spline Stroke** | Along a spline, like a path or a river. The spline doesn't need to be closed. | **Spline Container**, **Width Multiplier** |
| **Rectangle** / **Circle** | A rectangle, or the ellipse that fits in it, placed by the stamp object's Transform: its position, its Y rotation, and its X and Z **Scale** as the size in meters. Use them as the layer's first fill. | |
| **Mesh** | The area under a mesh, seen from above. | **Source Mesh**, **Use Front Facing Triangles** |
| **Collider** | The area under a collider, seen from above. | **Source Collider** |

At a **Width Multiplier** of 1, a **Spline Stroke** reaches 5% of the spline's overall size (the diagonal of its bounds) to each side, so longer splines give wider strokes.

**Use Front Facing Triangles** chooses which side of the mesh counts: on, the triangles that face up (its top); off, the ones that face down (its underside).

### :lucide-grid-3x3: Fields

| Fill | Area | Settings |
|---|---|---|
| **Global** | Everywhere. | |
| **Noise** | A noise pattern. | See [Noise](#noise). |
| **Texture** | The brightness of a texture, multiplied by its alpha, stretched over each terrain of the target. | **Texture** |
| **Terrain Height** | Where the terrain is within a range of world heights. | **World Height Range**, **Modulate Alpha By Incidence** |
| **Terrain Slope** | Where the terrain slope is within a range, in degrees (0 to 90). Great for rocks on steep slopes and grass on flat ground. | **Slope Degrees Range**, **Modulate Alpha By Incidence** |

For **Terrain Height** and **Terrain Slope**, **Modulate Alpha By Incidence** fades the mask across the range, from 0 at its minimum to 1 at its maximum, instead of a hard cut.

!!! note
    **Terrain Height** and **Terrain Slope** read the terrain as it is **before** their own stamp. To paint the slopes of a hill that a stamp creates, put the painting in a separate stamp below the hill in the Hierarchy. Trees and details are the exception: they're placed after every stamp has shaped the ground, so their masks see the finished terrain.

#### Noise

**Noise Type**
:   **Perlin**, **Voronoi** or **Simplex**.

**Scale**
:   The size of the pattern, in world units. Larger values give larger features.

**Offset**
:   Moves the pattern, in world units.

**Seed**
:   Picks another random pattern.

**Octaves**, **Lacunarity** and **Persistence**
:   Add layers of finer detail: how many layers, how much finer each layer is than the previous one, and how much each layer counts.

**Invert**
:   Flips the pattern.

**Output Range**
:   Remaps the noise into this range, before **Threshold** is applied.

**Threshold** and **Softness**
:   Turn the noise into a mask: values above **Threshold** count, values below don't, with a transition **Softness** wide. A **Softness** of 0 gives a hard edge.

Voronoi noise adds cell options:

**Jitter**
:   How irregular the cells are. At 0, they form a regular grid.

**Distance Mode**
:   **Euclidean**, **Manhattan** or **Chebyshev**: round, diamond or square cells.

**Return Mode**
:   What the value measures: **Nearest Cell Distance**, **Second Nearest Cell Distance** or **Edge Distance** (the distance to the border between cells).

## :lucide-sliders-horizontal: Adjustments

Adjustments change mask values. Where they go depends on their kind.

### :lucide-shapes: Shape adjustments

Shape adjustments belong to one **shape fill** and only change that fill. Add them to the fill's **Adjustments** list, for example a **Border** inside a **Spline Area**.

| Adjustment | What it does |
|---|---|
| **Border** | Adds a soft falloff outside the shape, **Size** meters wide. Turn on **Use Curve** to shape the falloff with **Curve**. |
| **Smooth** | Softens the shape's edge, over **Smooth** meters on each side of it. **Use Curve** and **Curve** shape the transition. |
| **Expand / Contract** | Grows the shape by **Expand Contract** meters, or shrinks it with a negative value. |
| **Offset** | Moves the shape by **Xz Offset**, in meters along X and Z. |
| **Scale** | Scales the shape around its center by **Xz Scale**. With **Absolute** on, the values are its size in meters instead. |
| **Rotate** | Turns the shape around its center by **Y Rotation Degrees**. With **Absolute** on, this replaces the rotation set by the adjustments above it. |
| **Transform** | Places the shape on **Source Transform**: its position, Y rotation and X and Z scale. |

Several **Expand / Contract** adjustments add up. For **Smooth** and **Border**, the largest one wins.

### :lucide-sliders-vertical: Value and raster adjustments

These go in the layer's **Mask Composition** list, or in the **Adjustments** of a field fill (**Global**, **Noise**, **Texture**, **Terrain Height**, **Terrain Slope**).

| Adjustment | What it does |
|---|---|
| **Brightness** | Adds **Brightness** to the mask: positive values strengthen it, negative values weaken it. |
| **Contrast** | Pushes values away from the middle by **Contrast**, sharpening transitions. |
| **Peak Normalize** | Stretches the mask so its strongest point reaches 1. |
| **Mask Blur** | Blurs the mask over **Radius** meters, **Iterations** times (1 to 8). |

In the **Mask Composition** list, **Brightness** and **Contrast** change the mask built by the entries above them. Inside a field fill, they only change that fill. **Peak Normalize** and **Mask Blur** always work on the layer's finished mask, after every fill is combined.

## :lucide-eye: Previewing masks

Turn on **Show Mask Preview** in the Terrain **Settings** tab to see the selected stamp's mask on the terrain as a red overlay. The stamp inspector also shows each layer's mask in its **Layer Masks** preview. See [Stamp layers](stamps.md#stamp-layers).
