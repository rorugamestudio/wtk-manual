---
icon: lucide/settings
---

# More Settings

The **Settings** tab of the :wtk-more: **More** module holds settings shared by every module.

## :lucide-sliders-horizontal: Misc

**Instant Camera Switch**
:   Skips the Scene view's animated transition when switching camera views.

**Sync Camera Focus**
:   Keeps the Scene view's focus point when switching camera views, and keeps the zoom between orthographic views.

**Show Grid Coordinates**
:   Writes the world coordinates of one grid cell near the center of each Scene view.

!!! info "Switching camera views"
    Hold ++space++ in the Scene view to open the camera menu, move the mouse toward **Top**, **Left**, **Front** or **Perspective**, and release ++space++ to switch to that view. **Top**, **Left** and **Front** are orthographic. ++esc++ closes the menu without switching.

## :lucide-palette: Scene View Background

**Gradient Background**
:   Replaces the Scene view's flat background with a gradient from **Top Color** to **Bottom Color**, behind the grid. It shows in shaded Scene views of URP projects, when the skybox is hidden. **Reset Background Colors** puts the default colors back.

## :wtk-snap: Snapping Settings

How the [snapping](../modelling/transform.md#snapping) highlights look:

**Scene Gizmo Color**
:   The color of snap targets, guide lines and surface direction lines in the Scene view.

**Face Fill Color**
:   The color and opacity of faces highlighted while snapping.

**UV Gizmo Color**
:   The color of the snapping highlights in the [UV View](../modelling/uvs.md).

**Normal Indicator Length**
:   The on-screen length of the line that shows the surface direction of a face or collider while snapping.

## :wtk-splines: Splines

How splines are drawn and edited everywhere, and how often they're redrawn while you drag. See [Spline Settings](../splines/settings.md).

## :wtk-component-spline-spawner: Spawners

**Rebuilds** sets how often [spawners](index.md) place their copies again while you drag a spline. See [Rebuild settings](../getting-started/world-toolkit-window.md#rebuild-settings).

## :lucide-file-cog: Settings files

**Import Settings…**, **Export Settings…** and **Restore Default Settings** for all World Toolkit preferences. See [The World Toolkit Window](../getting-started/world-toolkit-window.md#settings).
