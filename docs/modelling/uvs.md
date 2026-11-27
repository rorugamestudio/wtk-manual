---
icon: wtk/uv-view
---

# UVs

UVs decide how textures wrap around a mesh. You can let World Toolkit generate them, or edit them by hand in the **UV** tab and the **UV View**.

## :lucide-wand-sparkles: Automatic UVs

By default, Editable Meshes can generate their UVs from the geometry with **Auto UV**, in local or world space. See [Editable Meshes](editable-meshes.md#uv-options).

Editing UVs by hand switches the edited faces to manual UVs.

!!! warning "Manual edits are replaced"
    Turning **Auto UV** back on replaces the current UVs with generated ones. You'll be asked to confirm, because manual edits are lost.

## :wtk-uv-view: The UV View

**Open UV View** in the **UV** tab opens the UV editor, which shows the selected mesh's UVs over its texture. Turn on **Auto Open UV View** to open it every time you switch to the **UV** tab, and whenever a UV action of the tab, the command palette or ++enter++ runs while it's closed. With it off, those actions edit the UVs of the Scene View selection and leave the UV View closed.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/uv-edit.webp">
    <source src="../assets/videos/modelling/uv-edit.mp4" type="video/mp4">
  </video>
  <figcaption>Unwrapping a cylinder and editing its UVs in the UV View.</figcaption>
</figure>

Its toolbar holds the **Transform** tools, the **Selection** modes and the **Pivot**, **Snap** and **Increment** options, plus:

**Focus Mesh**
:   With several meshes selected: when on, only the last mesh you worked on can be edited and the others are grayed out; when off, every selected mesh is shown in color and edited at once.

**UV Channel**
:   **UV0 — Material**, the UVs you edit, or **UV1 — Lightmap**, a read-only preview of the [lightmap UVs](#lightmap-uvs).

**Export**
:   Saves the UVs on display as a PNG or SVG image to paint textures over. See [Exporting the UV layout](#exporting-the-uv-layout).

**Texture**
:   The texture behind the UVs. By default it's the main texture of the first material of the mesh on view: the one its shader marks as main, or else the first texture the shader uses. Pick another material of the selected meshes in the list, or **Custom Texture** to show any texture of the project, chosen in the field next to it. A long texture name is cut short; hover it to read it whole. The grid shows over the texture, its lines edged in a lighter or darker tone so they stand out on any texture.

**Repeat Texture**
:   Repeats the texture over the whole view, as a texture with **Wrap Mode** set to **Repeat** tiles on the mesh, so islands placed past the 0–1 square show the part of the texture they get. Off, the texture shows on the 0–1 square only. The view repeats it whatever the texture's own **Wrap Mode**.

**Increment**
:   The steps used while you hold ++ctrl++: **Move**, **Rotate (degrees)** and **Scale factor**. They are the same values as in **Numeric Transform**.

### :lucide-mouse-pointer-click: Selecting UVs

UV selection works on its own component types, chosen in the toolbar or with the keyboard inside the UV View:

| Key | Mode |
|---|---|
| ++1++ | :wtk-select-vertex: Vertices |
| ++2++ | :wtk-select-edge: Edges |
| ++3++ | :wtk-select-face: Faces |
| ++4++ | Islands |

The toolbar also has **UV corners** and **Connected 3D** modes, and box-selection rules for edges and faces, as in the [Scene view](selection.md#box-selection-rules).

## :lucide-move: Transforming UVs

Move, rotate and scale UVs with the regular transform tools, or with exact values under **Numeric Transform**: **Move Selection**, **Rotate Selection** and **Scale Selection** apply the typed offset, angle or factor.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/uv-edit-in-scene.webp">
    <source src="../assets/videos/modelling/uv-edit-in-scene.mp4" type="video/mp4">
  </video>
  <figcaption>Moving, rotating and scaling UVs straight in the Scene view, with the UV View alongside.</figcaption>
</figure>

### :wtk-pivot-origin-custom: The UV pivot in the Scene view

While you edit UVs in the Scene view, the pivot is the UV tile and the handle together. The tile drawn on the selection has the shape the texture has on the selected faces, and the handle sits on its point at **Pivot Alignment On Tile** **U** and **V**, from 0 to 1 across and up the tile (0.5, 0.5 is its center), set in the **Pivot Position** card or the Scene view's **Pivot Position** overlay. A new **U** or **V** keeps the tile and moves the pivot inside it.

The **UV** tab has pivot modes of its own, which the Scene view's **Tool Settings** and the ++z++ / ++x++ shortcuts follow while you edit UVs. The **Topology** tab keeps its own.

**Origin**
:   **Center**: the tile is the texture tile under the selection's center, read from the UVs as they are now.
:   **Custom**: the pivot is at **Custom Origin**, set with the field, its **Edit** button, or **Set Custom**, which keeps the pivot where it is now. Setting it moves the tile and the handle without changing the UVs. **Reset** goes back to **Center**.

**Individual Origins**
:   Gives each selected UV island its own tile, the texture tile under the island's center, and its own pivot at **Pivot Alignment On Tile**. **Rotate** and **Scale** turn and scale every island around its own pivot, and the Scene view draws one tile per island; the handle stays on the pivot of the **Origin**. With **Origin** set to **Custom**, the tiles stay centered on their islands, not on the custom pivot: **Pivot Position**'s **Auto Update Custom** shows an asterisk, and its tooltip says why.

**Orient**
:   **Global**: Unity's own **Move**, **Rotate** and **Scale** handles, along the world axes.
:   **UV**: a 2D gizmo along the tile's edges, even when the texture skews the tile into a rhombus: **Move** has an X and a Y arrow and a 2-axis square between them, **Rotate** turns around the tile's normal, and **Scale** stretches along X and Y. The **Rect** tool frames the selection along the tile's edges too.
:   **Custom**: along **Custom Orient**, with the handles chosen in **Custom Gizmo**: the **2D Gizmo** or Unity's **3D Gizmo**. The tile keeps the shape of the texture. **Reset** puts **Orient** back to **UV**, and **Custom Orient** back to the world axes for the 3D gizmo or along the tile for the 2D one.

The tile always sits on the UVs it stands for: dragging a handle, the UV View, the buttons of the **UV** tab and undo move the tile and the pivot along with the UVs. Rotating and scaling work around the pivot, which keeps its point of the tile. With **Origin** set to **Custom**, **Pivot Position**'s **Auto Update Custom** decides what the custom pivot does when the UVs move under it: on, it goes with the UVs it stands on; off, it keeps its place, and the tile is the one under it now.

A short red shaft along U, a green one along V and a small yellow quad centered on the tile's bottom left corner, where U and V start, show which way the texture runs.

**Quick Rotate**
:   **Rotate Left** and **Rotate Right** turn the selection by **Angle** (90 degrees by default).

!!! tip "Repeat it"
    Press ++enter++ in the UV View, or in the Scene view while editing UVs, to repeat the last UV action on the current selection: a UV tool, or a move, rotation, scale or rect drag. See [Repeating the last action](editing-tools.md#repeating-the-last-action).

## :lucide-scissors: Seams and islands

**Cut**
:   Cuts the selected UV edges, creating a seam.

**Sew**
:   Sews the selected UV edges back together.

**Extract**
:   Turns the selection into separate UV islands.

**Join Faces**
:   Moves the selected islands to their matching shared edges and sews them.

**Unflip Islands**
:   Fixes islands that ended up mirrored.

UV seams are drawn in the Scene view while the **UV** tab is active, as dashed lines unless you change their **Edge Draw Mode** in the [Modelling settings](settings.md#components-visibility).

## :lucide-layout-grid: Layout tools

**Normalize**
:   Fits the selection into the 0–1 texture square. With **Preserve Aspect** off, it stretches to fill the whole square. **U** and **V** next to it fit only the width or only the height to 0–1, keeping the proportions and starting at zero.

**Match World Size**
:   Scales islands so that their texture density matches their real size in the scene.

**World Scale**
:   **World units / tile U** and **World units / tile V** set how much of the world one texture tile covers. **Copy World Scale** reads these values from the selection, and **Paste World Scale** scales the selection to them. Copy from one mesh and paste on another to give both the same texture density.

**Unfold**
:   Flattens the selected UVs while keeping seams and leaving unselected UVs where they are.

**Pack**
:   Arranges whole islands inside the texture area without changing their proportions. In the **Pack UV Islands** card, **Start** and **End** (U and V) set the area to pack into, and **Padding** the space around islands and along the area's border, in UV units.

**Strip U** / **Strip V**
:   Lays the selected faces out as one horizontal or vertical strip. Useful for trims, pipes and road-like textures.

**Straighten Islands**
:   Rotates each island so it lines up with the U or V axis.

**Gridify**
:   In the **Gridify Islands** card: lines up rows and columns of UVs into a clean grid. **U Tolerance** and **V Tolerance** set how far from horizontal or vertical an edge can be and still count as part of a row or column.

## :lucide-align-center: Aligning

The aligning tools are cards at the end of the **Modify** section of the **UV** tab. First, **Distribute Islands** places the selected islands one after another along U (**Distribute U**) or V (**Distribute V**), with **Island Spacing** between them.

The **Align Elements** card lines up the selected UVs:

- **Flip U** and **Flip V** mirror the selection across its own bounds.
- The grid of arrow buttons aligns the selected elements to the left, center or right, and to the top, middle or bottom of the selection. The buttons on each side of the center dot center the selection on U only or on V only.
- **Move Connected Islands** moves every island the selection touches as one piece instead of moving only the selected elements.
- **Auto Separate Islands** first makes the selection an island of its own wherever it still shares UVs with faces outside it, then moves only the selection, so the faces around it stay where they are. A selection that already is its own island is left as it is. While it's on, **Move Connected Islands** is turned off.

The **Align UVs To 3D** card has a second grid of arrow buttons: each one moves the UVs so the texture tile lines up with that corner, side or the center of the selection, as it's oriented on the mesh. Use it to start a texture exactly at the corner of a wall. It has the same **Move Connected Islands** and **Auto Separate Islands** options, both off by default: the buttons move only the selected UVs, as before. With [**Individual Origins**](#the-uv-pivot-in-the-scene-view) on, each selected island lines up with its own corner, side or center, instead of the selection moving as one piece.

## :lucide-scan: Projection

**UV Projection** projects UVs onto the selection from a simple shape:

**Mode**
:   **Planar**, **Box**, **Cylindrical** or **Spherical**.

**Axis**
:   The projection direction. **Best** picks the right one for each face.

**Scale**, **Offset** and **Rotation** adjust the result. Press **Apply** to project.

## :lucide-sun: Lightmap UVs

**Generate Lightmap UVs** creates the second UV set (UV1) used for baked lighting, and doesn't change your texture UVs (UV0). Then enable **Contribute GI** on the object and bake from Unity's **Lighting** window.

To check the result, switch the UV View's **UV Channel** to **UV1 — Lightmap**. Editable Meshes can also generate them on their own with **Auto Bake Lightmap UVs** (see [Editable Meshes](editable-meshes.md#uv-options)).

## :lucide-image-down: Exporting the UV layout

**Export** in the UV View's toolbar saves the UV layout as an image: faces filled and edges drawn on a transparent background, ready to paint a texture over. It exports what the view shows: every selected mesh, or only the focused one while **Focus Mesh** is on, in the current **UV Channel**, without hidden faces. Set the options, then press **Export...** and choose the file. The options are remembered for the next export.

**Format**
:   **PNG**, a transparent image, or **SVG**, vector paths that stay sharp at any size and open in vector editors.

**Scope**
:   The part of UV space the image covers. **Tile Range** covers every tile from **From Tile** to **To Tile**: tile (0, 0) is the 0–1 UV square and (1, 0) the one to its right. **Enclosing UVs** crops the image to the UVs. **Occupied Tiles** covers the tiles that hold faces.

**Split Per Tile**
:   With **Occupied Tiles**, writes one file per tile instead of one image over all of them. Files are numbered like UDIMs (`_1001`, `_1002`... and `_1011` for the tile above `_1001`), or named `_u<U>_v<V>` when a tile is left of or below the 0–1 square.

**Tile Size (px)**
:   Pixels across one tile. A PNG larger than your graphics card allows is reduced to fit, and a warning says so. In an SVG it sets the coordinate scale.

**Fill Polygons** and **Fill Color**
:   Fill the faces. The color's alpha sets the fill opacity.

**Edge Color** and **Edge Width (px)**
:   How edges are drawn. A width of 0 exports the fill only.

The line under the options tells how many images the export writes and their size. **Export UV Layout...** is also in the UV tool search: right-click in the UV View.
