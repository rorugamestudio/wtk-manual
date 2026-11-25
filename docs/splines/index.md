---
title: Splines
icon: wtk/splines
---

# Splines

Splines are curves made of **knots** (points) with handles that control how the curve bends between them. In World Toolkit they're the backbone of almost everything: roads, building footprints, terrain stamps, spawners, decals and spline-based primitives all start from a spline.

World Toolkit uses its own spline system, the :wtk-component-spline-container: **Spline Container** component, and every module edits it with the same controls.

## :wtk-splines-context: Where to edit splines

- In the **Edit** tab of the :wtk-more: **More** module of the [World Toolkit window](../getting-started/world-toolkit-window.md), click **Edit Splines**. While you edit, the button reads **Exit Editing Splines**: click it again to stop.
- Or click :wtk-new-splines: **Create Splines** on the [Splines Edit toolbar](#splines-edit-toolbar), when it's shown, to start editing with creation on.
- Or turn on **Always Show All Splines** in the [Spline Settings](settings.md). You can then click a spline's line in the Scene view to select it, and **double-click** a selected spline to start editing it.

The selected objects' splines, and those of their children, are always drawn, even when you aren't editing and **Always Show All Splines** is off.

While editing, Unity's tool context switches to :wtk-splines-context: **WTK: Splines**. The [Splines Edit toolbar](#splines-edit-toolbar) and the :wtk-selected-knots: **Selected Knots** panel, for the knots you pick, appear in the Scene view, and the :wtk-new-splines: **New Splines** panel while you create splines. The Roads, Buildings and Terrain modules use the same controls to edit their own splines, and only show and edit their own: roads in Roads, footprints in Buildings, stamps in Terrain.

!!! tip "Stop editing"
    Press ++esc++ while you aren't drawing a spline to leave spline editing (with creation on, the first ++esc++ only turns creation off). The [context tips](../getting-started/world-toolkit-window.md#context-tips) panel sums up the mouse controls while you edit.

## :lucide-wrench: Splines Edit toolbar

A small vertical toolbar in the Scene view, always shown while you edit splines, in every module. From top to bottom:

:wtk-new-splines: **Create Splines**
:   Turns creation on and off. While it's on, clicks draw new splines instead of selecting: roads in the Roads module, footprints in Buildings, stamp outlines in Terrain. See [Drawing splines](spline-container.md#drawing-splines). Clicked while you aren't editing, it starts editing in the module open in the [World Toolkit window](../getting-started/world-toolkit-window.md), with creation on.

**Local Handle**
:   What the **Move**, **Rotate** and **Scale** handles line up with when the tool handle rotation is **Local**: the Spline Container's transform (**Object**), the first selected knot (**First Knot**), or the average rotation of the selected knots (**Average**).

:wtk-selection-filter: **Edit Selected Only**
:   The open module's option to show editable knots only on the selected objects: **Edit Selected Splines Only**, **Edit Selected Roads Only** and so on. Also in the module's editing section of the World Toolkit window. Clicking another spline's line still selects it instead (++shift++ adds it), also after clicking empty space has cleared the selection.

:wtk-visibility: **Always Show All Splines**
:   Keeps every spline drawn when you aren't editing, as in the [Spline Settings](settings.md).

**Show Knot Indexes**
:   Writes each knot's number next to it, as in the [Spline Settings](settings.md).

Outside spline editing the toolbar is hidden. Turn on **Show Splines Toolbar Outside Context**, in the [Spline Settings](settings.md) or under **Always Show All Splines** in a module's editing section, to keep it in the Scene view. The choice is remembered.

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
