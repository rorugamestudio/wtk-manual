# Booleans

Booleans combine meshes: merge them, cut one with another, or keep only where they overlap. In World Toolkit they're **non-destructive**: the original meshes stay untouched and the result rebuilds whenever you move or edit them.

## How it works

A **Boolean Stack** holds the result. Each mesh that takes part is a **Boolean Operand** in the stack:

- One operand is the **Base**, the mesh everything else is applied to.
- Every other operand applies an **Operation** to it, in order.

| Operation | Result |
|---|---|
| **Union** | Adds the operand to the result. |
| **Difference** | Cuts the operand out of the result. |
| **Intersection** | Keeps only the part where the result and the operand overlap. |
| **Slice** | Splits the result along the operand's surface. |

## Creating a Boolean Stack

In the **Create** tab, under **Booleans**:

1. Select the meshes to combine. The **first** one you select becomes the Base.
2. Click **Create new Stack**.

With nothing selected, it creates an empty stack you can fill later.

To add another mesh to an existing stack, select the new mesh **first**, then the Boolean Stack **last**, and click **Add to stack**.

**Auto Disable Mesh Renderer**
:   Hides the original meshes once they join a stack, so you only see the result.

**Auto Remove Colliders**
:   Removes colliders from the original meshes once they join a stack.

## Editing the stack

The Boolean Stack inspector lists its operands. For each one you can:

- Change its **Operation**.
- Choose which operand is the **Base**.
- **Mute** it to temporarily leave it out of the result.

The inspector also shows the stack's status (**Up to date**, **Rebuilding...**) and has a **Rebuild** button.

The **Boolean Operand** component on each mesh has more options:

**Show Input**
:   Shows the original mesh, to see and edit it.

**Invert Open Side**
:   For open meshes (like a single plane) used as cutters, flips which side counts as "inside".

!!! warning
    A stack needs exactly one active Base. If the Base is missing, muted, or more than one operand is marked as Base, the stack shows a warning and doesn't build.

## Baking the result

**Make Editable** in the Boolean Stack inspector turns the result into a regular [Editable Mesh](editable-meshes.md) you can edit vertex by vertex. After that, it no longer updates from the operands.

## Surface Cut

For a quick, one-time cut that doesn't need a stack, use **Surface Cut** in the **Topology** tab. See [Editing Tools](editing-tools.md#boolean-destructive).
