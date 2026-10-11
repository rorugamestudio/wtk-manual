---
icon: lucide/history
---

# Changelog

What changed in each World Toolkit release, newest first.

## :lucide-tag: v0.0.0a1

Released: Oct 11, 2026 (current)

### :wtk-splines: Splines

- WTK's own spline system with knots, paths, link groups, pivots and anchors
- Shape modes: Circle, Rectangle, Polygon/Star, Spiral
- Free-form drawing, inserting knots mid-path, extracting to knots, and editing only selected knots
- Selection pivot controls and float curves shown in the Scene View

### :wtk-roads: Roads & Junctions

- Mesh roads with a rules system, plus a graph editor for road profiles and per-span materials
- Lanes: overrides per lane, divisions based on direction, one-way anchors, lane guides
- Road roll, curve quality, maximum and minimum strip lengths
- Junctions: several intersection modes, distances per mouth, biased S transitions, auto-rounded corners
- Junction markings (box markings included), wear masks, border merge
- City blocks: automatic discovery of block floors from the road network
- Road materials with normal and mask maps, and UV unfold for trim sheets
- Create roads and junctions from a selection

### :wtk-buildings: Buildings

- Procedural buildings made of floor rows, foundation rows and procedural rows
- Multiple independent row lists, curved walls, max piece count
- Building blocks: lots generated from guides, insets, an overall inset, chance rules
- Automatic mesh baking, snapshots, a piece pool, and corner post-processing
- 3D previews for rules and walls
- Sample kits: Villa and Dublin Georgian terrace

### :wtk-modelling: Modelling (Editable Mesh)

- Primitives: Cylinder (with inner radius), radial with angle ranges, Arch, Tube, and a Surface primitive built from a spline
- Boolean stack, mesh deformation, several face fill types
- Shading: Smooth by Angle and flat faces
- Vertex paint that can target face corners
- Vertex and edge slide, rectangle transforms, X-Ray preview, a pivot toolbar
- Tool search in the Scene View
- Mesh Decals in stroke and area modes
- Binary externalization of mesh data, with optional per-scene auto-externalize

### :wtk-uv-view: UV Editing

- 2D UV editor with snapping and a custom pivot
- Flip, rotate, Normalize U/V, align, join faces
- Island gridify and straighten, strip unwrapping, tile alignment grid
- Lightmap UV generation

### :wtk-terrain: Terrain

- Stamps: height, smoothing, erosion, holes, trees and details
- Masks: noise, mesh, height/slope (with incidence-based alpha), blur
- Snapping terrain to splines, with baking
- Support for multiple terrains and a mute option on stamps

### :wtk-component-spline-spawner: Spawners

- Spline Spawner, Spline Array Spawner (slots, corners, lattice, prefab chance) and Spline Area Spawner

### :wtk-more: Editor & Tooling

- Module windows (Roads, Buildings, Terrain, More), all built in UI Toolkit with SVG icons
- Snapping and Object Pivot overlays
- Debounce controls for rebuilds in each module
- Settings catalog that loads its defaults from `WorldToolkit.settings.initial.json`
- About window
- `wtk_*` CLI and MCP commands available
- Scene View performance overlay
