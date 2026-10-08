---
icon: wtk/component-terrain-spline-snap
---

# Snapping Splines to the Terrain

A spline can follow the terrain, even after stamps change it. Use it for paths, fences, rivers or anything drawn with a spline that should follow the ground. It works on any active terrain, with or without stamps, and keeps working in Play mode and in builds.

!!! tip "Objects"
    To keep an object on the ground, colliders included, use :wtk-component-ground-snap: [Ground Snap](../more/ground-snap.md).

## :wtk-component-terrain-spline-snap: Terrain Spline Snap

**Add Component > World Toolkit > Terrain > Terrain Spline Snap** keeps a spline on the terrain surface. The object gets a :wtk-component-spline-container: **Spline Container** if it doesn't have one.

The heights of the knots always follow the terrain. The spline can also be **baked**: extra knots are added where needed so it follows the terrain's bumps between your knots, not just at them.

**Height Offset**
:   Distance above the terrain surface, in world units.

**Auto Bake**
:   Bakes again when the spline, its transform or the terrain under it changes, as soon as you release the mouse. Knots added by the previous bake are replaced, and the knots you placed are kept.

**Quality**
:   From 0 to 1. Higher values sample the spline more closely and keep more knots for small height changes.

**Straight Tolerance**
:   Removes added knots that sit almost on a straight line between their neighbours, within this distance in world units. Knots that bend the spline sideways are always kept.

Below the settings, the inspector shows how often the bake samples the spline and the smallest height difference it keeps a knot for. **Bake Knots To Terrain** bakes right away, for example with **Auto Bake** off. It never removes the knots you placed, and it can be undone.

!!! note "Stamps ignore snapped splines"
    A spline with a Terrain Spline Snap follows the terrain that stamps write, so stamps can't use it. Assigning it to a stamp's spline field is refused with an error, and a stamp whose spline gets a Terrain Spline Snap later ignores it and lists it in a warning. Remove the component to use the spline in a stamp again.

To place spline knots on the ground once, without keeping them snapped, use [Drop to Ground](../more/ground-snap.md#drop-to-ground).
