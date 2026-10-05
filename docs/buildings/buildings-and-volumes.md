# Buildings and Volumes

## Creating a building

1. In the **Buildings** panel, set **Draw Creates** to **Building**.
2. Click **Edit Buildings**.
3. Hold ++shift++ and **click** to draw the footprint, then close it.

The building generates right away, using the **Building Rules** set under **New Building Defaults**.

To edit the footprint later, select the building and use **Edit Buildings**. Knots work like any [spline](../splines/spline-container.md#editing-knots). Press ++esc++ to stop editing.

You can also add the **Building** component to an object with a spline (**Add Component > World Toolkit > Buildings > Building**) and assign its **Spline Container**.

## Building settings

**Spline Container**
:   The footprint. Instead, you can give an **Explicit Footprint**, a list of points.

**Rules Override**
:   When set, the building takes its volumes from these [Building Rules](building-rules.md) instead of its own, which are hidden. Leave it empty to set up volumes directly on the building.

**Floors** and **Subfloors**
:   How many floors above ground, and how many below (basements, foundations). They normally come from the rules. Enable **Lock Floors** or **Lock Subfloors** to keep this building's own value.

**Seed** and **Randomize Seed**
:   Rules can be random: which wall goes where, which window a slot picks. The seed keeps the result stable. Change it to get a different variation from the same rules.

**Auto Bake After Generation**
:   Combines the generated pieces into a single mesh after each generation, which is lighter to render.

**Regenerate Building** builds it again. Select a building and click **Open WTK Buildings** to jump to the Buildings panel.

## Volumes

Each volume is a block of floors with its own walls and roof.

**Key**
:   A name other volumes use to stack on top of this one.

**Foundation**
:   Foundation volumes grow **downward** and use the building's subfloor count.

**Ground Zero Volume** and **Ground Zero Floor**
:   Where this volume starts. With no ground zero volume, it starts at the footprint base. Pick another volume's key to stack on it, and **Ground Zero Floor** to choose at which floor: 0 is its base, 1 the top of its first floor. Negative values count from the top: -1 is the top of the last floor.

**Floor Count**
:   Floors in this volume. 0 uses the building's floor count.

**Start Floor** and **Height Offset**
:   Extra floors skipped, and an extra height in meters, before the volume starts.

**Terrain Level**
:   On sloped ground, where the base sits between the lowest (0) and highest (1) corner of the footprint.

**Footprint Spline**
:   A footprint of its own. Leave it empty to use the building's footprint.

**Walls**
:   The walls placed along the footprint sides. See [Walls](#walls).

**Roof**
:   The [roof](roofs.md) on top. Foundations ignore it.

Several settings accept a **range**: a building picks a random value inside it, using its seed.

## Walls

A **Volume Wall** asset (**Assets > Create > World Toolkit > Buildings > Volume Wall**) describes what goes along a footprint side. It's a list of **rows** stacked floor by floor, plus an optional **Corner**.

### Assigning walls to sides

A volume's **Walls** list decides which wall each footprint side gets:

**Chance**
:   The chance this wall takes its turn. On a failed roll, the next wall is tried.

**Max Uses**
:   How many sides this wall can cover. 0 is unlimited.

**Explicit Knot Start**
:   Starts this wall at a specific footprint knot, and it covers the sides from there until the next explicit wall. Use -1 to take turns with the other -1 walls instead.

Sides that no wall can take get the first wall.

### Rows

A row is one band of the wall, repeated on each floor it covers (**Max Floors**, 0 for all). There are two kinds:

**Prefab** rows
:   Made of **slots**. Each slot holds **Modular Pieces**, which are prefabs such as a window, a door or a plain panel. **Placement** puts one piece (**Single**) or repeats pieces along the side (**Distribute**). **Stretching** set to **Stretch To Fit** scales pieces to fill the space exactly. **Chance** and **Max Pieces Count** add variety and limits.

**Procedural** rows
:   Generated shapes with a **Height**, made of items:

    - **Wall** items extrude a 2D profile along the side, for cornices, bands and ledges. Profiles come with presets: **Flat**, **Box**, **Parapet**, **Cornice**, **Chamfer** and **Pilaster**.
    - **Base** items add a flat plate covering the whole footprint, at a height within the row (**Origin** and **Offset Y**), optionally pushed out past the walls (**Expand**). Use them for floor slabs and flat ceilings.

### Corners

The **Corner** section is placed at each footprint corner. It can be **Prefab** or **Procedural**, and can follow a **Sharp**, **Round** or custom path. Corners can be limited to outside corners (**Convex**), inside corners (**Concave**) or **Any**.

## Checking the result

The building inspector reports problems found while generating, for example:

- a volume whose footprint has fewer than three corners,
- footprint sides that got no wall,
- single pieces that didn't fit their wall. Use shorter pieces or **Stretch To Fit** slots.

Click an issue to jump to the field that causes it. The report also shows how many pieces were generated and how long it took.

The **Layout Overlay** in the Scene view labels each footprint side with the wall it got.
