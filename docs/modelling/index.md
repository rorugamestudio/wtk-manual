---
icon: wtk/modelling
---

# Modelling

The Modelling module lets you build and edit meshes directly in the Scene view, without leaving Unity. It's meant for blockouts, level geometry, props and any mesh you'd like to tweak in place.

Open it from the **Modelling** tab of the [World Toolkit window](../getting-started/world-toolkit-window.md).

## :lucide-panels-top-left: The Modelling tabs

The Modelling panel has four tabs:

:wtk-create-cube: **Create**
:   Create [primitives](primitives.md) (cubes, cylinders, stairs and more) and [Boolean Stacks](booleans.md).

:wtk-topology: **Topology**
:   Edit the selected mesh: [select](selection.md) vertices, edges and faces, [transform](transform.md) them and use the [editing tools](editing-tools.md). It also holds vertex color painting, materials, normals and cleanup tools.

:wtk-uv-grid: **UV**
:   Edit [texture coordinates](uvs.md).

:lucide-settings: **Settings**
:   Colors, sizes and visibility of everything Modelling draws in the Scene view, snapping, and a few behavior options. See [Modelling Settings](settings.md).

The panel follows what you're doing: picking a primitive switches to **Create**, and starting to edit a mesh switches to **Topology**.

## :wtk-modelling-context: Editing in the Scene view

When you edit a mesh's vertices, edges or faces, Unity switches its **Tool Context** to **WTK: Editable Mesh**. A **Modelling Edit** toolbar appears in the Scene view with a :wtk-topology: Topology / :wtk-uv-grid: UV switch, the component modes (vertices, edges, faces), the selection tool, vertex painting and X-Ray.

Many tools also show an options panel in the Scene view (for example **Extrude Options**), where you tweak the operation and then press **Apply** or **Cancel**.

!!! tip "Every tool, one right-click away"
    While editing a mesh, **right-click** in the Scene view (without dragging) to open **Modelling Tools**, a searchable list of every tool. See [Editing Tools](editing-tools.md#modelling-tools-search).

## :lucide-book-open: In this section

<div class="grid cards" markdown>

-   :wtk-component-editable-mesh:{ .lg .middle } **[Editable Meshes](editable-meshes.md)**

    ---

    The component behind every mesh you edit: getting one, its inspector, primitives and `.emesh` files.

-   :wtk-create-cube:{ .lg .middle } **[Primitives](primitives.md)**

    ---

    Draw cubes, cylinders, arches and other shapes in the Scene view, or build stairs, tubes and surfaces from splines.

-   :wtk-select:{ .lg .middle } **[Selection](selection.md)**

    ---

    Pick vertices, edges and faces, grow and filter the selection, and hide what's in the way.

-   :wtk-transform-options:{ .lg .middle } **[Transform](transform.md)**

    ---

    Move, rotate and scale components, set pivots, type exact values and snap.

-   :wtk-modify-extrude:{ .lg .middle } **[Editing Tools](editing-tools.md)**

    ---

    Extrude, bevel, inset, knife and every other topology, shading, cleanup and material tool.

-   :wtk-uv-view:{ .lg .middle } **[UVs](uvs.md)**

    ---

    Automatic UVs, the UV View, seams, layout, projection and lightmap UVs.

-   :wtk-component-boolean-stack:{ .lg .middle } **[Booleans](booleans.md)**

    ---

    Combine and cut meshes non-destructively with Boolean Stacks.

-   :wtk-component-mesh-decal-area:{ .lg .middle } **[Decals](decals.md)**

    ---

    Painted lines and patterned areas that follow splines and the surface below them.

-   :lucide-settings:{ .lg .middle } **[Modelling Settings](settings.md)**

    ---

    How meshes are drawn while you edit, snapping, where mesh data is stored, and rebuild timing.

</div>
