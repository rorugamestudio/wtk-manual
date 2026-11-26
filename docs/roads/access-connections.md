---
icon: wtk/component-road-access-connection
---

# Access Connections

An **access connection** connects the end of a road to another road as an access, without building a junction there. It works in one of two modes:

- **Edge**: the road meets the **side** of the receiving road. The receiving road's borders break where the access meets it, and this road's lanes run on until they reach the receiving road's lanes. Its kerbs curve into the receiving road's kerbs with kerb returns. Use it for side streets, service roads and car park entrances that cross a sidewalk.
- **Lanes**: the road continues **lanes** of the receiving road where they end or start: at the end of the receiving road, or at the end of a lane's spline range. Use it for exit and entry ramps, or to split the end of a road into several roads.

The connection is a :wtk-component-road-access-connection: **Road Access Connection** component on the connecting road. Like an [anchored connection](anchored-connections.md), it follows the receiving road when that road changes.

!!! tip
    To attach a road to the side of another one **without** breaking its borders (a walkway arriving on a sidewalk, a driveway), use an [anchored connection](anchored-connections.md) instead.

## :lucide-split: Edge accesses

On the side the access is on, the receiving road stops building its **borders** (the layers marked **Is Border** in its profile layers, see [Profiles and Layers](profiles-and-layers.md)) over the width of the access, from the outside in up to its carriageway. Every layer that isn't a border is part of the carriageway and stays: a layer that is neither a lane nor a border (a shoulder, a parking strip) keeps running, and the access meets it. A receiving road without borders on that side behaves like the edge of an anchored connection.

The access then fits its end onto the edge of the receiving road's carriageway:

- Its **carriageway** keeps the width of its lanes and runs straight on until it reaches the receiving carriageway. When the access arrives at an angle, its end is skewed along the edge.
- Its **borders** turn round **kerb returns** of **Arc Radius** and meet the receiving road's borders where they were cut.
- The gap between each kerb return and the lanes is filled with a curved piece of carriageway, in the material of the lanes beside it.
- Across the receiving road's border band the access stays level with the receiving road, so its borders meet the cut ones. Past the band its height eases into its own, like a road easing into a junction: a steep access eases over a longer stretch, so the grade it adds stays gentle.
- Triplanar profiles (see [Profiles and Layers](profiles-and-layers.md)) keep their world-space mapping where the end is bent, so a sidewalk's pattern carries on from the receiving road's into the corners.
- Where the access touches the receiving road it takes that road's normals, so the shading runs on across the seam without a line.

With **Arc Radius** at 0 the access meets the receiving road square, without kerb returns or curved pieces.

## :lucide-git-fork: Lane accesses

A lane access continues as many lanes of the receiving road as the connecting road has: a road with two lanes connects to two lanes. The lanes it connects to are **Target Lane** and its neighbours to its right on the receiving road, and they must all end (or all start) at the same place:

- at the free end of the receiving road (not an end that belongs to a junction or a link),
- or where a spline range that limits a lane ends or starts: the lane layer's own ranges, its group's, or the single lane's ranges in **Lane Overrides**.

The end of the connecting road moves to the middle of those lanes, and its lanes are fitted onto them edge to edge. Its borders follow on both sides.

**Lane Tip** says which way the road goes: **End** continues the lanes where they end, so the road leads away past them; **Start** leads into the lanes where they start, so the road arrives before them.

## :lucide-mouse-pointer-click: Connecting a road in the Scene view

With **Edit Road Points** active, **drag the end knot** of a road:

- **Onto the outer edge of another road.** A marker shows where the road will attach. When you release it, a dialog asks how to connect it: **Anchor** makes an [anchored connection](anchored-connections.md), **Access** makes an edge access, and **Cancel** leaves the end where it was dropped, without a connection. On the side of a junction the road attaches with an anchored connection, without asking.
- **Over lanes that end or start.** While you drag a road end, every row of lane tips of other roads it could connect to shows as a flat box across those lanes: rows with as many neighbouring lanes as the dragged road has, all ending (or all starting) together. The row under the pointer is highlighted; release there to connect the road to those lanes with a lane access.

