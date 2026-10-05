# Terrain Snap

Two components keep things sitting on the terrain, even after stamps change it.

## Terrain Snap

**Add Component > World Toolkit > Terrain > Terrain Snap** keeps an object on the terrain surface. When the terrain under it changes, the object moves with it.

**Height Offset**
:   Distance above the terrain surface.

Objects that are themselves height stamps don't snap, since they would move the terrain they're sitting on.

## Terrain Spline Snap

**Add Component > World Toolkit > Terrain > Terrain Spline Snap** keeps a spline on the terrain surface. Use it for paths, fences, rivers or anything drawn with a spline that should follow the ground.

The spline is **baked**: extra knots are added where needed so it follows the terrain's bumps, not just its own knots.

**Height Offset**
:   Distance above the terrain surface.

**Auto Bake**
:   Bakes again when the spline, its transform or the terrain under it changes. Knots added by the previous bake are replaced, and the knots you placed are kept.

**Quality**
:   Higher values sample the spline more closely and keep more knots for small height changes.

**Straight Tolerance**
:   Removes added knots that sit almost on a straight line between their neighbours. Knots that bend the spline sideways are always kept.

## Drop to Ground

To place objects on the ground once, without keeping them snapped, select them and use **GameObject > World Toolkit > Drop to Ground**. For spline knots, right-click selected knots and choose **Drop to Ground**.
