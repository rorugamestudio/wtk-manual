---
icon: wtk/select
---

# Selection

To edit a mesh you select its **components**: vertices, edges or faces.

## :lucide-component: Component modes

Pick the component type in the **Modelling Edit** toolbar in the Scene view, or with the keyboard:

| Key | Mode |
|---|---|
| ++1++ | :wtk-select-vertex: Vertices |
| ++2++ | :wtk-select-edge: Edges |
| ++3++ | :wtk-select-face: Faces |

Choosing a component mode switches Unity's tool context to **WTK: Editable Mesh**, where clicks select components instead of objects.

## :wtk-select: Selecting

- **Click** a component to select it. The rest of the selection is cleared.
- **Drag** across empty space to box-select.
- **Click** empty space to deselect the components of the current mode.
- Hold ++shift++ to add to the selection, or ++ctrl++ to remove from it. Both work with clicks, double-clicks and box selection, and with either key held a click on empty space leaves the selection alone.
- With ++alt++ held, clicks go to the Scene view camera instead of selecting.
- ++q++ switches to the :wtk-select: **Select** tool.

When several components are under the cursor, a component on a face turned toward the camera wins over one on a face turned away. After that, the vertex or edge closest to the cursor wins, or the face closest to the camera. Components on faces turned away from the camera can only be picked when **Backface Picking** allows it (see [Modelling Settings](settings.md)). Hidden components can't be selected.

### :lucide-mouse-pointer-click: Double-click

A double-click selects a whole group of components at once. What it selects depends on the component mode, and on whether you clicked another component of the same mesh first:

| Mode | Double-click | Click one, then double-click another |
|---|---|---|
| :wtk-select-vertex: Vertices | Just the vertex | The shortest path of vertices between the two |
| :wtk-select-edge: Edges | The edge loop through the edge. On an open border, the whole border | The edge ring when the two edges are opposite sides of the same face; the part of the ring between them when they lie further apart on the same ring; otherwise the shortest path of edges between them |
| :wtk-select-face: Faces | Every face linked to it | The face loop through both faces when they share an edge; otherwise the shortest path of faces between them |

- The result replaces the selection. Hold ++shift++ to add it to the selection, or ++ctrl++ to remove it, for example ++shift++ + double-click to add a second edge loop.
- **Vertices:** the first vertex must still be selected when you double-click the second one, so hold ++shift++ for the double-click: click the first vertex, then ++shift++ + double-click the second.
- **Edges:** the first edge must be picked with a single click, not a box selection. It doesn't need to stay selected.
- **Faces:** the path starts from the face that was selected on its own, or else from the last face you clicked if it's still selected.
- The first click is remembered until you box-select, click empty space or switch component mode.
- **Path Diagonal** in the **Topology** tab ([Advanced Selection](#advanced-selection)) also applies to vertex and face paths made by double-clicking. Edge paths always follow the edges.

!!! info "Selecting UV islands from the Scene view"
    When the **Modelling Edit** toolbar shows its UV controls and the UV selection mode is **Islands** or **Connected 3D** (see [UVs](uvs.md#selecting-uvs)), clicking a face in the Scene view selects its whole island, and face double-clicks don't apply.

### :lucide-box-select: Box selection rules

The toolbar lets you decide what a box selection includes:

**Edges**
:   :wtk-box-intersect: **Intersecting** (any edge the box touches), :wtk-box-center: **Midpoint** (edges whose middle is inside the box) or :wtk-box-inside: **Fully Inside**.

**Faces**
:   :wtk-box-intersect: **Touching Box**, :wtk-box-center: **Center Only** (faces whose center is inside the box) or :wtk-box-inside: **Fully Inside**.

:wtk-supporting-edges: **Support Edges**, also in the toolbar, lets edge selection pick the support edges made with **Create Support Edge** (see [Cleanup](editing-tools.md#cleanup)). It turns on by itself when you create one.

## :lucide-keyboard: Keyboard shortcuts

| Shortcut | Action |
|---|---|
| ++ctrl+a++ | Select all |
| ++ctrl+i++ | Invert the selection |
| ++shift+period++ | Grow the selection |
| ++shift+comma++ | Shrink the selection |
| ++ctrl+d++ | Duplicate the selected components |
| ++delete++ or ++backspace++ | Delete the selected components |

On macOS, use ++cmd++ instead of ++ctrl++.

## :wtk-selection-add: Advanced Selection

Found in the **Topology** tab:

**Loop**
:   Selects the loop that runs through the current selection.

**Ring**
:   Selects the ring of edges or faces around the current selection.

**Linked**
:   Selects everything connected to the current selection.

**Path**
:   Selects the shortest path between the first and the last selected components. Enable **Path Diagonal** to let the path cross faces diagonally, for straighter paths.

**Grow / Shrink**
:   Expands or reduces the selection by one step.

**Invert**
:   Selects everything that isn't selected, and deselects the rest.

**Similar**
:   Selects components similar to the current selection.

### :lucide-repeat: Convert Selection

**Convert Selection**, in its own section of the **Topology** tab, turns the current selection into another component type, for example from faces to their edges:

**Convert To**
:   The component type you want, out of the two you're not in.

**Approach**
:   Which components count:

    - From faces: **All** of their components, only the **Boundary** of the selected group (inner loops included), or only the **Interior**, leaving the group's boundary out.
    - From vertices or edges: components **Touching** the selection, or only those **Fully Contained** in it (all of their vertices or edges selected). Converting to vertices takes **All**.

Then click **Convert Selection**.

## :wtk-selection-filter: Selection Filter

Selects components by their properties:

| Filter | Selects |
|---|---|
| **Visible** | Components that aren't hidden. |
| **Unselected** | Everything currently not selected. |
| **Manifold** | Components that are part of a closed, clean surface. |
| **Non-Man.** | Non-manifold components, often the source of shading or export problems. |
| **Loose** | Vertices and edges that don't belong to any face. |
| **Boundary** | Components on an open border of the mesh. |
| **Interior** | Components that aren't on a border. |

## :wtk-visibility: Hiding components and objects

Hide parts of a mesh to reach what's behind them. Under **Visibility** in the **Topology** tab, the **Components** card has:

- **Hide Selected Components** and **Hide Unselected Components**.
- **Select *n* Hidden** selects the hidden components of the current type, and **Reveal *n* Selected** shows the selected hidden components again. The buttons count the components they affect, for example **Select 4 Hidden Faces**.

For whole objects, the **Mesh** card has:

- **Hide Mesh** hides or shows the selected objects, the same as the eye icon in the Hierarchy.
- **Isolate** shows only the selected objects.
- **Reveal** shows the other hidden objects again.

## :lucide-scan-eye: X-Ray

The **XR** button in the Modelling Edit toolbar turns on a temporary X-Ray view of the selected meshes. You can see and select components on the far side.
