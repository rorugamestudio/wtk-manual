---
title: More
icon: wtk/more
---

# More

The :wtk-more: **More** module of the [World Toolkit window](../getting-started/world-toolkit-window.md) holds tools shared across modules: spline editing, spawners, and the settings every module uses. This section also covers :wtk-component-ground-snap: [Ground Snap](ground-snap.md) and Drop to Ground, which keep objects on the ground in every module.

## :lucide-pencil: Edit tab

:wtk-splines: **Splines**
:   **Edit Splines** starts editing splines in the Scene view; while you edit, the button reads **Exit Editing Splines**. See [Splines](../splines/index.md).

    **Centralize Pivot** moves the pivot of the selected Spline Containers to the center of their knots, or of the selected knots. **Place Pivot On Knot 0** moves it onto the first knot of the spline. The splines and the objects' children stay where they are.

:wtk-component-spline-spawner: **Spawners**
:   Create spawners that place copies of objects along a spline or inside an area. The **Spline** field shows the Spline Container of the selected object: select the object with the spline to use it.

    - :wtk-component-spline-array-spawner: **Create Array Spawner** places rows of objects along that spline, following the **Array Rules** asset you set above it. See [Array Spawner](array-spawner.md).
    - :wtk-component-spline-area-spawner: **Create Area Spawner** fills an area with copies of the **Area Source Object**, inside the selected spline if there is one. See [Area Spawner](area-spawner.md).

## :lucide-settings: Settings tab

Camera, Scene view background and snapping highlight options, the spline and spawner settings, and the **Settings Files** commands that import, export or restore all World Toolkit preferences. See [More Settings](settings.md).

## :lucide-book-open: In this section

<div class="grid cards" markdown>

-   :wtk-component-spline-array-spawner:{ .lg .middle } **[Array Spawner](array-spawner.md)**

    ---

    Rows of objects along a spline, like fences, lamp posts, barriers and modular walls, built from reusable rules.

-   :wtk-component-spline-area-spawner:{ .lg .middle } **[Area Spawner](area-spawner.md)**

    ---

    Copies of one object filling the area inside a spline, like cars in a parking lot or trees in an orchard.

-   :wtk-component-ground-snap:{ .lg .middle } **[Ground Snap](ground-snap.md)**

    ---

    Keep objects on colliders and terrains while the ground changes, or drop them onto it once.

-   :lucide-settings:{ .lg .middle } **[More Settings](settings.md)**

    ---

    Camera, background and snapping highlight options, spline and spawner settings, and settings files.

-   :lucide-square-terminal:{ .lg .middle } **[Command Line](command-line.md)**

    ---

    World Toolkit commands for the Unity CLI, for scripts, build checks and AI agents.

</div>
