---
icon: lucide/scan-eye
---

# Scene View Modes

World Toolkit adds its own section, **World Toolkit**, to the Scene view's draw mode menu, the shading dropdown of the **View Options** toolbar. Its modes change how the Scene view draws the scene, to help you check your work; the scene itself doesn't change. Pick **Shaded** to go back.

These modes draw in URP projects. In other render pipelines they're listed but disabled.

## :lucide-move-vertical: Geometry Height

Colours every surface by its height, so slopes, steps and objects that sit too high or too low stand out. The colours go from dark purple at the lowest vertex of the geometry in the Scene view, through blue, cyan, green and yellow, to dark red at the highest: the same ramp as the height pictures of [`wtk_render_positions`](command-line.md). Faces are lightly shaded so you can still tell them apart.

The lowest and highest heights come from the mesh renderers, skinned mesh renderers and terrains of the open scenes, or of the prefab you're editing. Objects hidden in the Scene view, layers hidden in the **Layers** menu and disabled renderers don't count. The range follows the scene as you edit it.

While the mode is on, the **Geometry Height** overlay shows the colour ramp with the lowest height at its left end and the highest at its right end, in metres.

!!! info "What gets coloured"
    Only opaque surfaces take the height colours. Transparent materials, like road paint, draw as usual on top of them. Skinned meshes count by their bounds, since their vertices follow their bones.
