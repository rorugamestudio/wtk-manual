---
icon: lucide/file-box
---

# Building Rules

A :lucide-file-box: **Building Rules** asset is a reusable building recipe: its volumes, walls, roofs and floor counts. Give the same rules to many buildings and they share a style, while each footprint still gets its own shape.

## :lucide-file-plus: Creating rules

- **From a building you've set up:** right-click the :wtk-component-building: **Building** component and choose **Create Building Rules From Current Setup...**, then pick where to save the asset.
- **From scratch:** **Assets > Create > World Toolkit > Buildings > Rules**.
- **With the [Style Wizard](style-wizard.md):** pick a front and side wall, and it creates the rules for you.

Rules made from a building capture what it generates now: its volumes (or those of its **Rules Override**), and its current floor and subfloor counts as single entries. A volume with its own **Footprint Spline** keeps that shape as an **Explicit Footprint**, since an asset can't point at a spline in the scene: its knots become corners joined by straight walls.

## :lucide-list-tree: What rules contain

**Volumes**
:   The same volume setup as on a building. See [Volumes](buildings-and-volumes.md#volumes).

**Floor Chances**
:   A list of floor ranges, each with a **Chance**. A building using these rules rolls one entry, then a floor count inside its range, so a street of buildings with the same rules varies in height. Turn on **Random** in an entry to give it a minimum and a maximum. Chances are weights: an entry with twice the chance of another is picked twice as often. With no entries, buildings get one floor.

**Subfloor Chances**
:   The same for floors below ground (basements, foundations). With no entries, buildings get none.

### The floor chart

Above the **Floor Chances** list, a chart shows what the entries add up to:

- a summary with the average and the range of floor counts,
- a bar with each entry's share of the chances. **Drag** the divider between two entries to move chance from one to the other, without changing the others (only with a single asset selected),
- a histogram of how likely each floor count is, with the subfloor counts hanging below it. Hover a column to read its chance.

If every chance is 0, the first entry is always used, and the summary says so.

## :lucide-scan-eye: Previewing rules

The **Building Preview** at the bottom of the inspector generates the rules on a test footprint, rolling floors and chances from the preview seed. The asset's thumbnail in the Project window shows the same building.

| Control | What it does |
|---|---|
| **Iso** | Uses an orthographic camera instead of a perspective one. |
| **Wire** | Shows the wireframe of the generated mesh. |
| Shape menu | The test footprint: **Rectangle**, **L Shape**, **U Shape**, **Octagon** or **Angled**. Concave and angled shapes show how walls and corners behave on inside corners and odd angles. |
| **W** and **D** | Width and depth of the test footprint, in meters. |
| **Seed** and **Reroll** | The seed the preview rolls with. **Reroll** picks a random one. |
| **Grid** | Shows four seeds side by side to compare variations. |
| **Reset** | Resets the preview camera. Drag in the preview to orbit, scroll to zoom. |

The top of the inspector lists problems in the volumes: volumes without walls, wall entries without a wall asset or with a **Chance** of 0, walls and roofs that have issues of their own, and corners only some walls of a volume define. **Click** one to jump to its field.

## :lucide-link: Using rules

There are two ways to give rules to a building, and they behave differently when you edit the rules later.

**As a Rules Override**
:   Set the building's **Rules Override**. The building generates straight from the rules, and editing the rules regenerates it. Unlocked floor and subfloor counts are rolled from the rules with the building's seed.

**As a copy**
:   These copy the rules' volumes into the building and roll its floor counts:

    - **New Building Defaults** in the Buildings panel, for every new building you draw,
    - **Apply to Selected** in the Buildings panel, for the selected buildings,
    - **Apply To Selection** in the [Style Wizard](style-wizard.md),
    - **Building Rule Chances** on [building blocks](building-blocks.md), for the buildings of each lot.

    The building's volumes are its own afterwards, so you can change them on that building alone.

!!! warning "Copies don't follow the rules"
    Editing a rules asset only updates the buildings that use it as their **Rules Override**. Buildings that got a copy keep it: apply the rules to them again, or set the rules as their **Rules Override**. Walls and roofs are shared either way, so editing a Volume Wall or Roof asset updates every building that uses it.

A building can still keep its own floor count: enable **Lock Floors** or **Lock Subfloors** on it.
