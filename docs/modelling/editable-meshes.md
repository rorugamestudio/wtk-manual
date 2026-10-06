---
icon: wtk/component-editable-mesh
---

# Editable Meshes

Every mesh you edit with the Modelling tools has an :wtk-component-editable-mesh: **Editable Mesh** component. It stores the mesh as faces you can edit (quads and polygons, not only triangles) and rebuilds the Unity mesh whenever you change it.

## :lucide-circle-plus: Getting an Editable Mesh

There are three ways:

- **Create a primitive** from the Modelling **Create** tab, or from **GameObject > World Toolkit > Modelling**. See [Primitives](primitives.md).
- **Convert an existing mesh.** Right-click the **Mesh Filter** component of any object and choose **Make Editable**, or select the object and click **Make Editable** at the top of the **Topology** tab.
- **Add the component** manually: **Add Component > World Toolkit > Modelling > Editable Mesh**.

!!! note
    Skinned meshes and meshes with blend shapes can't be converted. Bake them to a static mesh first.

## :lucide-sliders-horizontal: The inspector

**Source Asset**
:   The `.emesh` asset that holds the mesh data, when it's stored outside the scene. Empty when the data is stored in the component. See [Mesh data and `.emesh` files](#mesh-data-and-emesh-files).

Meshes made by a generator (a primitive, a [Boolean Stack](booleans.md) or a [decal](decals.md)) say so in the inspector: *This mesh is controlled by its generator. Use Make Editable to edit its topology.*

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
:   Generates lightmap UVs (UV1) automatically.

See [UVs](uvs.md) for manual UV editing.

## :wtk-component-editable-primitive: Editable Primitives

Primitives keep their parameters in an :wtk-component-editable-primitive: **Editable Primitive** component, next to the Editable Mesh. Its inspector shows the parameters of the primitive's **Kind**: sizes, segments, the vertex color, the UV offset, scale and rotation, and the spline settings of stairs, tubes and surfaces. Changing a value rebuilds the mesh right away. Right-click the component and choose **Force Rebake** to rebuild it from its parameters on demand.

While a mesh is controlled by its primitive, its vertices, edges and faces can't be edited directly. Click **Make Editable** at the top of the **Topology** tab to turn it into a regular Editable Mesh and edit the topology. After that, the primitive parameters are gone.

## :lucide-combine: Combining and splitting objects

In the **Topology** tab, under **Modify**:

- :wtk-modify-merge-meshes: **Merge Meshes** merges the selected Editable Mesh objects into the active one.
- :wtk-modify-separate: **Separate** moves the selected faces into a new Editable Mesh object.

## :lucide-file-box: Mesh data and .emesh files

An Editable Mesh stores its data in the component, inside the scene, unless it has a **Source Asset**: an `.emesh` file in the project. Right-click the Editable Mesh component for the options:

**Export Mesh... / Import Mesh...**
:   Save the editable topology to a file, or load it back.

**Externalize To .emesh...**
:   Store the mesh data in a separate `.emesh` asset instead of inside the scene. Useful for large meshes, or to reuse the same mesh in several places.

**Embed Data Into Component**
:   The opposite: move the data from the `.emesh` asset back into the component.

To create an object from an `.emesh` asset, right-click the asset in the Project window and choose **Create EditableMesh From .emesh**.

To move the data of every mesh in a scene out of the scene file automatically, see [Scene Meshes](settings.md#scene-meshes) in the Modelling settings.

### :lucide-package: Prefabs

When you create a prefab asset from objects whose Editable Meshes store their data in the component, World Toolkit moves each mesh's data into an `.emesh` file in a `<PrefabName>_EditableMeshes` folder next to the prefab, and links the mesh to it. This runs as a background task, with its progress in Unity's status bar.

!!! info "When `.emesh` files are written"
    Edits to a mesh that uses an `.emesh` asset are written to the file when you save the scene. Applying a prefab instance's overrides also writes them first, so the prefab's **Mesh Filter** keeps using the mesh imported from the `.emesh` file.
