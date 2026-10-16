---
icon: lucide/layers
---

# Loft

A loft is a surface that passes through a series of splines, its **profiles**, in order: a hull through its frames, a bottle through its rings, a pipe that changes shape along the way. Lofts are set up and edited in the **Loft** tab of the Modelling panel.

A loft is an [Editable Primitive](editable-meshes.md#editable-primitives): it keeps following its splines, and rebuilds when you edit or move them.

## :lucide-circle-plus: Making a loft

1. Draw the profile splines, or use splines that are already in the scene. Open or closed both work, as long as all the profiles of a loft are the same.
2. With no loft selected, open the **Loft** tab. It sets up a new loft.
3. Add the profiles, in the order the loft goes through them:
    - Click **Pick in Scene**, then click the splines in the Scene view. Click a profile again to remove it. Press ++enter++ or ++esc++, or click **Done Picking**, when you're done.
    - Or select the splines, in order, and click **Add Selected**. Every path of a selected spline object is added. Selected empty objects (objects without a renderer) become [point profiles](#profiles).
4. The Scene view previews the loft as you add profiles, and the top of the tab shows how many profiles and faces it has. Adjust its options in the sections below.
5. Click **Create Loft**. It needs at least two profiles.

The new loft is called **Loft**. It goes in the scene of its first profile, with its pivot at the center of the profiles, and gets the material and vertex color of [Create Options](primitives.md#creation-options). Then it's selected, and the tab starts the next loft with the same options and no profiles. The loft you're setting up is kept while Unity is open, even across script reloads.

### :lucide-mouse-pointer-click: Loft from Splines

**GameObject > World Toolkit > Modelling > Loft from Splines** lofts the selected splines in selection order, with the Loft tab's current options, without going through the tab. It needs two splines, or one spline and an empty object as a point profile. It's also in the [Modelling Tools search](editing-tools.md#modelling-tools-search).

### :lucide-square-terminal: From the command line

Scripts and AI agents make and change lofts with `wtk_modelling_create_loft`, which takes the same options as the tab and doesn't change the selection. See [Command Line](../more/command-line.md#modelling).

## :lucide-pencil: Editing a loft

Select a loft and the **Loft** tab edits it. If the selection holds a loft along with other objects, the tab edits that loft, so you can select splines next to it. Every change can be undone, and the loft rebuilds as you change it.

To add profiles to a loft:

- Click **Pick in Scene** and click the splines. Clicks on splines go to the pick while it's on, so the loft stays selected.
- Or keep the loft selected, ++shift++-click the splines to add them to the selection, and click **Add Selected**. The button shows how many of the selected profiles the loft doesn't have yet.

At the top of the tab:

**Make Editable**
:   Turns the loft into a regular [Editable Mesh](editable-meshes.md#editable-primitives), so you can edit its vertices, edges and faces. After that, it no longer follows its splines.

**New Loft**
:   Clears the selection and sets up a new loft.

A loft rebuilds when you edit one of its profile, rail or centerline splines, when you move one of those objects, and when you undo or redo a change to it. Moving the loft object itself doesn't take the surface away from its profiles: it rebuilds in place. Rebuilds go through the Modelling queue, so dragging a knot stays responsive; see [Rebuilds](settings.md#rebuilds).

The same settings are under **Loft** in the Editable Primitive inspector.

## :lucide-list-ordered: Profiles

The **Profiles** list holds the sections of the loft, in the order it goes through them. Drag a row to reorder it, and click **×** to remove it. **Reverse Order** runs the loft from the last profile to the first, and **Clear** removes every profile.

Select a row to see that profile's settings under the list:

**Spline**
:   The spline path used as this section of the loft.

**Point**
:   Closes the loft to this object's position instead of a spline, for a tip or a pointed end. Only the first and the last profile can be a point, and at least one profile must be a spline.

**Reverse**
:   Runs the profile backwards. With **Align Directions** on, only the first profile's direction matters.

**Seam**
:   Where a closed profile starts, in knots from its first knot (1.5 is halfway between knots 1 and 2). With **Align Seams** on, this offsets the aligned seam.

### In the Scene view

While the **Loft** tab is open, the Scene view shows the profiles of the loft: numbers give their order and arrows their direction. The profile selected in the list is highlighted, and rails and the centerline are labelled **R1**, **R2**... and **C**.

Closed profiles show their seam as a dot. **Drag** it along the profile to turn where the profile starts, and untwist the loft. Hold ++ctrl++ to snap it to the knots. Seams can't be dragged on a loft with rails.

## :lucide-spline: Shape

**Interpolation**
:   How the surface goes from one profile to the next:

    - **Smooth**: passes through every profile with continuous tangents.
    - **Straight**: joins neighbouring profiles with straight, ruled spans.
    - **Loose**: pulls the surface towards the inner profiles without passing through them.

**Closed Loop**
:   Joins the last profile back to the first, making a ring. It needs at least three profiles, and none of them can be a point.

**Guide**
:   Steers the surface between the profiles:

    - **None**: the profiles alone shape the surface.
    - **Rails**: the surface follows the **Rails**, spline paths that should touch every profile.
    - **Centerline**: the sections follow the **Centerline**, a path the profiles are carried along, keeping their angle to it. The profiles are taken in their order along it.

    **Pick Rails** and **Pick Centerline** pick them in the Scene view. Click splines to add or remove rails, then press ++enter++ or ++esc++; for the centerline, a single click picks it.

## :lucide-circle-dashed: Ends

How an open loft leaves its first profile (**Start**) and reaches its last (**End**). A closed loop has no ends.

**Condition**
:   With **Smooth** interpolation, **Free** lets the surface meet the profile on its own. **Direction** meets it at right angles, tilted by **Angle**. At a point profile, **Direction** rounds the tip.

**Angle** and **Weight**
:   With **Direction**: **Angle** tilts the direction outward (positive) or inward (negative), from -80 to 80 degrees. **Weight** is how far the direction carries into the surface, from 0 to 4.

**Cap**
:   Closes the profile with a face. It needs closed profiles.

## :lucide-align-center: Alignment

**Point Mapping**
:   Which points of neighbouring profiles the surface joins:

    - **Auto**: **Knots** when it can, **Arc Length** otherwise.
    - **Knots**: joins knot to knot. Every profile needs the same number of knots.
    - **Arc Length**: joins equal fractions of each profile's length.

    Rails always join where they touch the profiles.

**Align Directions**
:   Runs every profile the same way as the first one, so reversed splines don't fold the surface.

**Align Seams**
:   Turns the start of every closed profile to match its neighbour, so the surface doesn't twist.

## :lucide-grid-3x3: Tessellation

**Mode**
:   **Adaptive** places more faces where the surface bends and fewer where it's flat. **Uniform** uses fixed counts.

**Quality** (Adaptive)
:   A preset: **Draft** is coarse, **High** follows the curvature closely. The presets scale with the size of the loft, so the same preset looks the same on a bolt and on a bridge. **Custom** shows the two tolerances:

    - **Max Angle**: the largest bend allowed across one face, from 1 to 45 degrees.
    - **Max Deviation**: the largest distance allowed between a face and the true surface, in units.

**Max Edge Length** (Adaptive)
:   The longest face edge, in units. 0 leaves the length unlimited.

**Profile Segments** and **Span Segments** (Uniform)
:   The number of faces around each profile (up to 512), and between neighbouring profiles (up to 256).

The section ends with the current grid: the faces around the profiles × the faces across them.

## :lucide-palette: Surface

**UVs**
:   **World** keeps one UV unit per world unit. **Normalized** stretches 0 to 1 across the surface.

**Flip Normals**
:   Reverses every generated face, turning the surface inside out.

**Side Material**
:   The material of the loft surface. Empty keeps the renderer's first material.

**Cap Material**
:   The material of the caps. Empty uses the side material.

When both are empty, the renderer's materials are left as they are and the whole loft uses the first one.

## :lucide-triangle-alert: When the loft can't be built

When the profiles can't make a loft, the reason shows at the top of the tab, once there are at least two profiles. For a loft that already exists, it's also written to the Console as a warning starting with *Loft:*. For example:

- *A closed loft needs at least three profiles.*
- *Only the first and the last profile can be a point.*
- *Profiles mix open and closed splines. Open or close them so they match.*
- *The profiles are not in order along the centerline.*
- *Rail 1 does not run through the profiles in order.*
- *The rails cross each other between profiles. Each rail must stay in the same order around every profile.*
- *The loft is too dense. Lower the quality or raise the tolerances.*

Some problems still build a loft and show a note instead:

- *Profiles have different knot counts, so they are aligned by arc length.* **Point Mapping** is set to **Knots**, but the profiles don't match.
- *A rail does not touch every profile; the surface bridges the gap.*
- *Add rails, or the loft is built without them.* and *Choose a centerline spline; the loft is built without one.* The **Guide** is set but has nothing to follow yet.
