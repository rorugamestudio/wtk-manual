---
icon: wtk/component-terrain-snap
---

# Snapping to the Terrain

Two components keep things sitting on the terrain, even after stamps change it. They work on any active terrain, with or without stamps, and keep working in Play mode and in builds.

## :wtk-component-terrain-snap: Terrain Snap

**Add Component > World Toolkit > Terrain > Terrain Snap** keeps an object on the terrain surface. When the object moves or the terrain under it changes, the object moves back onto the surface. Only its height changes: its X and Z position and its rotation stay as they are.

**Height Offset**
:   Distance above the terrain surface, in world units.

!!! warning "Not on height stamps"
    Terrain Snap is inactive on an object that has, or sits under a parent that has, a :wtk-component-terrain-stamp: **Terrain Stamp** writing heights (**Height**, **Erosion** or **Smooth**): snapping it would move the stamp and change the terrain it's snapping to. The inspector shows a warning when this happens.

## :wtk-component-terrain-spline-snap: Terrain Spline Snap

**Add Component > World Toolkit > Terrain > Terrain Spline Snap** keeps a spline on the terrain surface. Use it for paths, fences, rivers or anything drawn with a spline that should follow the ground. The object gets a :wtk-component-spline-container: **Spline Container** if it doesn't have one.

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

## :lucide-arrow-down-to-line: Drop to Ground

To place objects on the ground once, without keeping them snapped, select them and use **GameObject > World Toolkit > Drop to Ground**, or press ++alt+shift+d++. For spline knots, right-click selected knots and choose **Drop to Ground**.
