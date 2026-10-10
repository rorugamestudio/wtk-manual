---
icon: wtk/component-building-block
---

# Building Blocks

A :wtk-component-building-block: **Building Block** takes a large area, splits it into lots, and generates a building on each one. Use it to fill a whole city block quickly, then adjust individual buildings if needed.

## :lucide-pen-tool: Creating a block

1. In the :wtk-buildings: **Buildings** module, set **Draw Creates** to :wtk-component-building-block: **Block**.
2. Click **Edit Buildings**.
3. Hold ++shift++ and **click** to place the first corner of the block, then **click** to place the others.
4. **Click** the first corner again, or **right-click**, to close the outline.

The block splits into lots and generates a building on each one. It starts with the **Building Rules** of **New Building Defaults** as its only rules. As with a building, ++esc++ while drawing throws the outline away.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/buildings/building-blocks.webp">
    <source src="../assets/videos/buildings/building-blocks.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing a block outline and getting a row of buildings.</figcaption>
</figure>

You can also add the component yourself with **Add Component > World Toolkit > Buildings > Building Block**. It adds a **Spline Container** to the object if there isn't one.

:wtk-component-building-block: **Create Block with Selected** turns the selected objects that have a spline into building blocks, for example a [City Block Floor](../roads/city-blocks.md) enclosed by roads.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/buildings/building-block-from-city-block.webp">
    <source src="../assets/videos/buildings/building-block-from-city-block.mp4" type="video/mp4">
  </video>
  <figcaption>Turning a City Block Floor into a building block, then pulling the buildings back from the roads with Overall Inset.</figcaption>
</figure>

!!! note "Editing the outline"
    The block uses its knots as the corners of its area: curves between knots are ignored when it splits lots. While you move the knots, the block hides its buildings, and rebuilds them when you release the mouse or pause for a moment.

## :lucide-building-2: Choosing the buildings

**Building Rule Chances**
:   The [Building Rules](building-rules.md) used for the generated buildings, each with a **Chance**. Each lot picks one, so mixing several rules varies the style along the block. Chances are weights: rules with twice the chance show up about twice as often.

**Mesh Bake Strategy**
:   Whether each generated building is baked into a single mesh: **Per Building** follows each building's own **Auto Bake After Generation**, **Force Bake All** bakes every building, and **Dont Bake** bakes none.

**Generated Buildings**
:   The buildings the block made, as its children **Building 1**, **Building 2** and so on. Each is a regular [Building](buildings-and-volumes.md) whose **Explicit Footprint** is its lot, with its own seed taken from the block's seed and its lot.

**Seed** and **Randomize Seed**
:   The seed drives the lot layout, which rules each lot gets and the seeds of the buildings. Change it to get a different layout and mix from the same settings. With **Randomize Seed** on, the block rolls a new seed whenever you change one of its settings.

When the block regenerates, each lot reuses the existing building closest to it, and that building keeps its seed unless the block's **Seed** changed. Buildings left without a lot are hidden and kept for later.

!!! info "Lots get a copy of their rules"
    Like **Apply to Selected**, a block copies the rules into each of its buildings. Later edits to a rules asset don't reach them, while edits to walls and roofs do. See [Using rules](building-rules.md#using-rules).

## :lucide-square-dashed: Adjusting lots

**Overall Inset**
:   Shrinks the whole block outline inward by this distance before the lots are made, for example to leave room for a sidewalk around the block. Lots are built from the inset outline, and edge insets come on top of it. When it's above 0, the inset outline is drawn in the Scene view.

**Default Edge Inset**
:   Moves every lot edge inward by this distance, leaving space between the buildings and their lot lines. Edges you've moved by hand keep their own inset.

To change a single edge, use the handle in the middle of that edge in the Scene view:

- **Drag** it to set how far that edge sits inside its lot.
- Hold ++shift++ while dragging to move all edges of that building by the same amount.
- **Double-click** it to put the edge back to the **Default Edge Inset**. ++shift++ + **double-click** resets every edge of that building.

Handles of edges you've moved are orange, the others are blue. A dotted line shows the lot edge the inset is measured from. The handles show on the selected block, or on the block of a selected building, and on every block while **Edit Buildings** is on.

## :lucide-split: Lot splitting

How the block divides its area:

1. Divider points are placed along the outline, **Lot Width** apart.
2. A guide line runs parallel to the longest side of the block, **Lot Depth Offset** inside it. It separates the lots facing that side from the ones behind them.
3. From each point, a divider (a ray) runs into the block until it meets the guide line, another divider or the outline. The longest side goes first.
4. Every area closed off by the outline and the dividers becomes a lot, with a building on it.

The dividers are drawn in the Scene view on the selected block, and on every block while **Edit Buildings** is on. Turn on **Show Debug Overlays** to also see the divider points and the whole guide line (dotted), which helps when tuning the settings below.

### Lot

**Lot Width**
:   How far apart the divider points are: each gap is a random length within the range. Points also stay at least the minimum away from the corners of the outline.

**Lot Depth Offset**
:   How far the guide line is from the longest side, picked within the range.

**Facade Coverage**
:   Which stretch of the outline gets divider points, as a part of its length counted from the first knot. 0 to 1 covers the whole outline.

### Rays

**Neighbor Edge Direction Chance**
:   The chance for the first and last divider of each side to run parallel to the neighbouring side instead of straight in, so corner lots line up with the side street. It's only used when that direction points into the block and reaches the guide line before the outline.

**Process Remaining Edges Clockwise**
:   After the longest side, the other sides are traced in a random order. Turn this on to go around the outline instead. The order matters, because a divider stops at the dividers traced before it.

**Ray Sample Count**
:   How many passes are made over the sides. A divider that found nothing to stop at is tried again on the next pass, when more dividers exist.

**Allow Boundary Collision**
:   Lets dividers stop at the outline. Turn it off to stop them only at the guide line or at other dividers.

**Use Maximum Collision Angle** and **Maximum Collision Incidence**
:   Drops dividers that would meet the line they stop at more slanted than this angle, in degrees from straight on.

### Guide Boundary Snap

**Use Guide Boundary Proximity Snap** and **Guide Boundary Proximity**
:   Moves divider points that are within this distance of an end of the guide line (where it meets the outline) onto that end. Their divider then runs along the guide line.

**Remove Orphaned Collisions After Snap**
:   Removes the dividers that had stopped against a divider moved by the snap. Turn it off to trace them again instead.

### Topology

**Nearby Node Merge Tolerance**
:   Joins divider ends and crossings that are closer than this distance into one point. 0 leaves them as they are.
