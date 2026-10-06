---
icon: wtk/component-spline-area-spawner
---

# Area Spawner

The :wtk-component-spline-area-spawner: **Spline Area Spawner** fills an area with copies of one object: cars in a parking lot, trees in an orchard, crates on a dock. The area is the inside of a spline, best drawn as a closed loop: an open spline is closed with a straight line between its two ends. Change the spline and the copies follow.

## :lucide-list-ordered: Creating one

1. In the **Edit** tab of the [More](index.md) module, under **Spawners**, set the **Area Source Object**: the object or prefab to copy.
2. Optionally, select the object with the spline that outlines the area. The **Spline** field picks it up.
3. Click :wtk-component-spline-area-spawner: **Create Area Spawner**.

The new object, named after the source object, is placed where the source object is and is selected. In the hierarchy it goes under the selected spline object, or next to the source object when there's no spline and the source is in the scene. It starts in **Fixed Grid** mode, with **Grid Spacing** set to the source object's size along its Z axis. The copies are created as its children.

You can also add the component yourself with **Add Component > World Toolkit > Spawners > Spline Area Spawner**.

## :lucide-settings: Settings

**Spline** and **Spline Index**
:   The Spline Container that outlines the area, and which of its splines (0 is the first). Without a spline, see [Without a spline](#without-a-spline).

**Overall Position Offset** / **Overall Rotation Offset**
:   Moves or rotates every copy, in each copy's own axes.

**Source Object**
:   The object to copy.

**Mode**
:   - **Fixed Grid**: lays a grid of **Grid** cells (along X and Z, up to 64 each) over the area, and places a copy in the middle of each cell that falls inside the outline.
    - **Auto Distribute**: places copies **Grid Spacing** apart (along X and Z), as many as fit inside the outline.

**Grid**
:   The number of cells along X and Z. Shown in **Fixed Grid** mode, or without a spline.

**Grid Spacing**
:   The distance between copies along X and Z. Shown in **Auto Distribute** mode, or without a spline.

**Ignore Surface Slope**
:   Keeps copies upright instead of tilting them with the slope of the area.

**Rebuild**
:   Places all the copies again.

**Make Spawned Objects Editable**
:   Keeps the copies as ordinary objects and removes the spawner component, so they stop following the spline.

The copies rebuild by themselves when you change a setting or the spline. How often that happens while you drag is set in [More Settings](settings.md#spawners).

!!! warning "Edits to the copies don't last"
    Every rebuild replaces the copies, so changes you make to them by hand are lost. Use **Make Spawned Objects Editable** first if you want to edit them.

## :lucide-grid-3x3: How the copies are placed

- The grid follows the spawner object's own X and Z axes, and the copies face its forward direction. To turn the grid, rotate the spawner object and click **Rebuild**.
- Grid points outside the outline are skipped. If none fall inside, a single copy goes in the middle of the outline.
- The copies' height and tilt come from the spline itself, not from the ground below: the area is filled like a skin stretched from the middle of the outline to its edge, so knots at different heights make a sloped area. **Ignore Surface Slope** keeps the copies upright on it.
- While the spawner is selected, the Scene view shows a green dot for each copy, and a red dot for each grid point that was skipped.
- One spawner places up to 512 copies.

### Without a spline

Without a spline, the spawner places a flat grid of copies centered on the spawner object: **Grid** sets how many along X and Z, and **Grid Spacing** how far apart they are.
