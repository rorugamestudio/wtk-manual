---
icon: wtk/terrain
---

# Terrain

The Terrain module shapes and paints Unity terrains with **stamps**: objects in your scene that each apply one change (raise a hill, carve a riverbed, paint grass, place trees) inside an area you define.

Stamps are **non-destructive**. The terrain is always rebuilt from a saved base plus all the stamps, so you can move, reshape, reorder or delete any stamp at any time, and the terrain updates.

Open it from the **Terrain** tab of the [World Toolkit window](../getting-started/world-toolkit-window.md).

## :lucide-workflow: How it fits together

:wtk-component-terrain-stamp-target: **Terrain Stamp Target**
:   Groups the terrains that stamps affect, and stores their **base**: the state of the terrains before any stamp.

:wtk-component-terrain-stamp: **Terrain Stamp**
:   One stamp. It has an area (usually a spline outline), and one or more **layers**. Each layer combines **masks** (where it applies) with **stamp operations** (what it does).

:lucide-file-box: **Terrain Stamp Preset** (asset)
:   A saved stamp setup you can reuse for new stamps or apply to existing ones.

:lucide-file-box: **Terrain Detail Source** (asset)
:   A grass or detail mesh setup that [Details](details.md) operations place on the terrain.

Stamps apply in **Hierarchy order**, top to bottom. Reorder them in the Hierarchy to change which one wins.

## :lucide-rocket: Your first stamp

1. Select your terrain tiles and click **Create Terrain Stamp Target** in the Terrain panel. If you skip this step, the first stamp you draw creates a target for the terrain under it.
2. Click **Edit Terrain Stamps**, hold ++shift++ and click on the terrain to start an outline, then click to add points. **Right-click** to finish.
3. With the new stamp selected, set up its layer in the Inspector: [masks](masks.md) say where it applies, operations say what it does.
4. Move the stamp or drag its knots: the terrain follows.

## :lucide-book-open: In this section

<div class="grid cards" markdown>

-   :wtk-component-terrain-stamp:{ .lg .middle } **[Stamps](stamps.md)**

    ---

    Set up stamp targets, draw stamps, organise their layers and reuse setups with presets.

-   :lucide-blend:{ .lg .middle } **[Masks](masks.md)**

    ---

    Decide where a layer applies and how strongly, with shapes, noise, slope and height fills.

-   :lucide-mountain:{ .lg .middle } **[Height](height.md)**

    ---

    Raise, lower or flatten the ground from a spline, a collider or a mesh.

-   :lucide-waves:{ .lg .middle } **[Erosion and Smoothing](erosion-and-smoothing.md)**

    ---

    Soften the ground, or wear it down with simulated rain and sliding material.

-   :lucide-paintbrush:{ .lg .middle } **[Textures](textures.md)**

    ---

    Paint terrain layers, for example rock on steep slopes.

-   :lucide-trees:{ .lg .middle } **[Trees](trees.md)**

    ---

    Scatter trees with a density, a minimum spacing and random sizes.

-   :lucide-sprout:{ .lg .middle } **[Details](details.md)**

    ---

    Cover the ground with grass, flowers and small meshes from reusable Detail Sources.

-   :lucide-circle-dashed:{ .lg .middle } **[Holes](holes.md)**

    ---

    Cut openings in the terrain for caves and tunnels, or close them again.

-   :wtk-component-terrain-snap:{ .lg .middle } **[Terrain Snap](terrain-snap.md)**

    ---

    Keep objects and splines on the ground while stamps change it.

-   :lucide-settings:{ .lg .middle } **[Terrain Settings](settings.md)**

    ---

    Outline colors, mask previews, processing mode and rebuild options.

</div>
