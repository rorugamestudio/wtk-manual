---
icon: wtk/component-spline-link-group
---

# Link Groups

A :wtk-component-spline-link-group: **Spline Link Group** keeps knots from different splines together: move one linked knot and the others follow. It's how separate splines meet at a shared point: every road [junction](../roads/junctions.md) object carries one that holds the road ends together.

A knot can belong to only one link group, and two knots of the same spline can't share a link.

## :lucide-link: Linking knots

1. While [editing splines](index.md#where-to-edit-splines), select two or more knots, each on a different spline. They can be in the same Spline Container or in different ones.
2. **Right-click** and choose **Link**.

The knots move to their average position, halfway between them when there are two, and a new **Spline Link** object holds them. It's created as a child of the first selected knot's spline object, and is selected for you.

To add another knot to an existing link:

1. Click the link's cube in the Scene view to select it.
2. Hold ++shift++ and click the knot to add.
3. **Right-click** and choose **Link to Selected Knot Link**. The knot jumps to the link's position.

## :lucide-move-3d: Moving linked knots

Linked knots can't be selected one by one. Each link is drawn as a small cube where its knots meet: click the cube, or box-select it, to select the link. A link that belongs to a road junction is drawn as the junction's outline raised into a prism instead; its cube stays clickable at the centre. When a road is about to connect to a junction or split another road, the offer shows the footprint the junction will have, with the mouth of the arriving road.

- With a link selected, Unity's **Move** and **Rotate** tools move and turn all its knots together.
- Moving the **Spline Link** object any other way, for example from its Transform in the Inspector, moves its knots too.
- When another tool moves one of the linked knots, the other knots of the link follow it.

## :wtk-selected-knots: Editing a link group

When you select a link, the :wtk-selected-knots: **Selected Knots** panel becomes **Selected Link Group**:

- It says how many knots are linked, and the **Knot** list picks one of them. The Scene view highlights the part of that knot's spline next to the link, in the **Knot Segment Highlight** color of the [Spline Settings](settings.md#colors), green by default.
- The settings below edit the picked knot: its type, handles and rotation. Its position belongs to the link.
- **Remove Selected Knot From Link** takes the picked knot out of the link.

The link object's own inspector lists its **Knots**: each entry is a Spline Container, the spline in it (**S**) and the knot number (**K**).

!!! tip "Unlinking everything"
    Delete the **Spline Link** object to free all its knots at once.
