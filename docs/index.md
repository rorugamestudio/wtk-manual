---
icon: lucide/house
hide:
  - navigation
  - toc
---

# World Toolkit Manual

World Toolkit is a set of world-building tools for Unity: model meshes in the Scene view, draw roads with generated junctions, generate modular buildings, and shape terrain with non-destructive stamps.

[:lucide-rocket: Get started](getting-started/index.md){ .md-button .md-button--primary }
[:lucide-zap: Quick Start](getting-started/quick-start.md){ .md-button }
[:wtk-world: The World Toolkit Window](getting-started/world-toolkit-window.md){ .md-button }

## :lucide-layout-grid: Modules

<div class="grid cards" markdown>

-   :wtk-modelling:{ .lg .middle } **[Modelling](modelling/index.md)**

    ---

    Create primitives and edit meshes directly in the Scene view, then unwrap, combine and decorate them.

    - :wtk-create-cube: [Primitives](modelling/primitives.md)
    - :wtk-modify-extrude: [Editing Tools](modelling/editing-tools.md)
    - :wtk-uv-view: [UVs](modelling/uvs.md)
    - :wtk-component-boolean-stack: [Booleans](modelling/booleans.md)
    - :wtk-component-mesh-decal-area: [Decals](modelling/decals.md)

-   :wtk-splines:{ .lg .middle } **[Splines](splines/index.md)**

    ---

    The spline system shared by every other module: one set of controls for roads, footprints, stamps and spawners.

    - :wtk-component-spline-container: [Spline Container](splines/spline-container.md)
    - :wtk-component-spline-point-anchor: [Point Anchors](splines/point-anchors.md)
    - :wtk-component-spline-link-group: [Link Groups](splines/link-groups.md)

-   :wtk-roads:{ .lg .middle } **[Roads](roads/index.md)**

    ---

    Road networks with layered cross-sections, and junctions generated where roads meet.

    - :wtk-component-editable-mesh-road: [Creating Roads](roads/creating-roads.md)
    - :wtk-component-editable-mesh-junction: [Junctions](roads/junctions.md)
    - :wtk-component-city-block-floor: [City Blocks](roads/city-blocks.md)

-   :wtk-buildings:{ .lg .middle } **[Buildings](buildings/index.md)**

    ---

    Modular buildings from a footprint and a set of rules, one at a time or a whole block of lots.

    - :wtk-component-building: [Buildings and Volumes](buildings/buildings-and-volumes.md)
    - :lucide-file-box: [Building Rules](buildings/building-rules.md)
    - :wtk-component-building-block: [Building Blocks](buildings/building-blocks.md)

-   :wtk-terrain:{ .lg .middle } **[Terrain](terrain/index.md)**

    ---

    Shape Unity terrains with non-destructive stamps: height, textures, trees and details, limited by masks.

    - :wtk-component-terrain-stamp: [Stamps](terrain/stamps.md)
    - :lucide-mountain: [Height](terrain/height.md)
    - :lucide-trees: [Trees](terrain/trees.md)
    - :wtk-component-terrain-snap: [Terrain Snap](terrain/terrain-snap.md)

-   :wtk-more:{ .lg .middle } **[More](more/index.md)**

    ---

    Spline editing, spawners that place objects along and inside splines, and the settings shared by every module.

    - :wtk-component-spline-array-spawner: [Array Spawner](more/array-spawner.md)
    - :wtk-component-spline-area-spawner: [Area Spawner](more/area-spawner.md)

</div>

## :lucide-life-buoy: Need help?

<div class="grid cards" markdown>

-   :lucide-bug:{ .lg .middle } **[Report a bug](https://github.com/rorugamestudio/wtk-manual/issues/new?template=bug_report.yml)**

    ---

    Something doesn't work as described. See [what to include](support/reporting-issues.md#writing-a-good-bug-report).

-   :lucide-lightbulb:{ .lg .middle } **[Request a feature](https://github.com/rorugamestudio/wtk-manual/issues/new?template=feature_request.yml)**

    ---

    An idea for a new tool, or for making an existing one better.

-   :lucide-circle-help:{ .lg .middle } **[Ask a question](https://github.com/rorugamestudio/wtk-manual/issues/new?template=question.yml)**

    ---

    Not sure how to do something? Ask, the answer may end up in this manual.

</div>
