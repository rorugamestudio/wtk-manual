# Building Rules

A **Building Rules** asset is a reusable building recipe: its volumes, walls, roofs and floor counts. Give the same rules to many buildings and they share a style, while each footprint still gets its own shape.

## Creating rules

- **From a building you've set up:** right-click the Building component and choose **Create Building Rules From Current Setup...**.
- **From scratch:** **Assets > Create > World Toolkit > Buildings > Rules**.
- **With the [Style Wizard](style-wizard.md):** pick a front and side wall, and it creates the rules for you.

## What rules contain

**Volumes**
:   The same volume setup as on a building. See [Volumes](buildings-and-volumes.md#volumes).

**Floors** and **Subfloors**
:   Ranges with chances. A building using these rules rolls how many floors and subfloors it gets, so a street of buildings with the same rules varies in height.

## Using rules

- **On one building:** set its **Rules Override**.
- **On new buildings:** set them under **New Building Defaults** in the Buildings panel.
- **On many buildings at once:** select them and click **Apply to Selected** in the Buildings panel.
- **On building blocks:** list them under **Building Rule Chances**. See [Building Blocks](building-blocks.md).

Editing a rules asset updates every building that uses it.

A building can still keep its own floor count: enable **Lock Floors** or **Lock Subfloors** on it.
