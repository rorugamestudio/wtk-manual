# Building Blocks

A **Building Block** takes a large area, splits it into lots, and generates a building on each one. Use it to fill a whole city block quickly, then adjust individual buildings if needed.

## Creating a block

1. In the **Buildings** panel, set **Draw Creates** to **Block**.
2. Click **Edit Buildings**.
3. Hold ++shift++ and **click** to draw the block's outline, then close it.

The block splits into lots and generates a building on each one.

## Choosing the buildings

**Building Rule Chances**
:   The [Building Rules](building-rules.md) used for the generated buildings, each with a chance. Mix several rules to vary the style along the block.

**Seed**
:   Change it to get a different layout and mix from the same settings.

**Mesh Bake Strategy**
:   Whether generated buildings are combined into a single mesh: **Per Building** (follow each building's own setting), **Force Bake All**, or **Don't Bake**.

The generated buildings are listed under **Generated Buildings**.

## Adjusting lots

**Default Edge Inset**
:   Moves every lot edge inward by this distance, leaving space between the buildings and the block outline, for example for a sidewalk.

To change a single edge, **drag** its handle in the Scene view. Hold ++shift++ to move all edges of that building by the same amount.

## Lot splitting

The **Rays**, **Guide Boundary Snap** and **Topology** sections control how the block is divided into lots. **Show Debug Overlays** draws the splitting process in the Scene view, which helps when tuning these settings.
