---
icon: lucide/trees
---

# Trees

The **Trees** operation places terrain trees inside its [mask](masks.md). Where the mask is weaker, fewer trees are placed.

**Source Prefab**
:   The tree prefab. It's added to the terrains' tree prototypes when needed.

**Density Per 100 Square Meters**
:   How many trees per 100 m² where the mask is full.

**Minimum Spacing**
:   The smallest distance between two trees, in meters. It also limits how dense the trees can get: past that point, raising the density adds no more trees.

**Seed**
:   Changes the random placement.

**Width Scale Range** / **Height Scale Range**
:   The scale of each tree compared to its prefab, 1 by default. Turn on **Random** to give each tree a random scale between **Min** and **Max**.

**Rotation Range Degrees**
:   The rotation of each tree, in degrees. By default each tree gets a random rotation between 0 and 360.

## :lucide-info: How trees are placed

- Trees are placed after every stamp has shaped the terrain and cut its holes, stamp by stamp in Hierarchy order.
- No tree is placed on a hole.
- **Minimum Spacing** is kept from every tree already on the terrain: trees in the base and trees placed by earlier operations.
- The placement pattern is fixed in the world, so moving or reshaping a stamp doesn't reshuffle the trees that stay well inside it.
- A Trees operation only adds trees; it never removes any.

## :lucide-list-ordered: Plant a wood

1. Draw a stamp outline where the wood goes.
2. In **Stamps**, set the operation to **Trees**, or add a **Trees** operation to the list.
3. Set **Source Prefab** and **Density Per 100 Square Meters**.
4. To thin the trees out toward the outside, add a **Border** adjustment to the **Spline Area** mask.

!!! tip
    Use several tree operations, each with its own prefab and density, to mix species in the same stamp.

!!! warning "Tree prototype without a prefab"
    If a terrain has a tree prototype with no prefab, the Console warns about it and the terrain is highlighted in the Hierarchy. Assign or remove that prototype in the terrain's tree settings.
