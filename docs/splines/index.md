---
title: Splines
icon: wtk/splines
---

# Splines

Splines are curves made of **knots** (points) with handles that control how the curve bends between them. In World Toolkit they're the backbone of almost everything: roads, building footprints, terrain stamps, spawners, decals and spline-based primitives all start from a spline.

World Toolkit uses its own spline system, the :wtk-component-spline-container: **Spline Container** component, and every module edits it with the same controls.

## :wtk-splines-context: Where to edit splines

- In the **Edit** tab of the :wtk-more: **More** module of the [World Toolkit window](../getting-started/world-toolkit-window.md), click **Edit Splines**. While you edit, the button reads **Exit Editing Splines**: click it again to stop.
- Or turn on **Always Show Splines** in the [Spline Settings](settings.md). You can then click a spline's line in the Scene view to select it, and **double-click** a selected spline to start editing it.

While editing, Unity's tool context switches to :wtk-splines-context: **WTK: Splines**, and two panels appear in the Scene view: :wtk-new-splines: **New Splines** for drawing new splines, and :wtk-selected-knots: **Selected Knots** for the knots you pick. The Roads, Buildings and Terrain modules use the same controls to edit their own splines.

!!! tip "Stop editing"
    Press ++esc++ while you aren't drawing a spline to leave spline editing. The [context tips](../getting-started/world-toolkit-window.md#context-tips) panel sums up the mouse controls while you edit.

## :lucide-book-open: In this section

<div class="grid cards" markdown>

-   :wtk-component-spline-container:{ .lg .middle } **[Spline Container](spline-container.md)**

    ---

    Draw splines knot by knot, freehand or as shapes, edit their knots and handles, and store extra data along them.

-   :wtk-component-spline-point-anchor:{ .lg .middle } **[Point Anchors](point-anchors.md)**

    ---

    Keep an object attached to a point on a spline, following its position, direction and scale.

-   :wtk-component-spline-link-group:{ .lg .middle } **[Link Groups](link-groups.md)**

    ---

    Tie knots of different splines together so they always move as one.

-   :lucide-settings:{ .lg .middle } **[Spline Settings](settings.md)**

    ---

    How splines and knots are drawn, which containers you can edit, and how often splines refresh while you drag.

</div>
