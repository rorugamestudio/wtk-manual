---
icon: lucide/wand-sparkles
---

# Style Wizard

The **Building Style Wizard** creates a [Building Rules](building-rules.md) asset from a couple of walls, without setting up volumes by hand. It's the quickest way to get a new style going.

Open it from **Window > World Toolkit > Building Style Wizard**.

## :lucide-list-ordered: Using it

**Front Wall**
:   The wall for the first footprint side, and every other side after it.

**Side Wall**
:   The wall that alternates with the front one. Leave it empty to use the front wall everywhere.

**Floors** and **Subfloors**
:   How many floors above and below ground. They start at 4 and 0.

**Apply To Selection**
:   Also gives the new rules to the selected buildings and regenerates them. On by default.

1. Select the buildings you want to restyle, if any.
2. Pick a **Front Wall**, and a **Side Wall** if you want two.
3. Set **Floors** and **Subfloors**.
4. Click **Create Rules** and choose where to save the asset. By default, it's named after the front wall.

The new asset is highlighted in the Project window. To use it for the buildings you draw next, set it under **New Building Defaults** in the Buildings panel.

The rules hold one volume whose sides take turns between the two walls (front, side, front, side) starting from the footprint's first side. The floor counts are fixed, and there's no roof. Once created, the rules are a regular asset: open them to add volumes, a roof, more walls or random floor counts.

!!! note "Selected buildings get a copy"
    **Apply To Selection** copies the rules into the buildings, so later edits to the rules don't reach them. To keep buildings in step with the rules, set the rules as their **Rules Override** instead. See [Using rules](building-rules.md#using-rules).

## :lucide-boxes: Starting from a kit of prefabs

If you have wall, window and door prefabs but no wall asset yet, World Toolkit can build a first :lucide-brick-wall: **Volume Wall** from them:

1. Select the prefabs in the Project window.
2. Choose **Assets > Create > World Toolkit > Buildings > Volume Wall From Selected Prefabs**. It's also in the Project window's right-click menu, under **Create**.

The prefabs are sorted by what their names contain:

| Name contains | Used for |
|---|---|
| `door` | A **ground** row, one floor high, with the doors placed once. |
| `window` or `win_` | An **upper** row for all the other floors, with the windows distributed along each side. |
| `corner` | The wall's corner, if the prefab has a vertical cut at its middle. Without one, it counts as a plain wall piece. |
| anything else | Plain wall pieces. The first one (or the first window or door, without any) fills each row: it's stretched on both sides of the doors and windows, so any side length is covered. |

Without a corner prefab, the wall gets a flat procedural corner in the material of its first wall piece. Prefabs without a mesh are skipped.

The new wall is saved next to the first prefab, named after what the prefab names have in common, and selected. Open it to tune the rows, then pick it as the **Front Wall** of the wizard.
