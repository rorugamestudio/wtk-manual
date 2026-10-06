---
icon: lucide/sprout
---

# Details

The **Details** operation places grass, flowers, small rocks and other terrain details inside its [mask](masks.md).

**Source**
:   A :lucide-file-box: **Terrain Detail Source** asset describing the detail. **New**, next to the field, creates one and assigns it.

**Density**
:   How many details to add to each cell of the terrain's detail map where the mask is full. Weaker mask values add fewer.

## :lucide-info: How details are placed

- The Detail Source is added to the terrains' detail prototypes when needed. Operations that use the same Detail Source share one detail layer, so where they overlap, their densities add up.
- Like trees, details are placed after every stamp has shaped the terrain, stamp by stamp in Hierarchy order, and never on a hole.
- When the terrain's **Detail Scatter Mode** is **Coverage Mode**, **Density** is converted to the matching coverage.
- Editing a Detail Source updates every stamp that uses it.

## :lucide-file-box: Terrain Detail Source

Create one from **Assets > Create > World Toolkit > Terrain > Detail Source**, or with **New** next to a Details operation's **Source**. It holds the same settings as a Unity terrain detail, so you can reuse it across stamps and terrains.

Choose the kind of detail with the buttons at the top:

:lucide-cuboid: **Detail Mesh**
:   A prefab, set in **Detail Prefab**. **Render Mode** and **Use GPU Instancing** control how it's drawn.

:lucide-image: **Grass Texture**
:   A texture, set in **Detail Texture**. Turn on **Billboard** to make the grass always face the camera.

Both kinds share these settings:

| Setting | What it does |
|---|---|
| **Align To Ground (%)** | How much details tilt to follow the slope of the ground. |
| **Position Jitter (%)** | How randomly details are scattered. |
| **Min Width** / **Max Width**, **Min Height** / **Max Height** | The size range of the details. |
| **Noise Seed** / **Noise Spread** | The noise pattern that varies the size and color of the details across the terrain. |
| **Detail Density** | Unity's own density for this detail, used when the terrain is in **Coverage Mode**. |
| **Hole Edge Padding (%)** | Keeps details away from the edges of [terrain holes](holes.md). |
| **Healthy Color** / **Dry Color** | The two colors the noise blends between. |
| **Affected By Density Scale** | Lets the terrain's detail density scale thin this detail out. |

!!! note "Values from 0 to 1"
    **Align To Ground (%)**, **Position Jitter (%)**, **Hole Edge Padding (%)** and **Detail Density** take values from 0 to 1.

The inspector shows an error while the detail prefab or texture is missing. A Details operation with such a source places nothing.