When a row of lane tips and an edge are both near the pointer, the nearer one is offered. A row of lane tips takes a drop on a road before a new junction does. A new connection is only offered while the Scene view looks down on the roads by at least 45°, like a new junction.

Once connected:

- **Drag** the connected end to move the connection, from any view: along the edges of roads (an edge access) or onto other rows of lane tips (a lane access). An access dropped on the other kind of target switches its **Mode**, and an anchored road end dropped on lane tips becomes a lane access.
- **Drag** it away and release it anywhere else to remove the Road Access Connection component.
- Moving the connected road's object as a whole (or a parent of it) removes its connections, in the same Undo step. Moving both roads together keeps them, and a connection follows the receiving road when only that road moves.

## :wtk-component-road-access-connection: Adding one from the inspector

1. Add a **Road Access Connection** component to the road that should connect (**Add Component > World Toolkit > Roads > Road Access Connection**).
2. Choose its **Mode**, which end connects (**Source Path Index** and **Endpoint**) and the receiving road in **Target Spline**.
3. For an edge access, set where along the receiving road it sits in **Spline Position**. For a lane access, pick the lanes in **Lane Tips**: it lists every row of lane ends and starts of the receiving road that fits this road's number of lanes.

## :wtk-component-road-access-connection: Settings

**Mode**
:   **Edge** meets the side of the receiving road and breaks its borders; **Lanes** continues lanes of the receiving road where they end or start.

**Source Path Index** and **Endpoint**
:   Which end of this road connects: the spline path (when the road's spline container has several) and its **Start** or **End**.

**Target Spline**
:   The receiving road.

**Spline Position** (Edge)
:   Where along the receiving road the access sits: measured from its **Start**, its **End** or a **Knot**, by a distance in **Units** or **Percent**. Its **Tangent Offset** isn't used by accesses.

**Side** (Edge)
:   Which side of the receiving road the access is on: **Auto**, **Left** or **Right**.

**Arc Radius** (Edge)
:   The radius of the kerb returns, in meters. The carriageway between the curves and this road's lanes is filled with the lanes' material. 0 meets the receiving road square, without curves.

**Arc Segments** (Edge)
:   How many segments each kerb return's curve is made of.

**Target Lane**, **Lane Tip** and **Lane Tip Index** (Lanes)
:   The first receiving lane this road's lanes continue, counting from the left of the receiving road (its lane layer and repeat), whether those lanes **End** or **Start** there, and which of that lane's ends (or starts) it is along the receiving road, from its start. **Lane Tips** sets all three from a list.

**Transition Length**
:   How much of this road, in meters, is used to blend its end into the receiving road. An edge access uses at least one and a half times the length of its kerb returns, more when it meets the receiving road at a slant (so its rows turn back square without folding over the corners), and its heights may ease over a longer stretch when it is much higher or lower than the receiving road.

## :lucide-circle-alert: Status

The status line at the bottom of the inspector reads **Connected.** when the connection is built. Otherwise, it says what's missing. A connection can be built when:

- the connecting road's path is open and has at least two knots,
- the receiving road uses a different spline container,
- both roads are active and the receiving road isn't [muted](creating-roads.md#road-settings),
- the connected end isn't part of a junction or a link, and no other connection (anchored or access) controls it,
- the connection doesn't make a loop: a road can't connect to a road that is, directly or through other connections, connected to it.

An edge access also needs to reach the receiving road from outside it, not almost parallel to its edge, and to be long enough to turn its borders into the receiving borders. A lane access needs lanes (layers marked **Is Lane**) at its connected end, as many receiving lanes ending or starting together next to **Target Lane**, and to leave those lanes past where they end (or arrive before where they start) instead of running back over them.

!!! tip
    If the status says the receiving edge is too short or interrupted, reduce the **Arc Radius** or move the access along the receiving road.
