---
icon: wtk/create-cube
---

# Primitives

Primitives are the starting point for most models. Pick one in the **Create** tab of the Modelling panel, then draw it in the Scene view.

## :lucide-shapes: Available primitives

| | | |
|---|---|---|
| :wtk-create-plane: **Plane** | :wtk-create-cube: **Cube** | :wtk-create-circle: **Circle** |
| :wtk-create-cylinder: **Cylinder** | :wtk-create-cone: **Cone** | :wtk-create-sphere: **Sphere** |
| :wtk-create-torus: **Torus** | :wtk-create-arch: **Arch** | :wtk-create-freeform: **Free-form** |

The buttons under **Spline Based** create meshes from a spline. Select a single object with a spline first:

:wtk-create-stairs: **Stairs**
:   Creates editable stairs along the selected spline.

:wtk-create-tube: **Tube**
:   Creates an editable tube along the selected spline.

:wtk-create-surface: **Surface**
:   Creates a surface that fills the area enclosed by the selected spline. See [Surface](#surface).

Stairs, tubes and surfaces rebuild whenever you edit their spline. Their settings (steps and caps for stairs, sampling, roll, twist and corner rounding for tubes) are in the [Editable Primitive](editable-meshes.md#editable-primitives) inspector.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/tube-primitive.webp">
    <source src="../assets/videos/modelling/tube-primitive.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing a freeform spline and turning it into a tube.</figcaption>
</figure>

## :lucide-pencil-ruler: Drawing a primitive

1. Click a primitive in the **Create** tab.
2. **Drag** in the Scene view to draw its footprint. Hold ++ctrl++ while dragging to keep the footprint proportional.
3. For shapes with height (cube, cylinder, cone and so on), release the mouse, **move it** to set the height, and **click** to finish.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/primitive-creation.webp">
    <source src="../assets/videos/modelling/primitive-creation.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing a plane, then a cube on top of it.</figcaption>
</figure>

The **Create Mesh Options** panel appears in the Scene view while you draw. Its title names the primitive (for example **Cube Options**). It shows the dimensions (**Width**, **Depth**, **Height**, **Radius**...) and the detail settings (**Subdivisions**, **Sides**, **Segments**). You can type exact values there.

Some primitives have extra options in that panel:

:wtk-create-cylinder: **Cylinder**
:   **Inner Radius** opens a hole through the center (0 makes a solid cylinder). **Arc Degrees** sets the start and end angles, for a partial cylinder.

:wtk-create-torus: **Torus**
:   **Radius** goes to the center of the ring, and **Thickness** is the diameter of its round section. **Arc Degrees** works as for the cylinder.

:wtk-create-arch: **Arch**
:   **Radius**, **Wall Margin** (the distance from the opening to the outer border of the wall), **Thickness**, **Arc Degrees** and **Segments**. **Radial Edges** divides the front and back walls into faces between the arch and the border. **Add Front Wall**, **Add Back Wall**, **Add Inner Band** and **Add Wall Caps** choose which parts are built.

**Create** in that panel builds the primitive again at the last footprint you drew. If you haven't drawn one yet, it uses the typed dimensions at the world origin. **Cancel** stops the creation.

### :wtk-create-freeform: Free-form

**Free-form** draws a flat polygon point by point:

- **Click** to add each point.
- Press ++enter++ or **right-click** to finish the shape.

## :lucide-sliders-horizontal: Creation options

**Plane**, **Orient** and **Orient to First Step** are in the **Create Mesh Options** panel. **Snap First Point to Surface** is there too, and under **Create Options** in the **Create** tab, next to **Material** and **Vertex Color**.

**Plane**
:   The plane the footprint is drawn on: **XZ** (the ground), **XY**, **YZ**, or **Face Surface**, the surface under the cursor.

**Orient**
:   How the new object is rotated: aligned with the plane it's drawn on (**Placement Plane**), so its height follows that plane's normal, or upright along the world axes (**World Up**).

**Orient to First Step**
:   The first drag sets the direction of one side, and a second step sets the depth. Useful for drawing boxes that are rotated to match something already in the scene.

**Snap First Point to Surface**
:   Places the first point on the surface under the cursor, even if snapping is off. The following steps stay on the plane started by that first point.

**Material** and **Vertex Color** (under **Create Options**)
:   The material and vertex color given to new meshes.

## :lucide-mouse-pointer-click: From the GameObject menu

**GameObject > World Toolkit > Modelling** creates primitives without drawing them:

- **Plane**, **Cube**, **Circle**, **Cylinder**, **Cone**, **Sphere**, **Torus**, **Custom Polygon** and **Arch** are created with their default size, at the center of the Scene view, or as a child of the object you right-clicked in the Hierarchy. They get the **Create Options** material.
- **Free Form** starts drawing a [Free-form](#free-form) shape in the Scene view.
- **Stairs from Spline**, **Tube from Spline** and **Surface from Spline** work like the **Spline Based** buttons, on the selected spline.

## :wtk-create-surface: Surface

**Surface** fills the area enclosed by a spline path. Select the object with the spline and click **Surface**: the surface is created as a child of the spline object and fills its first path that has at least three knots.

Its settings are under **Surface** in the Editable Primitive inspector:

**Spline** and **Path Index**
:   The spline object, and which of its paths to fill.

**Fill**
:   How the inside is meshed: **Quad** (a grid of square cells **Quad Size** wide, cut to the outline), **Hex** (hexagonal cells of **Hex Size**), **Delaunay Subdivisions** (triangles about **Subdivision Size** wide, with heights interpolated from the outline), or **None** (a single polygon face).

**Curve Samples**
:   Points taken along each spline segment, from 1 to 64. Raise it for smoother curves.

**Flip**
:   Reverses every generated face, turning the surface and its shell inside out.

Under **Shell**, the surface can get a thickness:

**Shell**
:   The distance from the base to the extruded top. Zero keeps a single surface.

**Extrusion Direction**
:   The direction of the shell, in the spline's local space.

**Base Offset**
:   Moves the base along the extrusion direction before the shell is extruded.

**Add Top**, **Add Walls** and **Add Bottom**
:   Which parts of the shell are built.

Under **Materials**, each part can get its own material:

**Top Material**
:   The material of the surface, or of the shell's top. Empty keeps the renderer's first material.

**Wall Material** and **Bottom Material**
:   The materials of the shell's walls and bottom. Empty uses the top material.

When all three are empty, the renderer's materials are left as they are and the whole surface uses the first one.

!!! warning "If the surface doesn't appear"
    When a surface can't be built, the reason is written to the Console as a warning starting with *Surface:*, for example:

    - *Surface requires at least three spline knots.*
    - *Surface contour intersects or touches itself.* The outline crosses itself.
    - *Surface contour limit reached. Reduce curve samples.*

    Outlines don't have to be horizontal: an outline that stands vertical, or that overlaps itself seen from above, is meshed in the plane that fits it best.

## :wtk-component-editable-primitive: After creating

A new primitive keeps its parameters, so you can still change its size or number of segments in its **Editable Primitive** inspector. To edit its vertices, edges and faces, use **Make Editable** first. See [Editable Meshes](editable-meshes.md#editable-primitives).
