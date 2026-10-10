---
icon: wtk/component-terrain-stamp
---

# Stamps

A stamp is a GameObject with a :wtk-component-terrain-stamp: **Terrain Stamp** component. It changes the terrains of one :wtk-component-terrain-stamp-target: **Terrain Stamp Target**, inside the area its masks define.

## :wtk-component-terrain-stamp-target: Setting up a Stamp Target

Stamps need a **Terrain Stamp Target**, which tells them which terrains to modify and keeps those terrains' **base**.

1. Select your terrain objects. Several tiles can share one target.
2. In the Terrain panel, under **Terrain Stamp Targets**, click **Create Terrain Stamp Target**.

This creates a **Terrain Stamp Target** object, moves the selected terrains under it in the Hierarchy and lists them in its **Terrain States**, one **Target Terrain** per entry. You can also add the component with **Add Component > World Toolkit > Terrain > Terrain Stamp Target** and fill the list yourself. Changing the list rebuilds the stamps.

!!! tip "No target yet?"
    When you draw a stamp on a terrain that has no target, one is created for that terrain.

The target's inspector has:

**Capture Base**
:   Saves the terrains as they are now as the base that stamps build on: heights, painted terrain layers, holes, details and trees. The base is captured automatically the first time stamps are applied, so you only need this to replace it.

**Restore Base**
:   Puts the terrains back to their saved base, without any stamp.

**Stitch Edges**
:   Matches the heights along the shared edges of neighbouring terrain tiles, so there are no seams. Full rebuilds do this too.

**Rebuild Stamps**
:   Rebuilds the terrains from the base and every stamp of this target.

The base is saved in the Terrain Stamp Target component, with the scene.

!!! warning "Every rebuild starts from the base"
    Changes you make with Unity's own terrain tools don't survive a rebuild unless they're part of the base. **Capture Base** saves the terrain exactly as it is: if the stamps are applied at that moment, their result becomes part of the base and gets applied twice. To change the base by hand:

    1. Click **Restore Base** to take the stamps off the terrain.
    2. Sculpt or paint the terrain.
    3. Click **Capture Base**.
    4. Click **Rebuild Stamps** to apply the stamps on top.

### :lucide-eraser: Clearing the base

To start again from flat ground, select a Terrain Stamp Target and use the **Clear Terrains** group of the Terrain panel:

1. Set **Height**, the world height of the flat ground.
2. Optionally set a **Terrain Layer** to paint over the whole base.
3. Click **Clear Terrains Base** and confirm.

Every terrain of the target gets a flat base at that height. The terrains then show the cleared base: click **Rebuild Stamps** to apply the stamps on top of it.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/terrain/terrain-global-height.webp">
    <source src="../assets/videos/terrain/terrain-global-height.mp4" type="video/mp4">
  </video>
  <figcaption>Creating a Terrain Stamp Target, clearing its base and adding a stamp that sets the height of the whole terrain.</figcaption>
</figure>

## :lucide-pencil: Creating stamps

1. In the Terrain panel, click **Edit Terrain Stamps**. The button changes to **Exit Editing Terrain Stamps**.
2. Hold ++shift++ and **click** on the terrain to place the first point of the outline. This creates a new **Terrain Stamp** object.
3. **Click** to add more points. Click and drag to pull out Bézier handles.
4. Finish the outline:
    - **Right-click** to finish it.
    - **Click the first point** to close the outline and finish.
    - Press ++esc++ to discard the stamp you're drawing.

When you finish, the terrain is rebuilt with the new stamp. An outline needs at least 3 points when the panel's preset has a **Spline Area** mask, 2 otherwise; a shorter one is removed. While you edit stamps, the [context tips](../getting-started/world-toolkit-window.md#context-tips) panel in the Scene view recalls the main controls.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/terrain/terrain-stamps.webp">
    <source src="../assets/videos/terrain/terrain-stamps.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing stamps from different presets, from hills to a patch of forest.</figcaption>
</figure>

New stamps start from the **Terrain Stamp Preset** set in the panel's **New Terrain Stamps** card. Without one, they start with a single layer: a **Spline Area** mask on the outline and a [Height](height.md) operation. Their target is the selected Terrain Stamp Target, or else the target of the terrain under the first point.

