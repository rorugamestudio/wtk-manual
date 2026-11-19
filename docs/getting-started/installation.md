---
icon: lucide/download
---

# Installation

How to add World Toolkit to a Unity project, what it needs, and how to update it.

## :lucide-list-checks: Requirements

**Unity**
:   Unity 6.3, version 6000.3.26f1 or newer.

**Render pipeline**
:   The Universal Render Pipeline (URP). The Built-in Render Pipeline and HDRP aren't supported.

**Unity packages**
:   Burst, Collections, Mathematics, Universal RP and Unity Pipeline (which runs World Toolkit's [command-line commands](../more/command-line.md)). You don't need to add them yourself: World Toolkit lists them, and Unity adds any your project is missing when you import it.

!!! tip "Starting a new project"
    In the Unity Hub, create the project from the **Universal 3D** template: it renders with URP from the start. To add World Toolkit to an existing Built-in project, first [install URP into the project](https://docs.unity3d.com/6000.3/Documentation/Manual/urp/InstallURPIntoAProject.html).

## :lucide-store: Get World Toolkit

World Toolkit is sold on the Unity Asset Store:

[:lucide-shopping-cart: World Toolkit on the Asset Store](https://assetstore.unity.com/packages/tools/level-design/world-toolkit-modelling-roads-buildings-terrain-more-414812){ .md-button .md-button--primary }

Get it with the same Unity account you sign in to the editor with, so it shows up in the editor's **My Assets** list.

## :lucide-package: Import it into your project

1. Open your project and choose **Window > Package Management > My Assets**. The Package Manager opens on the assets of your Unity account.
2. Select **World Toolkit - Modelling, Roads, Buildings, Terrain & More** in the list. If the list is long, search for it by name.
3. Click **Download**. When the download finishes, the button becomes **Import** *version* **to project**: click it.
4. The **Import Unity Package** window lists everything in the package, all selected. Keep everything selected and click **Import**.
5. Wait while Unity adds the Unity packages World Toolkit depends on and compiles the scripts.

Everything goes into the **Assets/WorldToolkit** folder. Once it's done, the [About World Toolkit](world-toolkit-window.md#about-world-toolkit) window opens once, with links and quick tips to get started. Then open **Window > World Toolkit > Open** and carry on with [The World Toolkit Window](world-toolkit-window.md) and the [Quick Start](quick-start.md).

!!! tip "Keep the Samples folder"
    **Samples** is the largest folder in the package, but keep it: several defaults for new objects point to assets in it, such as the Road Rules for new roads, the Building Rules for new buildings, the Terrain Stamp Preset for new stamps and the spawners' rules. Without it, those fields start empty until you pick your own assets.

!!! warning "Keep the folder where it is"
    Don't move or rename **Assets/WorldToolkit**. World Toolkit loads its settings, icons and styles from that path, and stops working if it can't find them.

## :lucide-map: Sample scenes

The **Assets/WorldToolkit/Samples** folder has a few scenes to open and take apart:

| Scene | What it shows |
|---|---|
| `Samples.unity` | Most modules together: a terrain shaped by stamps, roads with junctions, city block floors, buildings, spawners and modelled meshes. |
| `Buildings/Georgian/georgian_example.unity` | A Georgian terrace built from the Georgian terrace Building Rules. |
| `Buildings/Villa/villa_example.unity` | A classical villa built from the villa Building Rules. |
| `Roads/NewYork/NYC_Roads_Sample.unity` | Roads and junctions made with New York style Road Rules. |

Next to them are the assets they use: Road Rules and road materials (Dublin and New York styles), the Georgian and villa building kits, terrain layers, trees and rocks, Terrain Stamp Presets and spawner prefabs. They make good starting points for your own setups.

## :lucide-palette: Color schemes

World Toolkit draws splines, knots, selections and the Scene view background in its own colors. Three settings files in **Assets/WorldToolkit** change them to feel closer to other 3D apps:

| File | Colors |
|---|---|
| `WorldToolkit.settings.blender.json` | Closer to Blender. |
| `WorldToolkit.settings.maya.json` | Closer to Maya. |
| `WorldToolkit.settings.cinema4d.json` | Closer to Cinema 4D. |

Load one with **Import Settings…**, and go back to the default colors with **Restore Default Settings** (see [Settings](world-toolkit-window.md#settings)). They only change colors.

## :lucide-refresh-cw: Updating

1. Back up your project, or commit it to version control.
2. Open **Window > Package Management > My Assets**. An arrow next to World Toolkit means an update is available. Select it to see what changed in the **Releases** tab, or read the [Changelog](../support/changelog.md).
3. Click **Download update**, then **Import update** *version* **to project**, and import everything.

!!! warning "Changes inside Assets/WorldToolkit are replaced"
    An update overwrites the files in **Assets/WorldToolkit** that changed in the new version, sample rules and materials included. Before changing a sample asset, duplicate it (++ctrl+d++) and move the copy outside that folder.

## :lucide-wrench: Troubleshooting

**World Toolkit isn't in My Assets**
:   Check that the editor is signed in with the same Unity account you got World Toolkit with.

**There's no World Toolkit menu after the import**
:   The scripts haven't compiled. Open the Console: a compile error anywhere in the project, also in other assets, stops new editor scripts from loading.

**The Console says `Unity.Burst`, `Unity.Collections` or `Unity.Mathematics` can't be found**
:   A Unity package World Toolkit depends on is missing. Open **Window > Package Management > Package Manager**, select **Unity Registry**, and install **Burst**, **Collections** and **Mathematics**.

**Materials show up pink**
:   The project doesn't render with URP. See [Install URP into an existing project](https://docs.unity3d.com/6000.3/Documentation/Manual/urp/InstallURPIntoAProject.html).

Still stuck? [Ask a question](https://github.com/rorugamestudio/wtk-manual/issues/new?template=question.yml), or see [Reporting Issues](../support/reporting-issues.md) if something is broken.
