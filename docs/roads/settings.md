---
icon: lucide/settings
---

# Roads Settings

The **Settings** tab of the Roads panel: how roads are drawn in the Scene view, and when they rebuild.

!!! info "Looking for junction defaults?"
    The starting values of new junctions, and the intersection settings shared by all junctions, are part of the [Road Rules](creating-roads.md#road-rules) asset set under **New Roads**. See [Where junction settings come from](junctions.md#where-junction-settings-come-from).

## :lucide-sliders-horizontal: General

**Show Road Names**
:   Writes each road's name along it in the Scene view, like the street names on a map. The text keeps the same size on screen and follows the road's line. As you zoom in, long roads repeat their name, and when names would overlap, the longer road keeps its name. A road shows its **Road Name**, or its GameObject name when **Road Name** is empty (see [Road settings](creating-roads.md#road-settings)). Names hide with the Scene view's **Gizmos** and with hidden or inactive roads.

## :lucide-palette: Lane Guides

**Show for Selected Only**
:   Draws the lane guide dotted lines and junction conversion previews only for the currently selected road or junction.

**Lanes**
:   The color of the lane guides drawn over roads in the Scene view.

**Conversions**
:   The color of the lane guides drawn through junctions, which connect the lanes of different roads.

## :wtk-splines: Splines

**Line**, **Closed Spline Fill** and **Line Thickness** of road splines in the Scene view.

## :lucide-refresh-cw: Rebuilds

How often roads and junctions rebuild while you drag. See [Rebuild settings](../getting-started/world-toolkit-window.md#rebuild-settings).
