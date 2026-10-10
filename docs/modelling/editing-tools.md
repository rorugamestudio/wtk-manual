---
icon: wtk/modify-extrude
---

# Editing Tools

All editing tools live in the **Topology** tab of the Modelling panel. They act on the current [selection](selection.md).

Many of them also work with whole Editable Mesh objects selected, outside component editing: they then act on every visible component of the mesh. For example, **Extrude** and **Inset** use all the faces, **Bevel** all the edges, and **Fill**, **Grid Fill** and **Bridge** the open borders of the mesh. The shading buttons shade the whole mesh.

!!! tip "Quick tool search"
    **Right-click** in the Scene view (without dragging) while editing a mesh to open **Modelling Tools**, a searchable list of every tool. It shows your **Recent** and **Pinned** tools at the top. See [Modelling Tools search](#modelling-tools-search).

## :lucide-sliders-horizontal: Tools with options

These tools show an options panel in the Scene view. Adjust the options, check the preview, then press **Apply**, or **Cancel** to leave without changing anything. The **...** button next to each tool in the panel shows or hides its Scene view options.

### :wtk-modify-extrude: Extrude

Pulls the selected faces or edges out to create new geometry.

**Distance**
:   How far to extrude.

**Keep faces together**
:   Extrudes connected faces as one region. Turn it off to extrude each face separately.

**Follow normals average**
:   Moves the extruded geometry along the average direction of the faces.

**Shell**
:   Keeps the original faces, flipped, as an inner cap. Useful to give thickness to an open surface.

**Merge on Contact**
:   On by default. Stops the extrusion at the first surface of the same mesh it reaches and merges with it: the covered part of that surface is removed and the edges are welded, opening a passage. Useful for windows and doors through walls.

**Hard Edge Angle**
:   Edges created by the extrusion are marked hard (sharp shading) when the angle between their faces reaches this value. Flatter edges stay smooth.

!!! tip
    In edge or face mode, you can also extrude by holding ++shift++ when you start dragging a move, rotate or scale handle. See [Transform](transform.md).

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/smart-extrude.webp">
    <source src="../assets/videos/modelling/smart-extrude.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing a rectangle on a wall with Shapes, then extruding it inwards to open a doorway.</figcaption>
</figure>

### :wtk-modify-inset: Inset

Creates a smaller copy of the selected faces inside them, for panels, windows and borders.

**Inset Mode**
:   **Region** insets the selection as one area. **Individual** insets each face on its own.

**Distance**
:   How far inward the new edges are.

### :wtk-modify-bevel: Bevel

Rounds or cuts the selected edges or vertices.

**Distance**
:   The width of the bevel.

**Segments**
:   How many faces make up the bevel. Use 1 for a flat cut, more for a rounded edge.

**Profile** and **Profile Shape**
:   The curvature of the bevel.

**Junctions**
:   How corners where several beveled edges meet are filled: with segmented faces (**Segmented**) or with a single polygon (**Ngon**).

### :wtk-modify-bridge: Bridge

Connects two selected face groups, edge chains or edge loops with new faces. Handy for joining two parts of a mesh or closing a gap between them.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/merge-and-bridge.webp">
    <source src="../assets/videos/modelling/merge-and-bridge.mp4" type="video/mp4">
  </video>
  <figcaption>Merging two objects with Merge Meshes, then bridging their faces.</figcaption>
</figure>

### :wtk-modify-merge: Merge

Merges the selected vertices.

**Variant**
:   - **Center**: all selected vertices become one, at their center.
    - **Cursor**: all selected vertices become one, at the custom pivot position (see [Transform](transform.md#custom-pivots)).
    - **Collapse**: each connected group of selected vertices becomes its own vertex.
    - **Distance**: only selected vertices closer than **Distance** are merged.

### :wtk-modify-knife: Knife

Cuts new edges across faces by hand.

- **Click** on surfaces or edges to place cut points.
- Hold ++shift++ over an edge for a **loop cut** all around the mesh, then click to apply.
- Press ++enter++ or **right-click** to apply the cut.
- ++backspace++ removes the last point, ++esc++ cancels.

**Selected Only**
:   Only cuts the selected edges or faces.

**Step**
:   Snaps cut points along edges in steps. 0 is continuous; 0.25 snaps to quarters of the edge.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/knife.webp">
    <source src="../assets/videos/modelling/knife.mp4" type="video/mp4">
  </video>
  <figcaption>Cutting faces by hand and adding loop cuts with the Knife.</figcaption>
</figure>

### :wtk-modify-slide: Slide

Slides the selected vertices or edges along the surrounding edges, without changing the shape of the surface. **Step** snaps the slide amount.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/edge-slide.webp">
    <source src="../assets/videos/modelling/edge-slide.mp4" type="video/mp4">
  </video>
  <figcaption>Sliding an edge along its neighbours.</figcaption>
</figure>

### :wtk-modify-subdivide: Subdivide

Splits the selected faces or edges. **Cuts** sets how many times.

## :lucide-waves: Deformation

Clicking one of these buttons applies it right away with the current amount; its **...** button shows its options in the Scene view instead, where you set the amount and press **Apply**. The amount is shared with the **Distance** of Extrude and Inset.

:wtk-modify-smooth: **Smooth**
:   Smooths the selected vertices. **Strength** from 0 to 1.

:wtk-modify-relax: **Relax**
:   Evens out the spacing of the selected vertices along the surface, without flattening it. **Strength** from 0 to 1.

:wtk-modify-shrink-fatten: **Shrink/Fatten**
:   Moves the selected vertices along their normals by **Distance**. Positive values inflate, negative values deflate.

:wtk-modify-push-pull: **Push/Pull**
:   Moves the selected vertices away from or toward the transform pivot by **Distance**.

**Preserve Borders**, in the Smooth and Relax options, keeps the vertices on open borders of the mesh in place.

## :wtk-topology: Modify

| Tool | What it does |
|---|---|
| :wtk-modify-duplicate: **Duplicate** | Duplicates the selected components inside the same mesh. |
| :wtk-modify-connect: **Connect** | Connects the selected vertices, or pairs of edges, with a new edge across the face. |
| :wtk-modify-merge-meshes: **Merge Meshes** | Merges the selected objects into the active one. |
| :wtk-modify-separate: **Separate** | Moves the selected faces into a new object. |
| :wtk-modify-rip: **Rip** | Tears the selection open, so it can be pulled apart. In face mode the button reads **Extract**: the faces are detached as their own island. |
| :wtk-modify-rip-fill: **Rip Fill** | Tears the selection open and fills simple gaps. |
| :wtk-modify-dissolve-vertices: **Dissolve Verts** | Removes the selected vertices but keeps the surrounding faces. |
| :wtk-modify-dissolve-edges: **Dissolve Edges** | Removes the selected edges but keeps the surrounding faces. |
| :wtk-modify-dissolve-faces: **Dissolve Faces** | Merges the selected connected faces into one. |
| :wtk-modify-triangulate: **Triangulate** | Splits the selected faces into triangles. |
| :wtk-modify-tris-to-quads: **Tris to Quads** | Joins pairs of adjacent triangles into quads. |
| :wtk-modify-poke: **Poke** | Splits each selected face into triangles around a new center vertex. |
| :wtk-modify-fill: **Fill** | Creates a face from the selected vertices or edge loop. |
| :wtk-modify-grid-fill: **Grid Fill** | Fills a closed edge loop with a grid of quads. |
| :wtk-modify-join-edges: **Join Edges** | Welds two open edge chains with the same number of edges. |

## :wtk-shape-freeform: Shapes

The **Shapes** section of the **Topology** tab draws new edges onto the faces of the selected mesh, like a stencil:

| Shape | Draws |
|---|---|
| :wtk-shape-freeform: **Freeform** | A free stroke that follows the cursor. End it near its start to close it. |
| :wtk-select-edge: **Line** | A straight line from where you press to where you release. |
| :wtk-shape-ellipse: **Ellipse** | An ellipse inside the box you drag. |
| :wtk-select-face: **Rectangle** | A rectangle from corner to corner. |

1. Click a shape.
2. Press on a face of the selected mesh and drag. Hold ++shift++ to keep a **Rectangle** or **Ellipse** at 1:1.
3. Release the mouse: the stroke is cut into the faces it crosses.

++esc++ cancels. The **Shape Settings** panel in the Scene view has the options:

**Projection**
:   **Visible Surfaces** projects the stroke through the camera onto the faces under it. **Initial Face Plane** keeps the stroke on the plane of the face you started on.

**Simplification Tolerance**
:   How much a **Freeform** stroke is simplified, in world units. Zero keeps every captured point.

**Ellipse Segments**
:   The number of segments of an **Ellipse**.

## :lucide-flip-horizontal-2: Mirror and Subdivision Surface

These two whole-mesh tools are run from the [Modelling Tools search](#modelling-tools-search). They rebuild every face of the selected meshes, whatever components are selected, in a single undo step.

**Mirror X**, **Mirror Y** and **Mirror Z**
:   Adds a mirrored copy of the mesh across the object's local X, Y or Z plane, through its pivot. Vertices lying on that plane are shared by both halves, so half a model joins up into a whole one. Materials, flat faces and hard edges are mirrored too.

**Subdivision Surface**
:   Smooths the whole mesh by one level: each face with *n* corners becomes *n* quads, and the shape is rounded toward a smooth surface. Hard edges and open borders stay sharp. Faces keep their material and flat shading.

!!! note
    Both tools skip meshes with faces that have holes. Vertex colors and custom normals aren't kept, and a mesh with manual UVs switches to automatic UVs.

## :lucide-scissors: Boolean (destructive)

**Surface Cut**
:   Cuts the active mesh with the other selected meshes. The cutting meshes are kept. Select the mesh to be cut **last**.

For non-destructive booleans, see [Booleans](booleans.md).

## :wtk-normals: Normals and shading

**Modify Normals**
:   **Flip Normals** reverses the selected faces. **Recalc Outside** and **Recalc Inside** make the selected faces point away from or toward their center.

**Modify Shading**
:   **Flat Faces** and **Smooth Faces** set flat or smooth shading. **Smooth by Angle** smooths everything except edges sharper than **Smooth by Angle Limit**. **Mark Hard** and **Clear Hard** set sharp shading on individual edges. **Set Custom Normals** and **Clear Custom Normals** store or remove the current face normals.

For automatic smoothing of the whole mesh by angle, see **Auto Smooth** in the [Editable Mesh inspector](editable-meshes.md#shading).

## :wtk-mesh-cleanup: Cleanup

| Tool | What it does |
|---|---|
| **Weld** | Under **Weld Doubles**: welds the selected vertices that are closer than **Weld Distance**. With whole objects selected, it welds every visible vertex of each mesh. |
| **Delete Loose** | Deletes selected vertices and edges that don't belong to any face. |
| **Remove Degenerate** | Removes broken, zero-area faces and edges. |
| **Dissolve** | Under **Limited Dissolve**: removes the selected interior edges between faces that are nearly flat, under **Limited Angle**. |
| **Create Support Edge** | Adds an edge between exactly two selected vertices. |
| **Validate Mesh** | Writes a report of topology problems to the Console. |
| **Delete Unused Materials** | Removes material slots no face uses. |

## :wtk-brush: Vertex colors

Click :wtk-brush: **Paint** in the Modelling Edit toolbar to paint vertex colors by dragging over the mesh. Click it again to stop.

**Color**
:   The paint color. White visually erases painted color.

**Radius** and **Strength**
:   The brush size (in screen pixels) and how much each stroke blends in.

**Face Corners**
:   Paints only the corners of the face under the cursor. Turn it off to paint every face inside the brush.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/vertex-paint.webp">
    <source src="../assets/videos/modelling/vertex-paint.mp4" type="video/mp4">
  </video>
  <figcaption>Painting vertex colors with the brush.</figcaption>
</figure>

**Apply to Selection** fills the selection with the current color, and **Pick from selection** takes the color from the selection.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/vertex-color.webp">
    <source src="../assets/videos/modelling/vertex-color.mp4" type="video/mp4">
  </video>
  <figcaption>Filling the selected faces with Apply to Selection.</figcaption>
</figure>

## :wtk-materials: Materials

The **Materials** section lists the mesh's material slots.

- **Add Material** adds a slot.
- **Assign** gives the slot's material to the selected faces.
- **Select** adds the faces that use that slot to the selection.
- **Delete** removes the slot.

!!! tip "Drag and drop"
    In face mode, drag a material from the Project window onto one of the selected faces in the Scene view to give it to all the selected faces.

## :lucide-search: Modelling Tools search

**Right-click** in the Scene view (without dragging) while editing a mesh to open **Modelling Tools**, a searchable list of every Modelling tool. It also has tools without a button in the panel, such as [Mirror and Subdivision Surface](#mirror-and-subdivision-surface).

- Type to filter the list, pick a tool with the arrow keys and press ++enter++ to run it. ++esc++ closes the list.
- The pin button next to a tool pins it. **Pinned** and **Recent** tools are listed above **All Tools**; **Recents first** decides which of the two comes first.
- The **…** button next to a tool opens its options in the Scene view instead of running it.

## :lucide-repeat: Repeating the last action

Press ++enter++ in the Scene view to run the last operation again on the current selection: an extrude, bevel, inset, bridge or slide, most buttons of the **Topology** tab, a move, rotation or scale (also a ++shift++ extrude-and-move), or a tool run from the Modelling Tools search. A message in the Scene view confirms it (*Repeated: Extrude*) or says it can't (*Cannot repeat Extrude on this selection*).

It doesn't apply while the Knife is active or while you create a primitive, where ++enter++ finishes the cut or the shape.

While you edit UVs (the **UV** tab), ++enter++ repeats the last UV action instead, both in the Scene view and in the [UV View](uvs.md#the-uv-view): a button of the **UV** tab such as **Sew**, **Normalize** or **Pack**, a typed **Move Selection**, **Rotate Selection** or **Scale Selection**, or a move, rotation, scale or rect drag of UVs in either view. A repeated drag applies the same offset, angle or factor to the current selection, around its own pivot.
