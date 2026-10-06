---
icon: lucide/settings
---

# Terrain Settings

The **Settings** tab of the Terrain panel.

## :lucide-spline: Splines

**Line**, **Closed Spline Fill** and **Line Thickness** set how stamp outlines look in the Scene view: their color, the color filling closed outlines, and their thickness.

## :lucide-eye: Preview

**Show Mask Preview**
:   Draws the selected stamp's mask on the terrain as a red overlay.

**Mask Preview Resolution**
:   The detail of the mask previews, from **128 x 128** to **1024 x 1024**, in the Scene view and in the stamp inspector's **Layer Masks** preview. Lower values update faster.

## :lucide-cpu: Processing

**Mode** chooses where stamps are computed. Keep **Auto** unless you're tracking down a problem.

| Mode | What it does |
|---|---|
| **Auto** | Uses the GPU where it can, and fast multi-threaded CPU code (Burst) for large jobs. |
| **Gpu** | Like **Auto**, and also moves some mask steps to the GPU. |
| **Burst Cpu** | Never uses the GPU. |
| **Scalar Cpu Debug** | Plain CPU code, without the GPU or Burst. The slowest; for debugging. |

## :lucide-box: Stamp Gizmos

While the Terrain module is active, each stamp shows a box around its area. **Show non-selected stamp gizmo** and **Show selected stamp gizmo** turn those boxes on or off, and **Non-selected stamp gizmo color** and **Selected stamp gizmo color** set their colors.

## :lucide-timer: Rebuilds

How often the terrain rebuilds while you drag a stamp. See [Rebuild settings](../getting-started/world-toolkit-window.md#rebuild-settings).

## :lucide-refresh-cw: Terrain Stamp Rebuilds

**Use progressive terrain rebuilds (experimental)**
:   Rebuilds the terrain in tiles, spread over several frames, which keeps the editor responsive on large terrains.

**Show terrain rebuild regions**
:   Draws the tiles being rebuilt.

**Heightmap tile resolution** and **Alphamap tile resolution**
:   The tile sizes, from **32 x 32** to **512 x 512**. Smaller tiles keep the editor more responsive; larger tiles finish sooner overall.

The last three settings are only available with progressive rebuilds on.
