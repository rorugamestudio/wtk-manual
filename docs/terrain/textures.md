---
icon: lucide/paintbrush
---

# Textures

The **Texture** operation paints a terrain layer inside its [mask](masks.md).

**Terrain Layer**
:   The terrain layer to paint. It's added to the target's terrains automatically if they don't have it yet.

**Opacity**
:   How strongly it's painted, from 0 to 1.

## :lucide-blend: How painting works

At each point, the terrain layer moves toward full coverage by **Opacity** times the mask strength. Where both are 1, it replaces what was painted there; lower values blend it over the existing paint. The other terrain layers fade in proportion, so the layers always add up to full coverage.

Texture operations paint over each other in the order stamps are applied: stamps lower in the Hierarchy, later layers and later operations in a list paint on top. Everything starts from the painting stored in the target's base.

## :lucide-list-ordered: Paint rock on steep slopes

1. Draw a stamp outline over the area to paint.
2. In the layer's **Mask Composition**, below the **Spline Area**, add a **Terrain Slope** fill with **Mode** set to **Multiply**, and set its **Slope Degrees Range**, for example from 35 to 90.
3. In **Stamps**, set the operation to **Texture** and pick the rock **Terrain Layer**.
4. For a softer transition, turn on **Modulate Alpha By Incidence**, or add a **Noise** fill in **Multiply** mode to break up the edge.

!!! note "Painting a hill made by a stamp"
    Slope and height masks read the terrain from before their own stamp. If the hill comes from a stamp, do the painting in a separate stamp below it in the Hierarchy.

!!! tip "Snow on peaks"
    A **Terrain Height** fill works the same way: set its **World Height Range** above the snow line and paint a snow layer.