!!! note "Shift-click with a stamp selected"
    If a stamp is selected, the new outline is added to that stamp instead of creating a new one. Select the terrain or clear the selection first to start a separate stamp.

To edit a stamp, keep **Edit Terrain Stamps** on: click knots to select them, and drag knots or handles to reshape the stamp. The terrain follows. Press ++esc++ to stop editing. Everything you can do with knots is described in [Spline Container](../splines/spline-container.md#editing-knots).

:wtk-component-terrain-stamp: **Create with Selected** adds a stamp to each selected object that doesn't have one, for example to turn existing splines into stamps. The stamp starts from the panel's preset and uses the object's Spline Container (or one on its children) for its spline masks. It targets the terrain under the object, and a target is created for that terrain if needed.

You can also add the component with **Add Component > World Toolkit > Terrain > Terrain Stamp**. Set its **Stamp Target**, or it won't change any terrain.

## :lucide-layers: Stamp layers

The Terrain Stamp inspector has:

**Stamp Target**
:   The Terrain Stamp Target whose terrains this stamp changes. Pick another target to move the stamp's effect to its terrains.

**Layers**
:   The stamp's layers, applied from top to bottom.

Each layer has a **Mask Composition**, which says where the layer applies and how strongly (see [Masks](masks.md)), and **Stamps**, the operations it applies there, in list order:

| Operation | What it does |
|---|---|
| :lucide-mountain: [Height](height.md) | Raises, lowers or flattens the ground. |
| :lucide-waves: [Smooth](erosion-and-smoothing.md#smooth) | Softens the shape. |
| :lucide-droplets: [Erosion](erosion-and-smoothing.md#erosion) | Simulates weathering by water or gravity. |
| :lucide-paintbrush: [Texture](textures.md) | Paints a terrain layer. |
| :lucide-trees: [Trees](trees.md) | Places trees. |
| :lucide-sprout: [Details](details.md) | Places grass and other details. |
| :lucide-circle-dashed: [Holes](holes.md) | Cuts or fills terrain holes. |

Every mask and operation has a **Mute** toggle to turn it off temporarily. To take a whole stamp out, disable its component or its GameObject.

The **Layer Masks** preview at the bottom of the inspector shows the combined mask of a layer in shades of grey: the brighter, the stronger. When a stamp has several layers, buttons above the preview (**Layer 0**, **Layer 1**...) pick which one you see. Its detail follows **Mask Preview Resolution** in the [Terrain Settings](settings.md).

## :lucide-list-ordered: How stamps are applied

A rebuild starts from the target's base, then:

1. Applies every enabled stamp of the target, in Hierarchy order from top to bottom (a parent before its children). In each stamp, layers run from top to bottom, and the operations of each layer in list order, except trees and details.
2. Stitches the edges between neighbouring terrains of the target.
3. Places the trees and details of every stamp, in the same order, on the finished ground.

Stamps rebuild by themselves when you move, reshape or edit them, reorder them, or turn them on or off. **Rebuild Stamps** on a target, or **Rebuild all stamps** in the Terrain panel for every target in the scene, forces a full rebuild. How often rebuilds happen while you drag is set in the [Terrain Settings](settings.md#rebuilds).

## :lucide-file-box: Presets

A :lucide-file-box: **Terrain Stamp Preset** stores a stamp's layers so you can reuse them.

- **Create one from a stamp:** right-click the Terrain Stamp component and choose **Create Terrain Stamp Preset From Current Setup...**, then pick where to save it.
- **Create an empty one:** **Assets > Create > World Toolkit > Terrain > Stamp Preset**. Its inspector has the same **Layers** list as a stamp.
- **Use it for new stamps:** set it in the **Terrain Stamp Preset** field of the Terrain panel. Drawn stamps and :wtk-component-terrain-stamp: **Create with Selected** start from it.
- **Apply it to existing stamps:** select them and click **Apply Preset** in the Terrain panel. This replaces their layers.

When a preset is applied, its **Spline Area** and **Spline Stroke** masks, and its Height operations with a **Spline** source, are pointed at the stamp's own spline.

!!! note "Presets are copied"
    A stamp keeps its own copy of the preset's layers. Editing the preset later doesn't change the stamps made from it: select them and click **Apply Preset** again.
