# Anchored Connections

An **anchored connection** attaches the end of a road to the **side** of another road, or to the side of a junction, without building a full junction there. The approaching road is fitted onto the receiving road's outer edge. Use it for driveways, parking entrances and service roads.

## Adding one

Right-click the road component of the road that should attach, and choose **Add Anchored Connection**. This adds a :wtk-component-road-anchor-connection: **Road Anchor Connection** component.

## Settings

**Endpoint**
:   Which end of this road attaches: **Start** or **End**.

**Target Spline** and **Spline Position**
:   The receiving road and where along it the connection sits. **Tangent Offset** shifts it sideways (X) and up or down (Y), measured from the receiving road's outer edge.

**Target Junction** and **Junction Position**
:   To attach to a junction instead, pick it here. **Junction Position** sets where along the junction side, from 0 to 1 between its two road mouths.

**Side**
:   Which side of the receiving road to attach to: **Auto**, **Left** or **Right**.

**Curve Borders**
:   Curves the borders where the two roads meet.

**Transition Length**
:   How much of the approaching road is used to blend its end into the receiving edge.

The **Status** line in the inspector shows whether the connection could be built.
