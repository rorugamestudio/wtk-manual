# Roofs

A **Roof** asset describes a roof shape that follows any footprint. Create one from **Assets > Create > World Toolkit > Buildings > Roof** and assign it to a volume's **Roof** field.

## Shape

**Profile**
:   The roof's cross-section, drawn from the eave (the roof's outer edge) inward: X is how far in from the eave, Y is the height above it, both in meters. The same profile is applied along every side of the footprint.

**Top**
:   How the roof closes. **Ridge** keeps the last slope going until the sides meet. **Flat** stops at the last point and closes with a flat cap.

**Overhang**
:   How far the eave reaches past the walls.

**Eave Thickness**
:   The height of the band (fascia) along the eave. 0 leaves the edge open.

**Height Offset**
:   Raises or lowers the roof from the top of the volume's last floor.

### Presets

Pick a **Preset** and click **Apply** to start from a common shape:

**Hip 30°**, **Hip 45°**, **Steep 60°**, **Flat**, **Parapet**, **Mansard**, **Mansard, Flat Top** and **Bell-Cast Mansard**.

Applying a preset replaces the profile and sets the **Top** it's meant for.

### Editing the profile

The profile graph works like other World Toolkit profile editors: drag points to move them, and press ++f++ or click **Frame** to fit the view. The **Roof Preview** shows the result in 3D.

## Materials

**Material**
:   The sloped surfaces and vertical steps.

**Cap Material**
:   The flat cap of a **Flat** top. Empty uses the roof material.

**Trim Material**
:   The fascia and the underside of the overhang. Empty uses the roof material.
