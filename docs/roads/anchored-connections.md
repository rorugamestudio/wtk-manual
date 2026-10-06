---
icon: wtk/component-road-anchor-connection
---

# Anchored Connections

An **anchored connection** attaches the end of a road to the **side** of another road, or to the side of a junction, without building a full junction there. The end of the approaching road is fitted onto the receiving road's outer edge, and follows it when that road changes. Use it for driveways, parking entrances and service roads.

The connection is a :wtk-component-road-anchor-connection: **Road Anchor Connection** component on the approaching road.

## :lucide-mouse-pointer-click: Attaching a road in the Scene view

With **Edit Road Points** active:

1. **Drag the end knot** of a road close to the outer edge of another road, or to the side of a junction between two of its roads. A marker shows where the road will attach.
2. Release to attach it.

Dropping the end near the middle of the other road (its spline) creates a junction instead.

You can also attach a road while drawing it: start or end the new road on the outer edge of another road, or on the side of a junction.

Once attached:

- Each connection shows a marker where it meets the receiving road. **Click** the marker to select the attached road end.
- **Drag** the attached end along the edge to move the connection.
- **Drag** it away and release it anywhere else to detach it. This removes the Road Anchor Connection component.

## :wtk-component-road-anchor-connection: Adding one from the inspector

Right-click the road component of the road that should attach, and choose **Add Anchored Connection**. This adds a Road Anchor Connection component; then pick the receiving road in **Target Spline**.

## :wtk-component-road-anchor-connection: Settings

**Source Path Index** and **Endpoint**
:   Which end of this road attaches: the spline path (when the road's spline container has several) and its **Start** or **End**.

**Target Spline** and **Spline Position**
:   The receiving road and where along it the connection sits: measured from its **Start**, its **End** or a **Knot**, by a distance in **Units** or **Percent**.

**Target Junction** and **Junction Position**
:   The junction the road is attached to instead of a road. It's set when you drop the road end on the side of a junction in the Scene view, which also picks the side. **Junction Position** sets where along that side, from 0 to 1 between its two road mouths. While a junction is set, **Target Spline**, **Spline Position** and **Side** are hidden, and **Tangent Offset** appears: it shifts the connection sideways (X) and up or down (Y) from the junction's edge.

**Side**
:   Which side of the receiving road to attach to: **Auto**, **Left** or **Right**.

**Curve Borders** and **Arc Radius**
:   Rounds the borders where the two roads meet: the mouth of the approaching road flares out into the receiving edge with a quarter circle of **Arc Radius**. The curve is never longer than the transition.

**Transition Length**
:   How much of the approaching road, in meters, is used to blend its end into the receiving edge.

## :lucide-circle-alert: Status

The status line at the bottom of the inspector reads **Connected.** when the connection is built. Otherwise, it says what's missing. A connection can be built when:

- the approaching road's path is open and has at least two knots (the receiving path can be closed),
- the receiving road uses a different spline container,
- both roads are active and the receiving road isn't [muted](creating-roads.md#road-settings),
- the attached end isn't part of a junction or a link (disconnect it first),
- no other connection controls the same road end,
- the connection doesn't make a loop: a road can't attach to a road that is, directly or through other connections, attached to it.

!!! tip
    If the status says the receiving edge is too short or interrupted, reduce the road's width or the **Arc Radius**, or move the connection along the edge.
