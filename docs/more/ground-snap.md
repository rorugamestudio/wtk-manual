---
icon: wtk/component-ground-snap
---

# Snapping to the Ground

Ground Snap keeps an object standing on the ground, even after the ground changes. The ground is any collider or terrain on the layers you choose. It keeps working in Play mode and in builds.

## :wtk-component-ground-snap: Ground Snap

**Add Component > World Toolkit > Ground Snap** keeps an object on the ground surface. When the object moves, or the terrain under it changes, the object moves back onto the surface. Only its height changes: its X and Z position and its rotation stay as they are.

The object lands on the surface closest to where it stands, above or below it. Inside a building or under a bridge it stays on its own floor, and dragged up a slope it climbs the slope. To put it on another floor, move it up or down next to that floor. Colliders on the object and its children never count as ground, and neither do triggers.

In the editor, the object also follows the colliders it stands on: moving, disabling, deleting or changing the layer of a collider puts the objects that stood on it back onto the ground. In Play mode and in builds, it snaps again when the object itself moves or the terrain under it changes.

**Height Offset**
:   Distance above the ground surface, in world units.

**Layers**
:   Layers the object snaps to: colliders on these layers, and terrains whose GameObject is on one of them. By default, every layer except **Ignore Raycast**.

!!! warning "Not on height stamps"
    Ground Snap is inactive on an object that has, or sits under a parent that has, a :wtk-component-terrain-stamp: **Terrain Stamp** writing heights (**Height**, **Erosion** or **Smooth**): snapping it would move the stamp and change the terrain it's snapping to. The inspector shows a warning when this happens.

## :lucide-arrow-down-to-line: Drop to Ground

To place objects on the ground once, without keeping them snapped, select them and use **GameObject > World Toolkit > Drop to Ground**, or press ++alt+shift+d++. For spline knots, right-click selected knots and choose **Drop to Ground**.
