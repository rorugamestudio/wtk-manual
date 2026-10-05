# Modelling Settings

The **Settings** tab of the Modelling panel controls how meshes are drawn while you edit them, and a few behaviors. These are your own preferences: they don't change the meshes. Share them with **Export / Import Settings**, see [The World Toolkit Window](../getting-started/world-toolkit-window.md#settings).

## Components Visibility

Which parts of a mesh are drawn in the Scene view, in each situation:

| Column | Draws |
|---|---|
| **Visible** | Unselected components you can see. |
| **Selected** | Selected components, even behind other geometry. |
| **Highlighted** | The component under the cursor (preselection). |
| **Occluded** | Components hidden behind other geometry. |
| **Backface** | Components on faces turned away from the camera. |

Each row (**Vertex**, **Edge**, **Face**) can turn every column on or off. **Occluded Opacity** and **Backface Opacity** fade the occluded and backfacing components.

**Show Face Centers**
:   Draws a dot in the middle of each face.

**Selected Face Fill Type** (Topology and UV), **Preview New Face Fill Type**, **XRay Fill Type**
:   How faces are filled in the Scene view: with transparency or with a dither pattern.

## Components Colors

Colors for every component state: **Selectable Vertices / Edges / Faces**, **Inactive** components (those outside the current component mode), **Loose Vertices**, **UV Seams**, and the wireframes of selected **Editable Meshes**, **Editable Primitives** and **Boolean Stacks** while you're outside the editing context.

## Components Sizes

Sizes in screen pixels, so they stay readable at any zoom:

- **Vertex**: unselected, selected and preselection sizes, and the cross drawn on loose vertices.
- **Edges**: thickness outside and inside Edge mode, UV seam and border edge thickness, selection and preselection thickness, and snap candidate thickness.
- **Object**: the size of the object pivot indicator.

## Components Offsets

Small offsets, in pixels, that lift vertices, edges, face centers and face highlights off the surface so they don't flicker into it. Raise them if highlights disappear into the mesh.

## Scene View Overlays

**Show Mesh Stats** and **Show Performance Stats**
:   Show Unity's own Mesh Stats and Performance Stats overlays.

**Show Context Tips**
:   Shows the World Toolkit tips panel in the Scene view.

## Misc

**Backface Picking**
:   Whether you can pick components on faces turned away from the camera: **Off**, following the visibility settings (**Respect Component Visibility**), or **Always**.

**Show Face Orientation**
:   Draws faces blue from the front and red from the back. Quick way to spot flipped faces.

## Scene Meshes

Where the editable mesh data is stored.

**Auto Externalize Meshes**
:   When a scene is saved, moves the editable mesh data out of the scene into `.emesh` files in a `<SceneName>` meshes folder next to it. Keeps scene files small.

**Auto Cleanup Unused Meshes**
:   When a scene is saved, deletes `.emesh` files in that folder that nothing uses anymore, such as the meshes of deleted objects.

**Externalize Now**, **Internalize Now** and **Cleanup Unused Now** do the same on demand for the loaded scenes. **Internalize Now** moves the data back into the scenes and turns **Auto Externalize Meshes** off.

## UV View

Settings of the [UV View](uvs.md#the-uv-view): face centers, **Auto Open UV View**, **Island Border** thickness, **Texture Opacity**, box selection rules for UV faces and edges, and component colors and sizes.

## Rebuilds

How often meshes rebuild while you drag. See [Rebuild settings](../getting-started/world-toolkit-window.md#rebuild-settings).
