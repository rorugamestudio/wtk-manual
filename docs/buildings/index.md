---
title: Buildings
icon: wtk/buildings
---

# Buildings

The Buildings module generates modular buildings from a **footprint**, the outline of the building on the ground, and a set of **rules** that decide which walls, floors and roof go where. Change the footprint and the building regenerates.

Open it from the :wtk-buildings: **Buildings** module of the [World Toolkit window](../getting-started/world-toolkit-window.md).

## :lucide-puzzle: How a building is put together

:wtk-component-building: **Building**
:   The object in the scene. It has a footprint (a closed spline) and generates the building pieces as its children.

:lucide-boxes: **Volumes**
:   A building is made of one or more volumes: stacked or side-by-side blocks, each with its own footprint, floors, walls and roof. A simple house is one volume. A tower on a podium is two.

:lucide-brick-wall: **Volume Wall** (asset)
:   What goes along each side of a volume: a stack of **rows** made of prefab pieces (windows, doors, wall panels) or procedural shapes (cornices, bands), plus an optional corner.

:lucide-house: **Roof** (asset)
:   The shape on top of a volume.

:lucide-file-box: **Building Rules** (asset)
:   A reusable recipe of volumes, walls, roofs and floor counts. Apply the same rules to many buildings to give them a shared style.

:wtk-component-building-block: **Building Block**
:   A large area that splits itself into lots and fills them with buildings.

## :wtk-buildings: The Buildings panel

**Edit Buildings**
:   Turns on footprint editing in the Scene view. While it's on, the button reads **Exit Editing Buildings**. Hold ++shift++ and click to draw a new building or block, or move the knots of existing footprints. Press ++esc++ to stop editing.

**New Building Defaults**
:   - **Draw Creates** chooses whether drawing a closed footprint creates a single :wtk-component-building: **Building** or a :wtk-component-building-block: **Block** that splits into lots.
    - **Building Rules** are the rules new buildings start from. A new block lists them as its only rules.
    - **Apply to Selected** gives these rules to the selected buildings and regenerates them.

**Selected Building**
:   **Regenerate** builds the selected buildings again. A selected block regenerates all its buildings.
:   **Layout Overlay** shows, on the selected buildings, the wall of each footprint side, the corners and the row of each floor. See [Layout Overlay](buildings-and-volumes.md#layout-overlay).

**Generated Piece Pool**
:   Buildings reuse the objects of their pieces instead of creating new ones every time they regenerate, which keeps regeneration fast. **Current Size** shows how many pieces are waiting in the pool, and **Clear Pool** empties it. You'd only need it to free memory after working on very large buildings.

!!! info "Scene view tools follow the module"
    The floor handles of buildings, the layout overlay and the lot edge handles of blocks only appear while the :wtk-buildings: **Buildings** module is the active one in the World Toolkit window and the Scene view shows gizmos. The floor and lot edge handles also step aside while spline knots are selected.

## :lucide-book-open: In this section

<div class="grid cards" markdown>

-   :wtk-component-building:{ .lg .middle } **[Buildings and Volumes](buildings-and-volumes.md)**

    ---

    Draw a footprint, set up the Building component, its volumes and the Volume Walls that dress each side.

-   :lucide-file-box:{ .lg .middle } **[Building Rules](building-rules.md)**

    ---

    Keep a building setup in an asset, with random floor counts, and reuse it on many buildings.

-   :lucide-house:{ .lg .middle } **[Roofs](roofs.md)**

    ---

    Roof assets: a profile that follows any footprint, presets, materials and the roof checks.

-   :wtk-component-building-block:{ .lg .middle } **[Building Blocks](building-blocks.md)**

    ---

    Fill a whole city block: split an area into lots and generate a building on each one.

-   :lucide-wand-sparkles:{ .lg .middle } **[Style Wizard](style-wizard.md)**

    ---

    Turn a couple of walls, or a folder of prefabs, into a working style in a few clicks.

-   :lucide-settings:{ .lg .middle } **[Buildings Settings](settings.md)**

    ---

    How footprints are drawn in the Scene view and how often buildings rebuild while you drag.

</div>
