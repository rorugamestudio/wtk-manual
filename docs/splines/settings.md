---
icon: lucide/settings
---

# Spline Settings

Spline display options are in the **Settings** tab of the :wtk-more: **More** module, under **Splines**. They apply wherever splines are edited, in every module.

## :lucide-eye: Spline Display

**Always Show Splines**
:   Draws splines even when you're not editing them. You can then click a spline's line to select its object, and double-click a selected spline to start editing it.

**Line Thickness** and **Knot Size**
:   How thick the curves are, and how big the knots.

**Show Knot Indexes**
:   Writes each knot's number next to it. Handy for settings that refer to a knot by number, like a [Point Anchor](point-anchors.md)'s **Position**.

**Use Tangent Mode Knot Shapes**
:   Draws knots with a shape that tells their type: squares for **Linear** knots, circles for **Auto** knots. **Bezier** knots keep the usual shape.

**Draw Occluded** and **Occluded Opacity**
:   Draws splines hidden behind other objects, faded to **Occluded Opacity**.

**Samples Per Segment**
:   How smoothly curves are drawn: the number of points between two knots. A spline can override it in its [inspector](spline-container.md#paths-and-path-data).

## :lucide-palette: Colors

Colors of the **Spline**, the **Closed Spline Fill**, the **Selected Spline** and its fill, **Knot** and **Selected Knot**, the **Open Spline Endpoint**, the **Knot Rotation Marker**, **Tangent**, **Selected Tangent** and **Tangent Line**, and the **Creation Offer**: the preview of the next knot before you click.

!!! info "Module splines"
    The Roads, Buildings and Terrain modules have their own **Splines** settings, with **Line**, **Closed Spline Fill** and **Line Thickness**, for the splines they edit.

## :lucide-mouse-pointer-2: Spline Editing

**Edit Selected Containers Only**
:   Only the Spline Containers you have selected show editable knots, which helps in busy scenes. Selecting knots keeps those objects selected.

## :lucide-timer: Rebuilds

**Rebuild Debounce**, **Mouse Down Idle (s)** and **Update Interval (ms)** set how often the splines drawn in the Scene view are refreshed while you drag. See [Rebuild settings](../getting-started/world-toolkit-window.md#rebuild-settings).
