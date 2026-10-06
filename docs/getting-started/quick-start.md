---
icon: lucide/zap
---

# Quick Start

A short tour from an empty scene to a small piece of world: a shaped terrain, a road, a building and a modelled detail. Each step links to the full page if you want more detail.

!!! tip "Drawing a shape, in short"
    Stamp outlines and building footprints are drawn the same way:

    - With nothing selected, hold ++shift++ and click to place the first point.
    - Click to add more points. Drag while placing a point to pull out its handles and curve the line.
    - Click the first point again to close the shape, or **right-click** to finish it.
    - ++esc++ while drawing throws the new shape away.

    Roads work a little differently, see step 3.

## :wtk-world: 1. Open the World Toolkit window

Open **Window > World Toolkit > Open** and dock it next to the Inspector. You'll switch between its modules as you go. See [The World Toolkit Window](world-toolkit-window.md).

## :wtk-terrain: 2. Shape the terrain

1. Create a terrain (**GameObject > 3D Object > Terrain**).
2. In the :wtk-terrain: **Terrain** module, click **Edit Terrain Stamps**.
3. With nothing selected, hold ++shift++ and click on the terrain to start a stamp outline, click around an area, and click the first point again to close it. If the terrain has no **Terrain Stamp Target** yet, the first stamp creates one.
4. Unless the panel sets a **Terrain Stamp Preset** for new stamps, a new stamp has a single layer with a **Height** operation. Select the outline's knots and move them up: the ground follows.
5. In the stamp's inspector, add a **Texture** operation with a terrain layer to paint the area.

More in [Stamps](../terrain/stamps.md) and [Height](../terrain/height.md).

## :wtk-roads: 3. Draw a road

1. In the :wtk-roads: **Roads** module, pick a **Road Rules** asset under **New Roads**. The roads you draw, and the junctions between them, take their lanes, sidewalks and settings from it.
2. Click **Edit Road Points**, hold ++shift++ and click to start a road, and click to add points. Press ++esc++ or **right-click** to finish it: unlike other shapes, ++esc++ keeps the road. A second ++esc++ stops editing road points.
3. Draw a second road that ends on the first one: a junction is created where they meet.

More in [Creating Roads](../roads/creating-roads.md) and [Junctions](../roads/junctions.md).

## :wtk-buildings: 4. Add a building

1. In the :wtk-buildings: **Buildings** module, check that **Draw Creates** is set to **Building** and that **New Building Defaults** has a **Building Rules** asset. If you don't have one yet, make one with the :lucide-wand-sparkles: [Style Wizard](../buildings/style-wizard.md).
2. Click **Edit Buildings**, then, with nothing selected, hold ++shift++ and click to place the first corner of a footprint next to the road, and click the other corners. Click the first corner again, or **right-click**, to close it.

The building generates as soon as the footprint closes. Move its knots and it regenerates. More in [Buildings and Volumes](../buildings/buildings-and-volumes.md).

## :wtk-modelling: 5. Model a detail

1. In the :wtk-modelling: **Modelling** module, click :wtk-create-cube: **Cube** in the **Create** tab.
2. Drag in the Scene view to draw its base, move the mouse to set the height, and click.
3. Click **Make Editable**, press ++3++ for face mode, select the top face and use :wtk-modify-extrude: **Extrude**.

More in [Primitives](../modelling/primitives.md) and [Editing Tools](../modelling/editing-tools.md).

## :lucide-compass: Where next

<div class="grid cards" markdown>

-   :wtk-component-spline-container:{ .lg .middle } **[Spline controls](../splines/spline-container.md)**

    ---

    The knot editing, snapping and right-click tools that every module shares.

-   :wtk-component-city-block-floor:{ .lg .middle } **[City Blocks](../roads/city-blocks.md)**

    ---

    Fill the areas between roads with generated floors.

-   :lucide-trees:{ .lg .middle } **[Trees](../terrain/trees.md) and [Details](../terrain/details.md)**

    ---

    Scatter trees, grass and small details with stamps.

</div>
