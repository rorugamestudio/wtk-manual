# Editing Tools

All editing tools live in the **Topology** tab of the Modelling panel. They act on the current [selection](selection.md).

!!! tip "Quick tool search"
    **Right-click** in the Scene view (without dragging) while editing a mesh to open **Modelling Tools**, a searchable list of every tool. It shows your **Recent** and **Pinned** tools at the top.

## Tools with options

These tools show an options panel in the Scene view. Adjust the options, check the preview, then press **Apply**, or **Cancel** to leave without changing anything. The **...** button next to each tool in the panel shows or hides its Scene view options.

### Extrude

Pulls the selected faces or edges out to create new geometry.

**Distance**
:   How far to extrude.

**Keep faces together**
:   Extrudes connected faces as one region. Turn it off to extrude each face separately.

**Follow normals average**
:   Moves the extruded geometry along the average direction of the faces.

**Shell**
:   Keeps the original faces, flipped, as an inner cap. Useful to give thickness to an open surface.

**Auto Trim Collisions**
:   When the extrusion goes through another part of the same mesh, cuts an opening there. Useful for making passages through walls.

**Hard Edge Angle**
:   Edges created by the extrusion are marked hard (sharp shading) when the angle between their faces reaches this value. Flatter edges stay smooth.

### Inset

Creates a smaller copy of the selected faces inside them, for panels, windows and borders.

**Inset Mode**
:   **Region** insets the selection as one area. **Individual** insets each face on its own.

**Distance**
:   How far inward the new edges are.

### Bevel

Rounds or cuts the selected edges or vertices.

**Distance**
:   The width of the bevel.

**Segments**
:   How many faces make up the bevel. Use 1 for a flat cut, more for a rounded edge.

**Profile** and **Profile Shape**
:   The curvature of the bevel.

**Junctions**
:   How corners where several beveled edges meet are filled: with segmented faces (**Segmented**) or with a single polygon (**Ngon**).

### Bridge

Connects two selected face groups, edge chains or edge loops with new faces. Handy for joining two parts of a mesh or closing a gap between them.

### Merge

Merges the selected vertices.

**Variant**
:   - **Center**: all selected vertices become one, at their center.
    - **Cursor**: all selected vertices become one, at the custom pivot position (see [Transform](transform.md#custom-pivots)).
    - **Collapse**: each connected group of selected vertices becomes its own vertex.
    - **Distance**: only selected vertices closer than **Distance** are merged.

### Knife

Cuts new edges across faces by hand.

- **Click** on surfaces or edges to place cut points.
- Hold ++shift++ over an edge for a **loop cut** all around the mesh, then click to apply.
- Press ++enter++ or **right-click** to apply the cut.
- ++backspace++ removes the last point, ++esc++ cancels.

**Selected Only**
:   Only cuts the selected edges or faces.

**Step**
:   Snaps cut points along edges in steps. 0 is continuous; 0.25 snaps to quarters of the edge.

### Slide

Slides the selected vertices or edges along the surrounding edges, without changing the shape of the surface. **Step** snaps the slide amount.

### Subdivide

Splits the selected faces or edges. **Cuts** sets how many times.

## Deformation

These tools use a **Distance** value as strength:

**Smooth**
:   Smooths the selected vertices. Strength from 0 to 1.

**Relax**
:   Evens out the spacing of the selected vertices along the surface, without flattening it. Strength from 0 to 1.

**Shrink/Fatten**
:   Moves the selected vertices along their normals. Positive values inflate, negative values deflate.

**Push/Pull**
:   Moves the selected vertices away from or toward the transform pivot.

## Modify

| Tool | What it does |
|---|---|
| **Duplicate** | Duplicates the selected components inside the same mesh. |
| **Connect** | Connects the selected vertices, or pairs of edges, with a new edge across the face. |
| **Merge Meshes** | Merges the selected objects into the active one. |
| **Separate** | Moves the selected faces into a new object. |
| **Rip** | Tears the selection open, so it can be pulled apart. |
| **Rip Fill** | Tears the selection open and fills simple gaps. |
| **Dissolve Verts** | Removes the selected vertices but keeps the surrounding faces. |
| **Dissolve Edges** | Removes the selected edges but keeps the surrounding faces. |
| **Dissolve Faces** | Merges the selected connected faces into one. |
| **Triangulate** | Splits the selected faces into triangles. |
| **Tris to Quads** | Joins pairs of adjacent triangles into quads. |
| **Poke** | Splits each selected face into triangles around a new center vertex. |
| **Fill** | Creates a face from the selected vertices or edge loop. |
| **Grid Fill** | Fills a closed edge loop with a grid of quads. |
| **Join Edges** | Welds two open edge chains with the same number of edges. |

## Boolean (destructive)

**Surface Cut**
:   Cuts the active mesh with the other selected meshes. The cutting meshes are kept. Select the mesh to be cut **last**.

For non-destructive booleans, see [Booleans](booleans.md).

## Normals and shading

**Modify Normals**
:   **Flip Normals** reverses the selected faces. **Recalc Outside** and **Recalc Inside** make the selected faces point away from or toward their center.

**Modify Shading**
:   **Flat Faces** and **Smooth Faces** set flat or smooth shading. **Smooth by Angle** smooths everything except edges sharper than **Smooth by Angle Limit**. **Mark Hard** and **Clear Hard** set sharp shading on individual edges. **Set Custom Normals** and **Clear Custom Normals** store or remove the current face normals.

## Cleanup

| Tool | What it does |
|---|---|
| **Weld** | Welds selected vertices closer than **Weld Distance**. |
| **Weld Doubles** | Welds overlapping vertices closer than **Weld Distance**. |
| **Delete Loose** | Deletes selected vertices and edges that don't belong to any face. |
| **Remove Degenerate** | Removes broken, zero-area faces and edges. |
| **Dissolve** / **Limited Dissolve** | Removes interior edges between faces that are nearly flat, under **Limited Angle**. |
| **Create Support Edge** | Adds an edge between exactly two selected vertices. |
| **Validate Mesh** | Writes a report of topology problems to the Console. |
| **Delete Unused Materials** | Removes material slots no face uses. |

## Vertex colors

Click **Paint** in the Modelling Edit toolbar to paint vertex colors by dragging over the mesh. Click it again to stop.

**Color**
:   The paint color. White visually erases painted color.

**Radius** and **Strength**
:   The brush size (in screen pixels) and how much each stroke blends in.

**Face Corners**
:   Paints only the corners of the face under the cursor. Turn it off to paint every face inside the brush.

**Apply to Selection** fills the selection with the current color, and **Pick from selection** takes the color from the selection.

## Materials

The **Materials** section lists the mesh's material slots.

- **Add Material** adds a slot.
- **Assign** gives the slot's material to the selected faces.
- **Select** adds the faces that use that slot to the selection.
- **Delete** removes the slot.
