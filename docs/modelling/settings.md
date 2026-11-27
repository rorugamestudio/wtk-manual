---
icon: lucide/settings
---

# Modelling Settings

The **Settings** tab of the Modelling panel controls how meshes are drawn while you edit them, snapping, where mesh data is stored, and a few behaviors. These are your own preferences: they don't change the meshes. Share them with **Export / Import Settings**, see [The World Toolkit Window](../getting-started/world-toolkit-window.md#settings).

## :lucide-eye: Components Visibility

Which parts of a mesh are drawn in the Scene view, in each situation:

| Column | Draws |
|---|---|
| **Visible** | Unselected components you can see. |
| **Selected** | Selected components, even behind other geometry. |
| **Highlighted** | The component under the cursor (preselection). |
| **Occluded** | Components hidden behind other geometry. |
| **Backface** | Components on faces turned away from the camera. |

Each row (**Vertex**, **Edge**, **Face**) can turn every column on or off. **Occluded Opacity** and **Backface Opacity** fade the occluded and backfacing components. The other modes' components show too, in their **Inactive** colors and without the selection: vertices in edge and face modes, edges in vertex and face modes, and face centers in vertex and edge modes. Each follows its own row. In face mode, with the **Face** row's backface column on, the faces turned away from the camera are also filled with the **Backfaced Faces** color.

**Show Face Centers**
:   Draws a dot in the middle of each face, in every component mode. Outside face mode the dots take the **Inactive Faces** color.

**Selected Face Fill Type - Topology**, **Selected Face Fill Type - UV**, **Preview New Face Fill Type** and **XRay Fill Type**
:   How selected faces, faces previewed by a tool and X-Ray meshes are filled in the Scene view: with **Transparency** or **Dithered**.

**Edge Draw Mode**
:   Draws each kind of edge **Solid** or **Dashed**: **Edges - Topology** and **Edges - UV**, the mesh's edges in every component mode (the ones sized by **Non-interactive** and **Interactive Thickness**), while you edit topology or while the **UV** tab is active; **UV Seams**, while the **UV** tab is active; and **Border Edges**, while **Border Edge Thickness** is above 0. Selected and highlighted edges keep the mode of their kind. Dashes grow with the line thickness. Edges and UV seams are dashed by default, border edges solid.

## :lucide-palette: Components Colors

| Color | Used for |
|---|---|
| **Selected Faces — Topology** / **Selected Faces — UV** | Selected faces in the Scene view. The alpha sets the transparency or the dither coverage, depending on the fill type. While you edit UVs, the centers of selected faces take the UV color too. |
| **Backfaced Faces** | The fill of faces turned away from the camera, drawn in face mode while the **Face** row's backface column is on. The alpha sets their transparency; **Backface Opacity** doesn't change it. |
| **UV Tile** | The outline of the UV tile drawn in the Scene view. |
| **Preview New Faces** | Faces created or rebuilt by a tool's preview. |
| **UV Seams** | The UV seams in the Scene view, while the **UV** tab is active. |
| **Selectable Vertices**, **Selectable Edges**, **Selectable Faces** | Unselected components you can pick. |
| **Inactive Vertices**, **Inactive Edges**, **Inactive Faces** | Components outside their own component mode, with their opacity: vertices in edge and face modes, edges in vertex and face modes, face centers in vertex and edge modes. Vertices without faces keep the **Loose Vertices** color. |
| **Loose Vertices** | Vertices that don't belong to any face, and their crosses. |
| **Selected Object Wireframe**, **Editable Primitive Wireframe**, **Boolean Stack Wireframe** | The wireframe of selected Editable Meshes, Editable Primitives and Boolean Stacks while you're outside the editing context. |

## :lucide-ruler: Components Sizes

Sizes in screen pixels, so they stay readable at any zoom:

**Vertex**
:   **Unselected Vertex Size**, **Selected Vertex Size**, **Preselection Vertex Size**, and **Loose Vertex Cross Size** for the cross drawn on vertices without faces.

