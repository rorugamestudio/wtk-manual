---
icon: lucide/circle-dashed
---

# Holes

The **Holes** operation cuts holes in the terrain inside its [mask](masks.md), for cave and tunnel entrances, or for openings where a mesh replaces the terrain.

**Action**
:   **Cut** makes holes. **Fill** closes holes that are already there: holes cut by stamps above it in the Hierarchy, or holes in the target's base.

**Threshold**
:   The mask strength, from 0.01 to 0.99, from which the terrain is cut or filled. A hole is either open or closed: there's no partial hole, so the mask only decides where the edge falls.

Trees and Details operations never place anything on a hole, whichever stamp cut it. Details can also keep a distance from the edges of holes with **Hole Edge Padding (%)** in their [Detail Source](details.md#terrain-detail-source).

!!! tip "Fast to edit"
    A stamp whose operations are only **Holes**, **Trees** and **Details** rebuilds without touching the heights or the painting of the terrain, so it updates quickly.

## :lucide-list-ordered: Cut an opening under a mesh

1. Create a stamp near the mesh, for example by drawing a small outline.
2. In the layer's **Mask Composition**, set the first fill to **Mesh** and assign the mesh's Mesh Filter to **Source Mesh**, so the mask covers the area under it.
3. In **Stamps**, set the operation to **Holes** with **Action** set to **Cut**.

Use **Fill** in a stamp lower in the Hierarchy to close part of a hole that another stamp cut.
