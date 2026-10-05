# Profiles and Layers

A road's cross-section is built from **layers**, placed side by side across the road. Each layer has a **profile** that gives it its shape.

For example, a simple street might have: sidewalk, curb, two lanes, curb, sidewalk.

## Road Profiles

A **Road Profile** is an asset holding a 2D shape: the outline of a curb, a sidewalk or a lane surface. Create one from **Assets > Create > World Toolkit > Roads > Profile**.

### Editing the shape

Select the profile asset to edit its points in the graph:

- **Click** a point or span to select it, and **drag** points to move them.
- **Double-click** to insert a point. ++delete++ removes the selected point.
- **Middle-drag** pans, **scroll** zooms, ++f++ frames the shape.

**Add Point**, **Remove Point** and **Frame** do the same from buttons.

For the selected point:

**Position**
:   The exact coordinates.

**Shading**
:   **Hard** gives a sharp edge at this point instead of a smooth one.

For the selected span (the segment between two points):

**Span Material**
:   A material for this part only. Leave it empty to use the profile's **Default Material**.

The **Profile Preview** shows the result in 3D.

### Profile settings

**Is Lane**
:   Marks the profile as a driving lane. Lanes have a direction and show lane guides.

**Is Border**
:   Marks the profile as a road border (curb, sidewalk edge). Junctions treat borders differently from the road surface.

**UV type**
:   How textures are mapped. **Unfold** follows the profile along the road, with **Unfold Scale** and **Unfold Offset**. **Triplanar** projects the texture from the sides, with **Triplanar Scale**. Regular roads and junction borders have separate settings.

**Default Material**
:   The material used for spans with no material of their own.

## Layers

Layers are set on the road component, under **Road Layers**.

**Name** and **Profile**
:   The layer's name and its Road Profile.

**Alignment** and **Offset**
:   Where the layer sits: **Left**, **Center** or **Right**, then shifted by **Offset**.

**Mirror**
:   Flips the profile, to use the same curb asset on both sides of the road.

**Width Multiplier**
:   Scales the layer's width.

**Lateral Bulge**
:   A curve that raises the layer across its width, for a crowned road that sheds water. The X axis goes from 0 at the left edge to 1 at the right edge, and the Y axis is the extra height.

**Spline Ranges**
:   Limits the layer to parts of the road. Leave it empty to use the whole length. Enable **Flip** on a range to use everything **except** that part. Use it for a sidewalk that only exists on one block, or a parking lane that stops before a corner.

**Sub Layers**
:   Layers placed relative to this one.

### Lanes

For lane layers:

**Lane Direction**
:   **Forward**, **Backward** or **Both**.

**Extra Lane Count**
:   Adds more lanes of the same profile next to this one.

**Lane Divisions**
:   Dividers between lanes, each with its own **Profile**. **Directions** sets which lanes they separate: **Any**, **Same Direction** or **Opposite Directions**. **Placement** decides whether the divider opens a gap between lanes (**Open Gap**) or sits on the seam between them (**On Seam**).

You can also change lane directions and add or remove extra lanes directly in the Scene view, from the lane preview.

## Layer Groups

Layers can be organized in **Road Layer Groups**. A group can be placed relative to another group (**Anchor Group Id** and **Alignment On Anchor Group**: **Center**, **Left Of Group** or **Right Of Group**), and be limited to **Spline Ranges**.

**Ignore Junctions**
:   Leaves the group out of junction generation.

## Default mesh

When none of a road's layers has a profile, the road uses its **Default Mesh**: a strip with a **Material**, flat or shaped across its width by **Profile Curve**, with **Lateral Segments** across and a **Longitudinal Segment Length** along. With **Follow Spline Width**, its width comes from the spline's width data, falling back to **Width** where there's none.

**Position Jitter** and **Jitter Seed** add a small, repeatable random displacement, for a worn, uneven look. Road ends and junction mouths stay fixed.
