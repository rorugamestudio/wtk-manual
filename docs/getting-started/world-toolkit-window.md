---
icon: wtk/world
---

# The World Toolkit Window

Most of World Toolkit is driven from one window. Open it from **Window > World Toolkit > Open**, and dock it next to the Inspector so it stays at hand.

## :lucide-layout-grid: Modules

The bar at the top of the window switches between modules:

| Module | What it's for |
|---|---|
| :wtk-modelling: [Modelling](../modelling/index.md) | Create primitives and edit meshes in the Scene view. |
| :wtk-roads: [Roads](../roads/index.md) | Draw roads and junctions. |
| :wtk-buildings: [Buildings](../buildings/index.md) | Generate and edit modular buildings. |
| :wtk-terrain: [Terrain](../terrain/index.md) | Shape terrains with stamps. |
| :wtk-more: [More](../more/index.md) | Splines, spawners and other extra tools. |

!!! info "One module at a time"
    The active module decides what you can click and edit in the Scene view: switching to **Roads** lets you work on road splines, switching to **Terrain** lets you work on stamps, and so on. Closing the window turns all module tools off.

The window remembers the last module you used while the editor stays open.

## :wtk-context-tips: Context tips

While a module is active, a small panel in the Scene view shows tips for what you're doing right now: which tool is active, what clicking and dragging will do, and which keys are available. When you're not sure what a click will do, look there first.

You can turn the tips off in the Modelling **Settings** tab, under **Scene View Overlays > Show Context Tips**.

## :lucide-timer: Rebuild settings

Roads, buildings, terrain stamps, spawners and Boolean Stacks rebuild as you edit them, and splines redraw. Each module's **Settings** tab has its own **Rebuilds** section that controls how often that happens while you drag, so a heavy module can wait while a light one updates live:

**Rebuild Debounce**
:   While the mouse is held down, waits until you stop moving before rebuilding. Releasing the mouse always applies the pending rebuild.

**Mouse Down Idle (s)**
:   How long you have to hold still, while dragging, before a rebuild happens. 1.5 seconds by default. Only used with **Rebuild Debounce** on.

**Update Interval (ms)**
:   With debounce off, the minimum time between rebuilds (16.6 ms by default, about once per frame). Zero rebuilds on every editor update.

!!! tip "Live feedback or smooth dragging"
    Turn debounce off for live feedback on small scenes, and keep it on for heavy roads, buildings or large terrains.

## :lucide-settings: Settings

Your World Toolkit preferences can be moved between machines or shared with your team. The commands are available in the window tab's menu (the three dots or right-click menu on the window title) under **Settings**, and in the **Settings Files** section of the [More](../more/index.md) module's **Settings** tab:

| Command | What it does |
|---|---|
| :lucide-upload: **Export Settings…** | Saves all World Toolkit settings to a `.json` file. |
| :lucide-download: **Import Settings…** | Loads settings from a `.json` file. Settings this version doesn't know are skipped, and the Console says how many. |
| :lucide-rotate-ccw: **Restore Default Settings** | After asking for confirmation, replaces all World Toolkit settings with the defaults that ship with World Toolkit. |

!!! note
    Import and restore reload the editor scripts, so every module picks up the new settings.
