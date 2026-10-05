# Masks

Masks decide **where** a stamp layer applies and **how strongly**, from 0 (no effect) to 1 (full effect). A layer can stack several masks: each one is combined with the result of the ones above it.

## Fills

Fills create mask values. Each fill has an **Alpha** (its strength) and a **Mode** that sets how it combines with the masks above it: **Add**, **Subtract**, **Difference**, **Multiply** or **Divide**.

### Shapes

| Fill | Area |
|---|---|
| **Spline Area** | Inside a closed spline. Usually the stamp's own outline. |
| **Spline Stroke** | Along a spline, like a path or a river. **Width Multiplier** sets its width. |
| **Rectangle** / **Circle** | A simple shape. |
| **Mesh** | The area under a mesh, seen from above. |
| **Collider** | The area under a collider. |

### Fields

| Fill | Area |
|---|---|
| **Global** | Everywhere. |
| **Noise** | A noise pattern: **Perlin**, **Simplex** or **Voronoi**, with **Scale**, **Offset**, **Seed**, **Octaves**, **Lacunarity**, **Persistence** and **Invert**. Voronoi adds cell options. |
| **Texture** | Values read from a texture. |
| **Terrain Height** | Where the terrain is within a height range. |
| **Terrain Slope** | Where the terrain slope is within a range, in degrees. Great for rocks on steep slopes and grass on flat ground. |

For **Terrain Height** and **Terrain Slope**, **Modulate Alpha By Incidence** fades the mask across the range, from 0 at its minimum to 1 at its maximum, instead of a hard cut.

!!! note
    **Terrain Height** and **Terrain Slope** read the terrain as it is **before** their own stamp. To paint the slopes of a hill that a stamp creates, put the painting in a separate stamp below the hill in the Hierarchy.

## Adjustments

Adjustments change mask values. Where they go depends on their kind.

### Shape adjustments

Shape adjustments belong to one **shape fill** and only change that fill. Add them inside the fill, for example a **Border** inside a **Spline Area**.

| Adjustment | What it does |
|---|---|
| **Border** | Fades the mask toward its edges over **Size**. Use a curve for a custom falloff. |
| **Expand / Contract** | Grows or shrinks the mask. |
| **Offset** | Moves the mask sideways. |
| **Smooth** | Softens the mask's edges. |
| **Transform**, **Scale**, **Rotate** | Moves, scales or rotates the mask, optionally following another object's transform. |

### Value adjustments

Value and raster adjustments sit in the layer's mask list, and change the mask built by everything above them.

| Adjustment | What it does |
|---|---|
| **Brightness** | Makes the mask stronger or weaker overall. |
| **Contrast** | Pushes values apart, sharpening transitions. |
| **Peak Normalize** | Stretches the mask so its strongest point reaches 1. |

### Raster adjustments

| Adjustment | What it does |
|---|---|
| **Mask Blur** | Blurs the mask. |

## Previewing masks

Turn on **Show Mask Preview** in the Terrain **Settings** tab to see the selected stamp's mask on the terrain. The stamp inspector also shows a preview of each layer's mask.
