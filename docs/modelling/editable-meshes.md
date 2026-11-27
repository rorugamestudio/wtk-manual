---
icon: wtk/component-editable-mesh
---

# Editable Meshes

Every mesh you edit with the Modelling tools has an :wtk-component-editable-mesh: **Editable Mesh** component. It stores the mesh as faces you can edit (quads and polygons, not only triangles) and rebuilds the Unity mesh whenever you change it.

## :lucide-circle-plus: Getting an Editable Mesh

There are three ways:

- **Create a primitive** from the Modelling **Create** tab, or from **GameObject > World Toolkit > Modelling**. See [Primitives](primitives.md).
- **Convert an existing mesh.** Right-click the **Mesh Filter** component of any object and choose **Convert to WTK Mesh**, or select the object and click **Convert to WTK Mesh** at the top of the **Topology** tab. With a primitive or a Boolean Stack selected, the same button reads **Make Editable**.
- **Add the component** manually: **Add Component > World Toolkit > Modelling > Editable Mesh**.

!!! note
    Skinned meshes and meshes with blend shapes can't be converted. Bake them to a static mesh first.

## :lucide-sliders-horizontal: The inspector

**Source Asset**
:   The `.emesh` asset that holds the mesh data, when it's stored outside the scene. Empty when the data is stored in the component. See [Mesh data and `.emesh` files](#mesh-data-and-emesh-files).

Meshes made by a generator (a primitive, a [Boolean Stack](booleans.md) or a [decal](decals.md)) say so in the inspector: *This mesh is controlled by its generator. Use Make Editable to edit its topology.*

Select several Editable Meshes to change their settings together. A setting they don't share shows a dash (—) until you give it a value, and changing one axis of **Auto UV Scale** keeps each mesh's other axis. A setting that one of the selected meshes can't take, such as **Auto UV** on a primitive, stays locked for the whole selection. Turning **Auto UV** on asks once for all the meshes that would lose their manual UVs, and **Undo** reverts the change on all of them in one step.

### :lucide-blend: Shading

