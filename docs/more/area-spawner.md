# Area Spawner

The :wtk-component-spline-area-spawner: **Spline Area Spawner** fills an area with copies of an object: cars in a parking lot, trees in an orchard, crates on a dock. The area is outlined by a closed spline.

## Creating one

1. In the **More** tab, under **Spawners**, set the **Area Source Object**: the object to copy.
2. Optionally, select an object with a closed spline to use as the area.
3. Click **Create Area Spawner**.

## Settings

**Source Object**
:   The object to copy.

**Mode**
:   - **Fixed Grid**: a set number of copies, given by **Grid** (copies along X and Z, up to 64 each), spread over the area.
    - **Auto Distribute**: copies placed **Grid Spacing** apart, as many as fit in the area.

Without a spline, the spawner places a **Grid** of copies **Grid Spacing** apart.

**Ignore Surface Slope**
:   Keeps copies upright instead of tilting them to match the ground below.

**Overall Position Offset** / **Overall Rotation Offset**
:   Moves or rotates every copy.
