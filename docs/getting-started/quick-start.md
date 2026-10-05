# Quick Start

A short tour from an empty scene to a small piece of world: a shaped terrain, a road and a building. Each step links to the full page if you want more detail.

## 1. Open the World Toolkit window

Open **Tools > World Toolkit > World Toolkit**. Dock it next to the Inspector. You'll switch between its tabs as you go. See [The World Toolkit Window](world-toolkit-window.md).

## 2. Shape the terrain

1. Create a terrain (**GameObject > 3D Object > Terrain**) and select it.
2. In the **Terrain** tab, click **Create Terrain Stamp Target**.
3. Click **Edit Terrain Stamps**, hold ++shift++ and click around an area to draw a stamp outline.
4. A new stamp starts with a **Height** operation. Select the outline's knots and move them up: the ground follows.
5. In the stamp's inspector, add a **Texture** operation with a terrain layer to paint the area.

More in [Stamps](../terrain/stamps.md) and [Height](../terrain/height.md).

## 3. Draw a road

1. Switch to the **Roads** tab and click **Edit Road Points**.
2. Hold ++shift++ and click to start a road, click to add points, and press ++esc++ to finish.
3. Draw a second road that ends on the first one: a junction is created where they meet.

More in [Creating Roads](../roads/creating-roads.md) and [Junctions](../roads/junctions.md).

## 4. Add a building

1. Switch to the **Buildings** tab. Make sure **Draw Creates** is set to **Building** and that **New Building Defaults** has a **Building Rules** asset. If you don't have one yet, make one with the [Style Wizard](../buildings/style-wizard.md).
2. Click **Edit Buildings**, hold ++shift++ and click to draw a closed footprint next to the road.

The building generates as soon as the footprint closes. Move its knots and it regenerates. More in [Buildings and Volumes](../buildings/buildings-and-volumes.md).

## 5. Model a detail

1. Switch to the **Modelling** tab and click **Cube** in the **Create** tab.
2. Drag in the Scene view to draw its base, move the mouse to set the height, and click.
3. Click **Make Editable**, press ++3++ for face mode, select the top face and use **Extrude**.

More in [Primitives](../modelling/primitives.md) and [Editing Tools](../modelling/editing-tools.md).

## Where next

- Learn the [spline controls](../splines/spline-container.md) that every module shares.
- Fill the gaps between roads with [City Block Floors](../roads/city-blocks.md).
- Scatter trees and grass with [Trees](../terrain/trees.md) and [Details](../terrain/details.md).