**Edges**
:   **Non-interactive Thickness** (in vertex and face modes) and **Interactive Thickness** (in edge mode); **UV Seam Thickness** (0 hides the seams); **Border Edge Thickness** for the border edges of the mesh and of each material (0 uses Unity's own edge drawing); **Selected / Preselection Thickness**; and **Snap Edge Candidate Thickness** for edges highlighted while snapping.

**Object**
:   **Object Pivot Size**, the size of the object pivot indicator.

## :lucide-layers-2: Components Offsets

Small offsets, in pixels, that lift highlights off the surface so they don't flicker into it: **Face Highlight Offset (px)**, **Vertex Overlay Offset (px)**, **Edge Overlay Offset (px)** and **Face Center Offset (px)**. Raise them if highlights disappear into the mesh.

## :wtk-snap: Snapping

The snapping options, in two groups: **Scene View** and **UV View**. They're the same options as in the Scene view's **Snapping** overlay; see [Snapping](transform.md#snapping) for what each one does. The :wtk-snap-overlay: button in the section's header shows or hides that overlay.

## :lucide-app-window: Scene View Overlays

**Show Mesh Stats**
:   Shows the World Toolkit **Mesh Stats** overlay in the Scene view: counts of editable meshes, vertices, edges, faces, triangles, UV corners and UV nodes (total, selected and hidden), and of non-manifold and loose components.

**Show Performance Stats**
:   Shows the **Performance Stats** overlay: the frame rate (**FPS** and its **1%** low) and the CPU and GPU frame times.

**Show Context Tips**
:   Shows the World Toolkit tips panel in the Scene view.

## :lucide-mouse-pointer-click: Misc

**Backface Picking**
:   Whether you can pick components on faces turned away from the camera: **Off**, following the visibility settings (**Respect Component Visibility**), or always (**Always True**).

**Show Face Orientation**
:   Draws faces blue from the front and red from the back. Quick way to spot flipped faces.

## :lucide-hard-drive: Scene Meshes

Where the editable mesh data is stored.

**Auto Externalize Meshes**
:   When a scene is saved, moves the editable mesh data out of the scene into `.emesh` files in a `<SceneName>_Meshes` folder next to it. Keeps scene files small.

**Auto Cleanup Unused Meshes**
:   When a scene is saved, deletes the `.emesh` files in that folder that no scene or prefab uses anymore, such as the meshes of deleted objects.

**Externalize Now**, **Internalize Now** and **Cleanup Unused Now** do the same on demand for the loaded scenes. **Internalize Now** asks for confirmation, moves the data back into the scenes and turns **Auto Externalize Meshes** off, so the next save doesn't move it out again.

**Cleanup Unused Now** lists the files it will delete, folder by folder, and asks before deleting them; the deleted files are listed in the Console. A scene with unsaved changes still counts what its saved file uses, so the cleanup first offers to save those scenes. Files that only an unsaved scene's saved file still uses are kept until that scene is saved.

**Open Outliner** opens the [EditableMesh Outliner](editable-meshes.md#editablemesh-outliner), a table of every Editable Mesh in the open scenes and where its data is stored.

## :wtk-uv-view: UV View

Settings of the [UV View](uvs.md#the-uv-view):

**Dashed Island Borders** and **Show Face Centers**
:   Draw the borders of UV islands as dashed lines, and a dot in the middle of each face.

**Auto Open UV View**
:   Opens the UV View every time you switch to the **UV** tab, and when a UV action runs while it's closed. Off, UV actions leave it closed.

**Texture Opacity**
:   The opacity of the material's texture behind the UVs.

**Face Selection** and **Edge Selection**
:   The box selection rules for UV faces and edges.

**Component Colors** and **Component Sizes**
:   The colors of the grid, axes, edges, island borders, selection, hover and faces (flipped faces have their own), and the thickness of island borders and of normal, selected, hovered and related edges.

## :lucide-timer: Rebuilds

How often Boolean Stacks, the Mesh Colliders of edited meshes, Surface primitives whose spline you're dragging, and [lofts](loft.md) rebuild while you drag. See [Rebuild settings](../getting-started/world-toolkit-window.md#rebuild-settings).
