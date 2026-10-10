---
icon: wtk/component-spline-array-spawner
---

# Array Spawner

The :wtk-component-spline-array-spawner: **Spline Array Spawner** places copies of prefabs along a spline: fence posts and rails, lamp posts, barriers, modular walls. Change the spline and the copies follow.

## :lucide-list-ordered: Creating one

1. Get a :lucide-file-box: **Spline Array Rules** asset with what you want to place: create one with **Assets > Create > World Toolkit > Spawners > Spline Array Rules** and fill in its slots, or make one from an existing spawner (see [Creating rules](#creating-rules)).
2. Select the object with the spline. In the **Edit** tab of the [More](index.md) module, under **Spawners**, the **Spline** field picks it up.
3. Set **Array Rules** to your rules.
4. Click :wtk-component-spline-array-spawner: **Create Array Spawner**. It needs both a spline and rules.

The new object, named after the rules, is created as a child of the spline object, at its position. It follows the container's first spline, uses the rules (see [How spawners use rules](#how-spawners-use-rules)) and is selected. The copies are created as its children.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/more/array-spawner.webp">
    <source src="../assets/videos/more/array-spawner.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing a spline and spawning lamp posts along it.</figcaption>
</figure>

You can also add the component yourself with **Add Component > World Toolkit > Spawners > Spline Array Spawner**, then set its **Spline** and either give it **Rules** or fill in its own slots.

## :lucide-settings: Settings

**Spline** and **Spline Index**
:   The Spline Container to follow, and which of its splines (0 is the first).

**Overall Position Offset** / **Overall Rotation Offset**
:   Moves or rotates every copy, in each copy's own axes.

**Seed**
:   Changes the random choices: which object each piece uses, and any value set to **Random**.

**Rules**
:   Optional [Spline Array Rules](#spline-array-rules). While it's set, the spawner places what the asset describes, and its own slots are hidden. Expand the field's arrow to edit the asset from the spawner inspector, or click **New** to create a Spline Array Rules asset and assign it.

**Corner Placement**, **Corner Slots** and **Segment Slots**
:   The spawner's own slots: what to place, and where. Shown while **Rules** is empty. See [Slots](#slots).

**Show Lattice Wireframes**
:   Only shown when a slot uses **Lattice Deform**, in the spawner's own slots or in its rules. Draws the cage that bends each deformed piece while the spawner is selected.

**Rebuild**
:   Places all the copies again.

**Make Spawned Objects Editable**
:   Keeps the copies as ordinary objects and removes the spawner component, so they stop following the spline.

The copies rebuild by themselves when you change a setting or the spline. How often that happens while you drag is set in [More Settings](settings.md#spawners).

!!! warning "Edits to the copies don't last"
    Every rebuild replaces the copies, so changes you make to them by hand are lost. Use **Make Spawned Objects Editable** first if you want to edit them.

## :lucide-layers: Slots

Slots describe what an array places. **Segment slots** fill the spline between knots, and **corner slots** go on the knots themselves. A spawner and a [Spline Array Rules](#spline-array-rules) asset have the same slot settings.

**Corner Placement**
:   **All Knots**: corner slots can go on every knot, and segment slots fill each stretch from one knot to the next. **Endpoints Only**: corner slots only go on the two ends of an open spline (none on a closed one), and segment slots fill the whole spline as one long stretch.

### Objects and chances

Each slot has a list of **Objects** (prefabs), each with a **Chance Weight**. One object is picked for each piece. Weights are relative and don't have to add up to 100. A weight of zero disables the object.

### Spawn Mode

**Transform**
:   Places a copy of the prefab, moved and rotated to follow the spline.

**Lattice Deform**
:   Bends the prefab's mesh to follow the curve. Use it for long pieces like rails, pipes and walls that must bend smoothly.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/more/array-conform-to-spline.webp">
    <source src="../assets/videos/more/array-conform-to-spline.mp4" type="video/mp4">
  </video>
  <figcaption>Wall pieces bent along the spline with Lattice Deform.</figcaption>
</figure>

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

## :lucide-file-box: Spline Array Rules

A **Spline Array Rules** asset is a reusable array setup: a **Corner Placement**, **Corner Slots** and **Segment Slots**, the same as on a spawner. Its inspector shows the same slot settings.

### How spawners use rules

- When you click **Create Array Spawner**, the new spawner copies the **Array Rules** set in the More module and keeps a reference to them in its **Rules** field.
- While a spawner references rules, it places what the asset describes. Edit the asset, and every spawner that references it rebuilds.
- Clear a spawner's **Rules** field to make it independent: it goes back to its own slots, which you can then edit on that spawner alone. A spawner made with **Create Array Spawner** keeps the setup it copied.

!!! note
    Setting **Rules** on a spawner doesn't change its own slots: they're only hidden, and clearing the field shows them again as they were.

### Creating rules

- **From a spawner:** right-click the spawner component and choose **Create Spline Array Rules From Current Setup...**. The asset gets the slots the spawner places now: those of its **Rules** when it has some, otherwise its own.
- **Empty:** **Assets > Create > World Toolkit > Spawners > Spline Array Rules**.
- **From a spawner's Rules field:** click **New**.
