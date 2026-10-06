---
icon: lucide/house
---

# Roofs

A :lucide-house: **Roof** asset describes a roof shape that follows any footprint. Create one from **Assets > Create > World Toolkit > Buildings > Roof** and assign it to a volume's **Roof** field, or click **New** next to that field to create and assign one in one step. Expand the field to edit the roof from the building's inspector.

The roof starts from the outline of the volume's last floor, pushed out by the **Overhang**. That outline shrinks inward while the **Profile** lifts it, so every side gets the same cross-section and the roof closes into hips and ridges on any footprint, inside corners included. It's generated as up to three pieces, one per material: the roof surfaces, the flat cap of a **Flat** top, and the trim along the eave. Foundations don't get a roof.

## :lucide-triangle: Shape

**Profile**
:   The roof's cross-section, drawn from the eave (the roof's outer edge) inward: X is how far in from the eave, Y is the height above it, both in meters. The same profile is applied along every side of the footprint. Two points at the same X make a vertical step, like the low wall of the **Parapet** preset.

**Top**
:   How the roof closes. **Ridge** keeps the last slope going until the sides meet. **Flat** stops at the last point and closes with a flat cap.

**Overhang**
:   How far the eave reaches past the walls. With an overhang, the underside between the eave and the walls is closed too (the soffit).

**Eave Thickness**
:   The height of the band (fascia) hanging along the eave. 0 leaves the edge open.

**Height Offset**
:   Raises or lowers the roof from the top of the volume's last floor.

### Presets

Pick a **Preset** and click **Apply** to start from a common shape:

**Hip 30°**, **Hip 45°**, **Steep 60°**, **Flat**, **Parapet**, **Mansard**, **Mansard, Flat Top** and **Bell-Cast Mansard**.

Applying a preset replaces the profile and sets the **Top** it's meant for: **Flat** for **Parapet** and **Mansard, Flat Top**, **Ridge** for the others.

### Editing the profile

The profile graph works like the other World Toolkit profile editors:

- **Drag** points to move them. Hold ++ctrl++ to snap to 5 cm. Points can't go past the eave, to the left of the vertical axis.
- **Double-click** a span to add a point. **Right-click** a point, or press ++delete++, to remove it. Two points always stay.
- **Middle-drag** pans, the wheel zooms, and ++f++ or **Frame** fits the view.

Select a point to read its position and the slope of the span that leads to it, at the bottom right of the graph. The **Points** list below the graph holds the exact values.

### :lucide-scan-eye: Roof Preview

The **Roof Preview** at the bottom of the inspector puts the roof on plain walls, 3 m per floor. Its toolbar has **Iso** and **Wire**, a menu with the test footprint (**Rectangle**, **L Shape**, **U Shape**, **Octagon** or **Angled**), its **W** and **D** in meters, **Floors**, **Seed** with **Reroll**, **Grid** and **Reset**. Drag in the preview to orbit, scroll to zoom. The concave shapes show how the roof splits into ridges.

## :lucide-palette: Materials

**Material**
:   The sloped surfaces and vertical steps.

**Cap Material**
:   The flat cap of a **Flat** top. Empty uses the roof material.

**Trim Material**
:   The fascia and the underside of the overhang. Empty uses the roof material.

Roof surfaces are UV-mapped in meters, along the eave and up the slope, continuing from one span of the profile to the next so tiles line up.

## :lucide-list-checks: Checking the roof

The top of the Roof inspector lists the problems it finds. **Click** one to jump to its field.

- **No material:** the roof renders with the default material.
- **The profile has no points:** the roof is a flat lid on the eave.
- **The profile starts outside the eave** (a negative X): the profile is read from the eave anyway. Use **Overhang** to push the eave out.
- **A point goes back toward the eave:** it's moved up to the previous inset, so the roof never folds over itself.
- **The last span slopes down with a Ridge top:** the slope continues, so the roof dips toward its middle.

A building or Building Rules asset that uses a roof with problems says so in its own inspector. A roof on a foundation volume is reported too, since foundations don't get one.
