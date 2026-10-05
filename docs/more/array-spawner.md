# Array Spawner

The **Spline Array Spawner** places copies of prefabs along a spline: fence posts and rails, lamp posts, barriers, modular walls. Change the spline and the copies follow.

## Creating one

1. Select the object with the spline.
2. In the **More** tab, under **Spawners**, the **Spline** field picks it up.
3. Optionally, set an **Array Rules Snapshot** to start from saved rules.
4. Click **Create Array Spawner**.

## Settings

**Spline**
:   The spline to follow, and which path in it.

**Overall Position Offset** / **Overall Rotation Offset**
:   Moves or rotates every copy.

**Rules**
:   What to place, and where. See below.

**Seed**
:   Changes the random choices.

## Rules

Rules are made of **slots**. **Segment slots** fill the spline between knots, and **corner slots** go on the knots themselves.

### Objects and chances

Each slot has a list of **Objects** (prefabs), each with a **Chance Weight**. One object is picked for each piece. Weights are relative and don't have to add up to 100. A weight of zero disables the object.

### Spawn Mode

**Transform**
:   Places the prefab as is, moved and rotated to follow the spline.

**Lattice Deform**
:   Bends the prefab's mesh to follow the curve. Use it for long pieces like rails, pipes and walls that must bend smoothly.

**Follow Spline** chooses which axes follow the spline's orientation.

### Segment slots

**Placement**
:   **Count** places a set number of pieces per segment. **Auto Distribute** fits as many as the segment allows.

**Available Space**
:   How pieces use the room they get on each segment: **Stretch** them to fill it, **Distribute** them evenly, or **Queue** them one after another, starting from a **Queue Anchor** point along the segment.

**Spacing**
:   Extra space between pieces.

### Corner slots

**Corner Placement** (on the rules)
:   Put corner pieces on **All Knots**, or only on the spline's ends (**Endpoints Only**).

**Corner Locations**
:   Where at the knot the piece goes: **Start**, **Middle** and/or **End**.

### Random Transform

Every slot can vary its copies within a range: **Position Offset**, **Rotation Offset** (absolute, local values) and **Scale Multiplier** (relative).

## Reusing rules

An **Array Rules Snapshot** stores a set of rules. Set it in the **More** tab before clicking **Create Array Spawner** to start new spawners from it.
