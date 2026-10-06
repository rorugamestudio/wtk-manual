---
icon: wtk/component-city-block-floor
---

# City Blocks

A :wtk-component-city-block-floor: **City Block Floor** fills a closed area surrounded by roads and junctions, such as the ground of a city block, a park or a plaza. It follows the inner edges of the roads around it, and updates when they change.

## :lucide-mouse-pointer-click: Creating floors

1. In the **Roads** panel, click :wtk-component-city-block-floor: **Create City Block Floors**. While it's on, the button reads **Exit Creating City Block Floors**.
2. **Hover** a closed region between roads. It's highlighted.
3. **Click** to create a floor there.

Regions shown in **orange** already have a floor. Press ++esc++, or click the button again, to stop. Starting the tool turns off **Edit Road Points**, and the other way round.

While the tool is on, the box under the settings says how many closed regions it found.

### Settings for new floors

The fields under the button are the starting values of new floors:

**Top Material**, **Wall Material** and **Bottom Material**
:   The floor surface (or the top of its shell), the shell walls and the shell bottom. Empty wall and bottom materials use the top material.

**Fill** and **Cell Size**
:   How the surface is divided: **Quad**, **Hex**, **Delaunay Subdivisions** or **None**. **Cell Size** is the size of the quads, hexes or subdivisions.

**UV Tile Size**
:   World units covered by one texture tile.

**Shell**
:   Gives the floor a thickness: the distance from its base to its top. Zero keeps a single surface.

**Extrusion Direction** and **Base Offset**
:   The direction of the shell, in the floor's local space, and a distance that moves the surface along it before the shell is built. Negative values move it the other way.

**Add Top**, **Add Walls** and **Add Bottom**
:   Which parts of the shell are built.

**Flip**
:   Reverses every face of the floor, turning the surface and its shell inside out.

New floors also turn on **Auto UV** in world space on their [Editable Mesh](../modelling/editable-meshes.md), so the texture continues across neighbouring floors, like on the roads around them.

## :wtk-component-city-block-floor: Settings

Three components on the floor object work together:

:wtk-component-city-block-floor: **City Block Floor**
:   Finds the region the floor belongs to and writes its outline into the spline below, every time the roads around it change.

:wtk-component-spline-container: **Spline Container**
:   Holds the outline as a closed spline of straight segments. The floor rewrites it whenever it rebuilds, so edit the roads, not this spline.

:wtk-component-editable-primitive: **Editable Primitive**
:   A **Surface** primitive that fills the outline. Its **Surface** settings hold the shape of this floor: fill, cell size, shell, extrusion and the top, wall and bottom materials. See [Surface](../modelling/primitives.md#surface).

The City Block Floor inspector shows the floor's status and two buttons:

**Rebuild**
:   Rebuilds the selected floors' surfaces, even when their outline hasn't changed.

**Reassign Region**
:   With one floor selected, starts the creation tool: click the region the floor should fill.

## :lucide-refresh-cw: When roads change

The floor follows the roads around it. When they rebuild, the region is found again, and the floor's outline and surface update. Linking or unlinking a junction along the block's edge keeps the floor on the same block.

The status in the inspector tells you when the floor needs attention:

| Status | What it means |
|---|---|
| **Ready** | The floor is built. |
| **Bound contour unavailable. Waiting for its roads and links to close.** | The region isn't closed anymore, for example because a road was removed. The floor's surface is cleared until the region closes again. |
| **Region is ambiguous or open. Reassign Region.** | The floor doesn't know which region to fill. Click **Reassign Region**. |

If the **Surface** primitive can't build the floor, its error shows in the status instead.

!!! note "Muted roads open the block"
    [Muted](creating-roads.md#road-settings) roads and junctions don't count as edges of a block, so muting one can open the regions next to it. A road whose component is disabled still counts, with its last mesh.
