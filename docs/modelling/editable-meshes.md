# Editable Meshes

Every mesh you edit with the Modelling tools has an :wtk-component-editable-mesh: **Editable Mesh** component. It stores the mesh as faces you can edit (quads and polygons, not only triangles) and rebuilds the Unity mesh whenever you change it.

## Getting an Editable Mesh

There are three ways:

- **Create a primitive** from the Modelling **Create** tab. See [Primitives](primitives.md).
- **Convert an existing mesh.** Right-click the **Mesh Filter** component of any object and choose **Make Editable**.
- **Add the component** manually: **Add Component > World Toolkit > Modelling > Editable Mesh**.

The **Open WTK Modelling** button in the Editable Mesh inspector opens the Modelling panel.

## Editable Primitives

Primitives keep their parameters (size, segments, and so on) in an :wtk-component-editable-primitive: **Editable Primitive** component, so you can still change them after creation from the **Topology** tab.

While a mesh is controlled by its primitive, its vertices, edges and faces can't be edited directly. Use **Make Editable** to turn it into a regular Editable Mesh and edit the topology. After that, the primitive parameters are gone.

## UV options

**Auto UV**
:   Generates UVs automatically from the mesh geometry.

**Auto UV Mode**
:   Use local-space or world-space coordinates for the automatic UVs. World space keeps texture scale consistent across objects of different sizes.

**Auto Bake Lightmap UVs**
:   Generates lightmap UVs (UV1) automatically.

See [UVs](uvs.md) for manual UV editing.

## Combining and splitting objects

In the **Topology** tab, under **Modify**:

- :wtk-modify-merge-meshes: **Merge Meshes** merges the selected Editable Mesh objects into the active one.
- :wtk-modify-separate: **Separate** moves the selected faces into a new Editable Mesh object.

## Import and export

Right-click the Editable Mesh component for more options:

**Export Mesh… / Import Mesh…**
:   Save the editable topology to a file, or load it back.

**Externalize To .emesh…**
:   Store the mesh data in a separate `.emesh` asset instead of inside the scene. Useful for large meshes, or to reuse the same mesh in several places.

**Embed Data Into Component**
:   The opposite: move the data from the `.emesh` asset back into the component.

To create an object from an `.emesh` asset, right-click the asset in the Project window and choose **Create EditableMesh From .emesh**.
