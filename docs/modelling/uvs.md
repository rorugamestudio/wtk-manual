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

**Open UV View** in the **UV** tab opens the UV editor, which shows the selected mesh's UVs over its texture. Turn on **Auto Open UV View** to open it every time you switch to the **UV** tab.

Its toolbar holds the **Transform** tools, the **Selection** modes and the **Pivot**, **Snap** and **Increment** options, plus:

**Focus Mesh**
:   With several meshes selected: when on, only the last mesh you worked on can be edited and the others are grayed out; when off, every selected mesh is shown in color and edited at once.

**UV Channel**
:   **UV0 — Material**, the UVs you edit, or **UV1 — Lightmap**, a read-only preview of the [lightmap UVs](#lightmap-uvs).

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

**Quick Rotate**
:   **Rotate Left** and **Rotate Right** turn the selection by **Angle** (90 degrees by default).

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

UV seams are drawn as dashed lines in the Scene view while the **UV** tab is active.

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

The **Align Elements** section lines up the selected UVs:

- **Flip U** and **Flip V** mirror the selection across its own bounds.
- The grid of arrow buttons aligns the selected elements to the left, center or right, and to the top, middle or bottom of the selection. The buttons on each side of the center dot center the selection on U only or on V only.
- **Move Connected Islands** moves every island the selection touches as one piece instead of moving only the selected elements.

**Distribute Islands** places the selected islands one after another along U (**Distribute U**) or V (**Distribute V**), with **Island Spacing** between them.

The **Align UVs To 3D** section has a second grid of arrow buttons: each one moves the UVs so the texture tile lines up with that corner, side or the center of the selection, as it's oriented on the mesh. Use it to start a texture exactly at the corner of a wall.

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
