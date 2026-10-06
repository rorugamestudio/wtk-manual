---
icon: wtk/component-mesh-decal-area
---

# Decals

Mesh decals are paint-like meshes that follow the surface below them: road markings, crosswalks, painted areas. They're shaped by [splines](../splines/index.md) and generate a thin mesh that fits the ground.

There are two kinds:

:wtk-component-mesh-decal-stroke: **Mesh Decal Stroke**
:   Lines painted **along** a spline, like lane markings.

:wtk-component-mesh-decal-area: **Mesh Decal Area**
:   A patterned fill **inside** a closed spline, like crosswalk stripes or a box junction grid, with optional outline lines.

A decal is split in two: the **component** says where the paint goes (its splines and how it lands on the surface), and a **settings asset** says what the paint looks like (its lines or fill, materials and thickness).

## :lucide-circle-plus: Creating a decal

1. Select the object with the spline you want to paint along, or inside.
2. Choose **GameObject > World Toolkit > Decals > Mesh Decal Stroke** or **Mesh Decal Area**. With a spline object selected, the decal is created as its child and already follows its first path.
3. Next to **Settings** in the decal's inspector, click **New** to save a new settings asset and assign it, or assign one you already have.
4. Click the arrow next to **Settings** to edit the asset right inside the decal's inspector.

Until it has a settings asset, a decal builds nothing and says *Assign a settings asset to the decal.*

## :lucide-file-box: Settings assets

The look of a decal is stored in an asset, shared by every decal that uses it:

:lucide-file-box: **Mesh Decal Stroke Settings** (asset)
:   The lines of a stroke. See [Stroke lines](#stroke-lines).

:lucide-file-box: **Mesh Decal Area Settings** (asset)
:   The fill and outline of an area. See [Areas](#areas).

Besides **New** in the decal's inspector, you can create them from **Assets > Create > World Toolkit > Decals**. Editing an asset rebuilds every decal that uses it, so one asset can drive all the lane lines of a scene.

Both kinds of asset also have:

**Materials**
:   The materials the lines and fills pick with their **Material Index**. They become the decal's renderer materials. An empty list, or an empty slot, uses the **Material** set under **Create Options** in the Modelling **Create** tab.

**Thickness**
:   Paint depth: extrudes the decal along the surface normal and closes its sides. Zero keeps it flat.

!!! tip "Changing a single decal"
    Edits made through a decal's inspector change the shared asset, and with it every decal that uses the asset. To change one decal only, give it its own asset first.

## :lucide-spline: Splines

The decal component takes a list of **Splines** to follow or fill. A decal can use splines from different spline containers.

**Samples Per Segment** sets how closely the decal follows the spline between two knots. Raise it for tight curves.

For strokes, **Spline Ranges** limit which parts of each spline get painted. Leave the list empty to paint the whole spline. Each range picks a **Spline** from the decal's list and an **Interval** along it; enable **Flip** on a range to exclude that part instead.

## :wtk-component-mesh-decal-stroke: Stroke lines

A **Mesh Decal Stroke Settings** asset holds a list of **Lines**, painted side by side along the spline. Each line has:

| Setting | What it does |
|---|---|
| **Name** and **Enabled** | A label for the line, and a switch to leave it out without deleting it. |
| **Lateral Offset** | Sideways distance from the spline, in meters. Positive is to the right of the spline direction. |
| **Width** | Line width, in meters. |
| **Width Segments** | Quads across the line. Raise it for wide lines on uneven ground. |
| **Trim Start** / **Trim End** | Meters left unpainted at the start and end of the spline. |
| **Dash** | The dash pattern: **Mode** (**Solid** or **Dashed**), the **Segments** of the pattern (dash and gap lengths, repeated along the line), **Phase** to shift the pattern along the line, in meters, and **Fit To Length** to scale the pattern so the line starts and ends on a full dash. |
| **Material Index** and **Color** | Which of the asset's **Materials** to use, and a tint. |
| **UV Tiles Per Meter** | How many times the texture repeats per meter along the line. |

Lines keep their full width around corners: at every knot the line turns with a mitered corner, so both of its edges stay the same distance apart.

**Line Preset**, below the stroke's inspector, sets up common markings in one click: pick **Solid Line**, **Dashed Lane Line**, **Double Solid**, **Solid + Dashed** or **Dotted** and click **Apply**. The preset replaces the lines of the stroke's settings asset, so every stroke sharing that asset changes too.

## :wtk-component-mesh-decal-area: Areas

An area needs a **closed** spline. Its **Mesh Decal Area Settings** asset holds:

**Fill Enabled**
:   Paints the inside of the area. Turn it off to keep only the outline.

**Fill**
:   The pattern of the fill, see below.

**Fill Lift**
:   Extra height of the fill above the surface, on top of **Surface Offset**, for when the material's own depth bias isn't enough to keep it clear of the surface. 0.001 by default.

**Outline**
:   Lines painted along the border, with the same settings as [stroke lines](#stroke-lines). Positive offsets move them outside the area.

**Outline Lift**
:   Extra height of the outline above the fill, so overlapping paint doesn't flicker. The outline sits at **Fill Lift** plus **Outline Lift**.

The fill's **Kind** sets its pattern:

| Kind | Paints |
|---|---|
| **Solid** | The whole area. |
| **Stripes** | Parallel bands: crosswalk stripes, or diagonal hatching when angled. |
| **Grid** | Two crossing sets of bands, like a box junction grid. |
| **Checker** | Alternating squares. |

Patterns have an **Angle** (around the world up axis, in degrees), an **Offset** (in meters, along the pattern) and a **Band Width**: the width of each band, or the size of the squares for **Checker**. **Band Gap** is the space between bands, for stripes and grids. **Cross Band Width** and **Cross Band Gap** set the crossing bands of a grid, which are only painted in the gaps between the main bands. The fill also has its own **Material Index**, **Color** and **UV Tiles Per Meter**.

The pattern is anchored to the position of the decal object: move the decal object, or change **Offset**, to slide the bands.

!!! tip "Junction box markings"
    Road junctions can paint a box marking from a **Mesh Decal Area Settings** asset: the junction keeps a child **Junction Marking** decal on its carriageway. See [Junctions](../roads/junctions.md).

## :lucide-mountain: Fitting to the surface

The decal finds the ground by casting rays down from the spline. These settings are under **Projection** on the decal component, except **Resolution**:

| Setting | What it does |
|---|---|
| **Surface Layers** | The collider layers the decal lands on. |
| **Projection Height** / **Projection Depth** | How far above and below the spline it looks for a surface. |
| **Surface Offset** | A small lift above the surface, to avoid flickering (z-fighting). |
| **Offset Along Normal** | Lifts along the surface direction instead of straight up. |
| **Hit Backfaces** | Also lands on the back side of faces. |
| **Miss Behaviour** | What to do where no surface is found: **Keep Spline Height**, or **Remove Faces**. |
| **Resolution** | The size of the triangles that follow the relief. Smaller values follow bumps more closely. |

## :lucide-refresh-cw: Rebuilding and status

Decals rebuild by themselves when you edit their splines, their component or their settings asset, and when you move the decal or its spline objects.

!!! note
    Decals don't notice changes to the terrain or colliders below them. After editing the ground, click **Rebuild** in the decal's inspector.

The inspector shows the build status:

| Status | Meaning |
|---|---|
| *Ready. n faces.* | The decal is built. |
| *Ready. n of m points found no surface.* | Built, but part of it found no surface below. See **Miss Behaviour**. |
| *Assign a settings asset to the decal.* | The decal has no settings asset. |
| *Assign at least one spline to the decal.* | The **Splines** list is empty. |
| *The area needs a closed spline.* or *The area needs a spline enclosing some space.* | An area's spline is open, or encloses nothing. |
| *The spline has no length.* | The spline, or the part of it left by the **Spline Ranges**, is empty. |
| *The area outline crosses itself; part of the fill is missing.* | Fix the spline so its outline doesn't cross itself. |
| *No surface found below the decal. Check Surface Layers and the projection range.* | No collider was hit at all. |