**Auto Smooth**
:   Smooths the shading across edges whose faces meet at an angle up to **Auto Smooth Angle**, and keeps sharper edges hard. Edges you marked hard stay hard either way (see [Normals and shading](editing-tools.md#normals-and-shading)).

**Auto Smooth Angle**
:   The angle limit, from 0 to 180 degrees. 30 by default.

### :lucide-grid-3x3: UV options

**Auto UV**
:   Generates UVs automatically from the mesh geometry.

**Auto UV Mode**
:   Use local-space or world-space coordinates for the automatic UVs. World space keeps texture scale consistent across objects of different sizes.

**Auto Bake Lightmap UVs**
:   Generates lightmap UVs (UV1) automatically. Unity's unwrapper takes a while on dense meshes, so while a mesh is being rebuilt over and over (a loft as you edit it), they wait until you stop: then they bake as a **Lightmap UVs** task in **Background Tasks**, whose **Cancel** stops after the mesh being baked. Meshes over 20,000 faces wait for the scene to be saved instead. Pending meshes always bake before their scene is saved and before lighting is baked.

See [UVs](uvs.md) for manual UV editing.

## :wtk-component-editable-primitive: Editable Primitives

Primitives keep their parameters in an :wtk-component-editable-primitive: **Editable Primitive** component, next to the Editable Mesh. Its inspector shows the parameters of the primitive's **Kind**: sizes, segments, the vertex color, the UV offset, scale and rotation, and the spline settings of stairs, tubes, surfaces and [lofts](loft.md). Changing a value rebuilds the mesh right away: a typed value applies when you press ++enter++ or leave the field, and a slider applies while you drag it. Right-click the component and choose **Force Rebake** to rebuild it from its parameters on demand.

Cylinders, cones, spheres and tori also have a **Pivot**: **Base** puts the pivot on the base they stand on, **Center** in the middle of their height. Changing it in the inspector moves the pivot, not the primitive. Primitives drawn with [Create from Center](primitives.md#creation-options) start with **Center**.

While a mesh is controlled by its primitive, its vertices, edges and faces can't be edited directly. Click **Make Editable** at the top of the **Topology** tab to turn it into a regular Editable Mesh and edit the topology. After that, the primitive parameters are gone.

## :lucide-combine: Combining and splitting objects

In the **Topology** tab, under **Modify**:

- :wtk-modify-merge-meshes: **Merge Meshes** merges the selected Editable Mesh objects into the active one.
- :wtk-modify-separate: **Separate** moves the selected faces into a new Editable Mesh object.

## :lucide-file-box: Mesh data and .emesh files

An Editable Mesh stores its data in the component, inside the scene, unless it has a **Source Asset**: an `.emesh` file in the project. Right-click the Editable Mesh component for the options:

**Export Mesh... / Import Mesh...**
:   Save the editable topology to a file, or load it back.

**Export to .OBJ...**
:   Save the mesh as a Wavefront `.obj` file for other 3D applications. Faces stay as you modelled them: quads and polygons aren't triangulated and neighbouring faces keep sharing their vertices, with the UVs and normals of each face corner and one material group per material slot. Hidden faces are exported too, and loose edges are kept as lines. Only faces with holes are written as triangles, because the format has no holes. The file is in the object's local space, and no `.mtl` file is written.

**Externalize To .emesh...**
:   Store the mesh data in a separate `.emesh` asset instead of inside the scene. Useful for large meshes, or to reuse the same mesh in several places.

**Embed Data Into Component**
:   The opposite: move the data from the `.emesh` asset back into the component.

To create an object from an `.emesh` asset, right-click the asset in the Project window and choose **Create EditableMesh From .emesh**.

To move the data of every mesh in a scene out of the scene file automatically, see [Scene Meshes](settings.md#scene-meshes) in the Modelling settings.

### :lucide-package: Prefabs

When you create a prefab asset from objects whose Editable Meshes store their data in the component, World Toolkit moves each mesh's data into an `.emesh` file in a `<PrefabName>_EMeshes` folder next to the prefab, and links the mesh to it. This runs as a background task, with its progress in Unity's status bar.

!!! info "When `.emesh` files are written"
    Edits to a mesh that uses an `.emesh` asset are written to the file when you save the scene. Applying a prefab instance's overrides also writes them first, so the prefab's **Mesh Filter** keeps using the mesh imported from the `.emesh` file.

## :wtk-component-editable-mesh: EditableMesh Outliner

The **EditableMesh Outliner** lists every Editable Mesh of the open scenes in one table, to see where each one keeps its data and what needs attention. Open it from **Window > World Toolkit > EditableMesh Outliner**, or with **Open Outliner** under [Scene Meshes](settings.md#scene-meshes) in the Modelling settings.

Each row shows the object's scene, its **Storage** (in the scene or prefab, an `.emesh` in the scene's mesh folder, in another scene's folder, elsewhere in the project, or a missing source), its **Source File** and its size, how many objects use the same `.emesh`, its **Prefab**, what its **Mesh Filter** renders, the generator that made it (roads, junctions, decals, buildings), its vertex and face counts, and **Notes** about anything to look at: a missing source or prefab, unsaved `.emesh` edits, shared sources, prefab overrides. Click a **Source File** or **Prefab** cell to ping it in the Project window.

**Show** filters the rows by storage, or to prefab instances, shared sources or rows with notes, and the search field by object, scene, source file or prefab name. **Scene Meshes** runs **Externalize Now**, **Internalize Now** and **Cleanup Unused** on the loaded scenes. The status bar counts the meshes by storage and what each scene's mesh folder holds.

Rows follow the selection both ways. Double-click a row, or press ++f++, to frame it in the Scene view; right-click a row to ping or reveal its source file, select every object that uses it, or ping its prefab.
