---
icon: lucide/house
hide:
  - navigation
  - toc
---

:wtk-world:{ .wtk-hero-logo }

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
    - :wtk-component-terrain-spline-snap: [Terrain Spline Snap](terrain/terrain-spline-snap.md)

-   :wtk-more:{ .lg .middle } **[More](more/index.md)**

    ---

    Spline editing, spawners that place objects along and inside splines, ground snapping, and the settings shared by every module.

    - :wtk-component-spline-array-spawner: [Array Spawner](more/array-spawner.md)
    - :wtk-component-spline-area-spawner: [Area Spawner](more/area-spawner.md)
    - :wtk-component-ground-snap: [Ground Snap](more/ground-snap.md)

</div>

## :lucide-list-checks: Features

<div class="wtk-features" markdown>
<table markdown>
<tbody class="wtk-features-modelling" markdown>
<tr markdown><th colspan="2" markdown>:wtk-modelling: [Modelling](modelling/index.md)</th></tr>
<tr markdown><td markdown>:wtk-component-editable-mesh: [Editable Meshes](modelling/editable-meshes.md)</td><td>Edit any mesh in place as quads and polygons. Convert existing meshes, or keep their data in <code>.emesh</code> files.</td></tr>
<tr markdown><td markdown>:wtk-create-cube: [Primitives](modelling/primitives.md)</td><td>Draw planes, cubes, circles, cylinders, cones, spheres, tori, arches and free-form shapes in the Scene view.</td></tr>
<tr markdown><td markdown>:wtk-create-stairs: [Spline-based primitives](modelling/primitives.md#available-primitives)</td><td>Stairs, tubes and filled surfaces that rebuild when their spline changes.</td></tr>
<tr markdown><td markdown>:wtk-select: [Selection](modelling/selection.md)</td><td>Vertex, edge and face modes, loops, rings, paths, grow and shrink, filters, hiding and X-Ray.</td></tr>
<tr markdown><td markdown>:wtk-transform-options: [Transform](modelling/transform.md)</td><td>Pivot and orientation modes, proportional editing, typed values, and extrude while you drag.</td></tr>
<tr markdown><td markdown>:wtk-modify-extrude: [Editing tools](modelling/editing-tools.md#tools-with-options)</td><td>Extrude, Inset, Bevel, Bridge, Merge, Knife, Slide and Subdivide, previewed before you apply them.</td></tr>
<tr markdown><td markdown>:wtk-topology: [Topology](modelling/editing-tools.md#modify)</td><td>Connect, dissolve, triangulate, poke, fill, grid fill, rip, separate, merge meshes and more.</td></tr>
<tr markdown><td markdown>:lucide-waves: [Deformation](modelling/editing-tools.md#deformation)</td><td>Smooth, relax, shrink, fatten, push and pull vertices.</td></tr>
<tr markdown><td markdown>:wtk-shape-freeform: [Shapes](modelling/editing-tools.md#shapes)</td><td>Cut freeform strokes, lines, ellipses and rectangles into the faces, like a stencil.</td></tr>
<tr markdown><td markdown>:lucide-flip-horizontal-2: [Mirror and Subdivision Surface](modelling/editing-tools.md#mirror-and-subdivision-surface)</td><td>Mirror a mesh across its X, Y or Z plane, or smooth it by one subdivision level.</td></tr>
<tr markdown><td markdown>:wtk-normals: [Normals and shading](modelling/editing-tools.md#normals-and-shading)</td><td>Flip and recalculate normals, flat or smooth shading, smoothing by angle, hard edges and custom normals.</td></tr>
<tr markdown><td markdown>:wtk-mesh-cleanup: [Cleanup](modelling/editing-tools.md#cleanup)</td><td>Weld doubles, delete loose geometry, remove degenerate faces and validate the mesh.</td></tr>
<tr markdown><td markdown>:wtk-brush: [Vertex colors](modelling/editing-tools.md#vertex-colors)</td><td>Paint vertex colors with a brush, or fill the selection with a color.</td></tr>
<tr markdown><td markdown>:wtk-materials: [Materials](modelling/editing-tools.md#materials)</td><td>Add material slots and assign them to faces.</td></tr>
<tr markdown><td markdown>:lucide-search: [Modelling Tools search](modelling/editing-tools.md#modelling-tools-search)</td><td>Right-click for a searchable list of every tool, with pinned and recent tools. Repeat the last action with a key.</td></tr>
<tr markdown><td markdown>:lucide-wand-sparkles: [Automatic UVs](modelling/uvs.md#automatic-uvs)</td><td>UVs generated from the geometry in local or world space, plus lightmap UVs for baked lighting.</td></tr>
<tr markdown><td markdown>:wtk-uv-view: [UV View](modelling/uvs.md#the-uv-view)</td><td>Edit UVs by hand: seams, unfold, pack, straighten, gridify, texel density and projection.</td></tr>
<tr markdown><td markdown>:wtk-component-boolean-stack: [Booleans](modelling/booleans.md)</td><td>Non-destructive union, difference, intersection and slice, rebuilt in the background.</td></tr>
<tr markdown><td markdown>:wtk-component-mesh-decal-stroke: [Decal strokes](modelling/decals.md#stroke-lines)</td><td>Lines painted along splines, like lane markings, fitted to the surface below.</td></tr>
<tr markdown><td markdown>:wtk-component-mesh-decal-area: [Decal areas](modelling/decals.md#areas)</td><td>Patterned fills inside closed splines, like crosswalks and box junction grids.</td></tr>
</tbody>
<tbody class="wtk-features-splines" markdown>
<tr markdown><th colspan="2" markdown>:wtk-splines: [Splines](splines/index.md)</th></tr>
<tr markdown><td markdown>:wtk-new-splines: [Drawing splines](splines/spline-container.md#drawing-splines)</td><td>Draw knot by knot, freehand like a pencil stroke, or as circles, rectangles, polygons, stars, spirals and springs.</td></tr>
<tr markdown><td markdown>:wtk-selected-knots: [Knot editing](splines/spline-container.md#editing-knots)</td><td>Linear, Auto and Bezier knots, edited together in the Selected Knots panel, with split, extract and join.</td></tr>
<tr markdown><td markdown>:lucide-list-tree: [Path data](splines/spline-container.md#paths-and-path-data)</td><td>Several paths per container, and curves or gradients stored along them for other tools to read.</td></tr>
<tr markdown><td markdown>:wtk-component-spline-point-anchor: [Point Anchors](splines/point-anchors.md)</td><td>Keep an object attached to a point on a spline, following its position, rotation and scale.</td></tr>
<tr markdown><td markdown>:wtk-component-spline-link-group: [Link Groups](splines/link-groups.md)</td><td>Tie knots of different splines together so they always move as one.</td></tr>
</tbody>
<tbody class="wtk-features-roads" markdown>
<tr markdown><th colspan="2" markdown>:wtk-roads: [Roads](roads/index.md)</th></tr>
<tr markdown><td markdown>:wtk-component-editable-mesh-road: [Roads](roads/creating-roads.md)</td><td>Draw a road along a spline and get its lanes, sidewalks and curbs, or convert existing splines.</td></tr>
<tr markdown><td markdown>:lucide-layers: [Profiles and layers](roads/profiles-and-layers.md)</td><td>Cross-sections built from layers shaped by 2D profiles, with lanes, layer groups and spline ranges.</td></tr>
<tr markdown><td markdown>:lucide-file-box: [Road Rules](roads/creating-roads.md#road-rules)</td><td>Keep a road setup in an asset. Roads that use it rebuild when it changes.</td></tr>
<tr markdown><td markdown>:wtk-component-editable-mesh-junction: [Junctions](roads/junctions.md)</td><td>Generated where roads meet, with rounded corners and markings.</td></tr>
<tr markdown><td markdown>:lucide-paintbrush: [Markings](roads/junctions.md#markings-in-junctions)</td><td>Crossings and stop lines at every junction mouth, and markings that continue through junctions.</td></tr>
<tr markdown><td markdown>:lucide-palette: [Road materials](roads/profiles-and-layers.md#road-materials)</td><td>URP shaders for asphalt with tire tracks that follow the lanes, and for road paint.</td></tr>
<tr markdown><td markdown>:wtk-component-road-anchor-connection: [Anchored Connections](roads/anchored-connections.md)</td><td>Attach the end of a road to the side of another road or junction, for driveways and entrances.</td></tr>
<tr markdown><td markdown>:wtk-component-city-block-floor: [City Blocks](roads/city-blocks.md)</td><td>Fill the areas enclosed by roads with floors that follow the roads around them.</td></tr>
</tbody>
<tbody class="wtk-features-buildings" markdown>
<tr markdown><th colspan="2" markdown>:wtk-buildings: [Buildings](buildings/index.md)</th></tr>
<tr markdown><td markdown>:wtk-component-building: [Buildings](buildings/buildings-and-volumes.md)</td><td>Draw a footprint and get a modular building that regenerates when the footprint changes.</td></tr>
<tr markdown><td markdown>:lucide-boxes: [Volumes](buildings/buildings-and-volumes.md#volumes)</td><td>Stacked or side-by-side blocks, each with its own footprint, floors, walls and roof.</td></tr>
<tr markdown><td markdown>:lucide-brick-wall: [Volume Walls](buildings/buildings-and-volumes.md#walls)</td><td>Rows of prefab pieces or procedural shapes, floor by floor, with corners. Start one from a kit of prefabs.</td></tr>
<tr markdown><td markdown>:lucide-house: [Roofs](buildings/roofs.md)</td><td>A profile that closes into hips and ridges on any footprint, with presets, overhangs and eave trim.</td></tr>
<tr markdown><td markdown>:lucide-file-box: [Building Rules](buildings/building-rules.md)</td><td>Reusable building recipes with random floor counts and a live preview.</td></tr>
<tr markdown><td markdown>:wtk-component-building-block: [Building Blocks](buildings/building-blocks.md)</td><td>Split an area into lots and generate a building on each one.</td></tr>
<tr markdown><td markdown>:lucide-scan-eye: [Layout Overlay](buildings/buildings-and-volumes.md#layout-overlay)</td><td>See and change each side's wall, the corners and the row heights in the Scene view.</td></tr>
<tr markdown><td markdown>:lucide-list-checks: [Generation checks](buildings/buildings-and-volumes.md#checking-the-result)</td><td>The inspector lists what went wrong and jumps to the field that causes it.</td></tr>
<tr markdown><td markdown>:wtk-component-building-baked-mesh-output: [Baking](buildings/buildings-and-volumes.md#building-settings)</td><td>Combine the generated pieces into one lighter mesh with a collider.</td></tr>
</tbody>
<tbody class="wtk-features-terrain" markdown>
<tr markdown><th colspan="2" markdown>:wtk-terrain: [Terrain](terrain/index.md)</th></tr>
<tr markdown><td markdown>:wtk-component-terrain-stamp: [Stamps](terrain/stamps.md)</td><td>Non-destructive: terrains rebuild from a saved base plus every stamp, so any stamp can move, change or go at any time.</td></tr>
<tr markdown><td markdown>:lucide-blend: [Masks](terrain/masks.md)</td><td>Spline, shape, mesh and collider areas, noise, texture, height and slope fields, combined with blend modes and adjustments.</td></tr>
<tr markdown><td markdown>:lucide-mountain: [Height](terrain/height.md)</td><td>Raise, lower, flatten or clamp the ground toward a spline, a collider or a mesh.</td></tr>
<tr markdown><td markdown>:lucide-waves: [Erosion and Smoothing](terrain/erosion-and-smoothing.md)</td><td>Smoothing, thermal erosion and hydraulic erosion, seamless across terrain tiles.</td></tr>
<tr markdown><td markdown>:lucide-paintbrush: [Textures](terrain/textures.md)</td><td>Paint terrain layers, for example rock on steep slopes.</td></tr>
<tr markdown><td markdown>:lucide-trees: [Trees](terrain/trees.md)</td><td>Scatter trees with a density, a minimum spacing and random sizes and rotations.</td></tr>
<tr markdown><td markdown>:lucide-sprout: [Details](terrain/details.md)</td><td>Grass, flowers and small meshes from reusable Detail Sources.</td></tr>
<tr markdown><td markdown>:lucide-circle-dashed: [Holes](terrain/holes.md)</td><td>Cut openings for caves and tunnels, or close them again.</td></tr>
<tr markdown><td markdown>:lucide-file-box: [Stamp Presets](terrain/stamps.md#presets)</td><td>Save a stamp's layers and reuse them on new or existing stamps.</td></tr>
<tr markdown><td markdown>:wtk-component-terrain-spline-snap: [Terrain Spline Snap](terrain/terrain-spline-snap.md)</td><td>Keep splines on the terrain while stamps change it, also in Play mode and builds.</td></tr>
</tbody>
<tbody class="wtk-features-more" markdown>
<tr markdown><th colspan="2" markdown>:wtk-component-spline-spawner: [Spawners](more/index.md)</th></tr>
<tr markdown><td markdown>:wtk-component-spline-array-spawner: [Array Spawner](more/array-spawner.md)</td><td>Rows of objects along a spline, like fences, lamp posts and modular walls, from reusable rules.</td></tr>
<tr markdown><td markdown>:wtk-component-spline-area-spawner: [Area Spawner](more/area-spawner.md)</td><td>Copies of an object filling the inside of a spline, like cars in a parking lot.</td></tr>
</tbody>
<tbody class="wtk-features-workflow" markdown>
<tr markdown><th colspan="2" markdown>:wtk-world: [Workflow](getting-started/world-toolkit-window.md)</th></tr>
<tr markdown><td markdown>:wtk-world: [World Toolkit window](getting-started/world-toolkit-window.md)</td><td>Every module in one dockable window.</td></tr>
<tr markdown><td markdown>:wtk-context-tips: [Context tips](getting-started/world-toolkit-window.md#context-tips)</td><td>A Scene view panel that shows what clicks, drags and keys do right now.</td></tr>
<tr markdown><td markdown>:wtk-snap: [Snapping](modelling/transform.md#snapping)</td><td>Shared by every tool: grid, increments, vertices, edges, faces, spline knots and colliders.</td></tr>
<tr markdown><td markdown>:lucide-timer: [Rebuild settings](getting-started/world-toolkit-window.md#rebuild-settings)</td><td>Choose, per module, how often rebuilds run while you drag.</td></tr>
<tr markdown><td markdown>:wtk-component-ground-snap: [Ground Snap](more/ground-snap.md)</td><td>Keep objects on colliders and terrains while the ground changes, also in Play mode and builds.</td></tr>
<tr markdown><td markdown>:lucide-arrow-down-to-line: [Drop to Ground](more/ground-snap.md#drop-to-ground)</td><td>Place objects or spline knots on the ground in one step.</td></tr>
<tr markdown><td markdown>:lucide-camera: [Camera menu](more/settings.md#scene-view)</td><td>Hold a key in the Scene view to switch between top, left, front and perspective views.</td></tr>
<tr markdown><td markdown>:lucide-file-cog: [Settings files](getting-started/world-toolkit-window.md#settings)</td><td>Export, import or restore every World Toolkit setting, to share them with your team.</td></tr>
<tr markdown><td markdown>:lucide-square-terminal: [Command Line](more/command-line.md)</td><td>Commands for the Unity CLI that list, check, rebuild, model and render content, for scripts and AI agents.</td></tr>
</tbody>
</table>
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
