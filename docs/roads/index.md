---
title: Roads
icon: wtk/roads
---

# Roads

The Roads module builds road meshes from splines. You draw where the road goes, and World Toolkit generates the surface, lanes, sidewalks and curbs, plus the junctions where roads meet.

Open it from the **Roads** tab of the [World Toolkit window](../getting-started/world-toolkit-window.md).

## :lucide-blocks: The building blocks

:wtk-component-editable-mesh-road: **Road** (Editable Mesh Road component)
:   One road, following a [spline](../splines/index.md). Its cross-section is made of **layers**: the driving lanes, sidewalks, curbs and so on.

:lucide-pen-tool: **Road Profile** (asset)
:   The 2D shape of one layer, like the shape of a curb or a sidewalk. See [Profiles and Layers](profiles-and-layers.md).

:lucide-file-box: **Road Rules** (asset)
:   A reusable road setup: layers, generation settings and the defaults for junctions. New roads use it, and a road that references it is rebuilt whenever the asset changes. See [Road Rules](creating-roads.md#road-rules).

:wtk-component-editable-mesh-junction: **Junction** (Editable Mesh Junction component)
:   The generated mesh where two or more roads meet. See [Junctions](junctions.md).

:wtk-component-road-anchor-connection: **Road Anchor Connection**
:   A road that attaches to the side of another road without a full junction. See [Anchored Connections](anchored-connections.md).

:wtk-component-city-block-floor: **City Block Floor**
:   Fills the area enclosed by roads, for example a block's ground. See [City Blocks](city-blocks.md).

## :wtk-roads: The Roads panel

**Points**
:   **Edit Road Points** turns on road editing in the Scene view; while it's on, the button reads **Exit Editing Road Points**. :wtk-component-editable-mesh-road: **Create Roads/Junctions from Selection** turns the selected spline containers into roads, and their linked knots into junctions.

**New Roads**
:   The **Road Rules** used for the roads you draw or convert, and for new junctions. **Apply to Selected** applies these rules to the selected roads and junctions.

**City Block Floors**
:   :wtk-component-city-block-floor: **Create City Block Floors**, and the settings given to new floors.

The **Settings** tab sets the lane guides and their colors, how road splines are drawn in the Scene view, and when roads rebuild. See [Roads Settings](settings.md).

## :lucide-book-open: In this section

<div class="grid cards" markdown>

-   :wtk-component-editable-mesh-road:{ .lg .middle } **[Creating Roads](creating-roads.md)**

    ---

    Draw and edit roads, set up how each road is generated, and reuse a setup with Road Rules.

-   :lucide-layers:{ .lg .middle } **[Profiles and Layers](profiles-and-layers.md)**

    ---

    Build a road's cross-section from layers, the 2D profiles that shape them and the road materials.

-   :wtk-component-editable-mesh-junction:{ .lg .middle } **[Junctions](junctions.md)**

    ---

    How junctions join roads, round their corners and paint markings, and where their settings come from.

-   :wtk-component-road-anchor-connection:{ .lg .middle } **[Anchored Connections](anchored-connections.md)**

    ---

    Attach the end of a road to the side of another road or junction, for driveways and entrances.

-   :wtk-component-city-block-floor:{ .lg .middle } **[City Blocks](city-blocks.md)**

    ---

    Fill the closed areas between roads with generated floors that follow the roads around them.

-   :lucide-settings:{ .lg .middle } **[Roads Settings](settings.md)**

    ---

    Scene view colors, how road splines are drawn and when roads rebuild.

</div>
