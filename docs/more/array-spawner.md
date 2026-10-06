---
icon: wtk/component-spline-array-spawner
---

# Array Spawner

The :wtk-component-spline-array-spawner: **Spline Array Spawner** places copies of prefabs along a spline: fence posts and rails, lamp posts, barriers, modular walls. Change the spline and the copies follow.

## :lucide-list-ordered: Creating one

1. Get a :lucide-file-box: **Spline Array Rules Snapshot** with the rules you want: create one with **Assets > Create > World Toolkit > Spawners > Spline Array Rules Snapshot** and fill in its **Rules**, or export one from an existing spawner (see [Reusing rules](#reusing-rules)).
2. Select the object with the spline. In the **Edit** tab of the [More](index.md) module, under **Spawners**, the **Spline** field picks it up.
3. Set **Array Rules Snapshot** to your snapshot.
4. Click :wtk-component-spline-array-spawner: **Create Array Spawner**. It needs both a spline and a snapshot.

The new object, named after the snapshot, is placed at the spline object's position, next to it in the hierarchy. It follows the container's first spline and is selected. The copies are created as its children.

You can also add the component yourself with **Add Component > World Toolkit > Spawners > Spline Array Spawner**, then set its **Spline** and build the rules in its inspector.

## :lucide-settings: Settings

**Spline** and **Spline Index**
:   The Spline Container to follow, and which of its splines (0 is the first).

**Overall Position Offset** / **Overall Rotation Offset**
:   Moves or rotates every copy, in each copy's own axes.

**Seed**
:   Changes the random choices: which object each piece uses, and any value set to **Random**.

**Rules**
:   What to place, and where. See [Rules](#rules).

**Show Lattice Wireframes**
:   Only shown when a slot uses **Lattice Deform**. Draws the cage that bends each deformed piece while the spawner is selected.

**Rules Snapshot**, **Apply Snapshot** and **Export Current Rules as Snapshot…**
:   Copy rules from, or save them to, a snapshot asset. See [Reusing rules](#reusing-rules).

**Rebuild**
:   Places all the copies again.

**Make Spawned Objects Editable**
:   Keeps the copies as ordinary objects and removes the spawner component, so they stop following the spline.

The copies rebuild by themselves when you change a setting or the spline. How often that happens while you drag is set in [More Settings](settings.md#spawners).

!!! warning "Edits to the copies don't last"
    Every rebuild replaces the copies, so changes you make to them by hand are lost. Use **Make Spawned Objects Editable** first if you want to edit them.

## :lucide-layers: Rules

Rules are made of **slots**. **Segment slots** fill the spline between knots, and **corner slots** go on the knots themselves.

**Corner Placement**
:   **All Knots**: corner slots can go on every knot, and segment slots fill each stretch from one knot to the next. **Endpoints Only**: corner slots only go on the two ends of an open spline (none on a closed one), and segment slots fill the whole spline as one long stretch.

### Objects and chances

Each slot has a list of **Objects** (prefabs), each with a **Chance Weight**. One object is picked for each piece. Weights are relative and don't have to add up to 100. A weight of zero disables the object.

### Spawn Mode

**Transform**
:   Places a copy of the prefab, moved and rotated to follow the spline.

**Lattice Deform**
:   Bends the prefab's mesh to follow the curve. Use it for long pieces like rails, pipes and walls that must bend smoothly.

**Follow Spline** chooses which rotation axes (**X**, **Y**, **Z**) follow the spline. An axis that is off keeps the spawner object's own rotation, so turning off **X** and **Z** keeps pieces upright where the spline climbs.

A piece's Z axis runs along the spline, and its size along Z is its length: model pieces lengthwise along Z.

### Segment slots

Segment slots are laid out one after another, in list order, along each stretch of the spline.

**Placement**
:   **Count** places a set number of pieces on each stretch, from 1 to 512. **Auto Distribute** fits as many pieces as the room it gets allows: the room left by the **Count** slots, shared equally between the **Auto Distribute** slots.

**Available Space**
:   How pieces use the room they get. **Stretch** stretches them along the spline to fill it. **Distribute** keeps their size and spreads the leftover room evenly between them. **Queue** keeps them packed together, and **Queue Anchor** slides the row within that room, from 0 (at its start) to 1 (at its end).

**Spacing**
:   Extra space after each piece.

When a stretch has no **Auto Distribute** slot, the **Count** slots are given the whole stretch and **Available Space** decides how they fill it. If the pieces don't fit, they're squeezed evenly along the stretch.

### Corner slots

**Corner Locations**
:   Which knots the slot is used on: **Start** (the first knot of an open spline), **Middle** (the knots in between, and every knot of a closed spline) and **End** (the last knot of an open spline).

Several corner slots on the same knot are lined up along the spline, centered on the knot, and the segment pieces start after them.

### Random Transform

Every slot can vary its copies: **Position Offset**, **Rotation Offset** (absolute, local values) and **Scale Multiplier** (relative). **Count**, **Spacing** and these values can each be a fixed value or, with **Random** on, a range: each piece (each stretch, for **Count**) gets a value between the minimum and the maximum, picked from the **Seed**.

## :lucide-file-box: Reusing rules

A :lucide-file-box: **Spline Array Rules Snapshot** asset stores a set of rules. Create one with **Assets > Create > World Toolkit > Spawners > Spline Array Rules Snapshot**; its inspector shows the same **Rules** as a spawner.

- In a spawner's inspector, set **Rules Snapshot** and click **Apply Snapshot** to replace the spawner's rules with the snapshot's.
- **Export Current Rules as Snapshot…** saves the spawner's current rules as a new snapshot asset.
- In the **More** module, the **Array Rules Snapshot** sets the rules of the spawners you create with **Create Array Spawner**.

!!! note
    A spawner gets a copy of the snapshot's rules. Editing the snapshot later doesn't change spawners made from it until you apply it again.
