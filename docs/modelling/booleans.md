---
icon: wtk/component-boolean-stack
---

# Booleans

Booleans combine meshes: merge them, cut one with another, or keep only where they overlap. In World Toolkit they're **non-destructive**: the original meshes stay untouched and the result rebuilds whenever you move or edit them.

## :lucide-layers: How it works

A :wtk-component-boolean-stack: **Boolean Stack** holds the result, on its own object. Each mesh that takes part has a :wtk-component-boolean-operand: **Boolean Operand** component that points to the stack:

- One operand is the **Base**, the mesh everything else is applied to.
- Every other operand applies its **Operation** to the result so far, in order.

| Operation | Result |
|---|---|
| **Union** | Adds the operand to the result. |
| **Difference** | Cuts the operand out of the result. |
| **Intersection** | Keeps only the part where the result and the operand overlap. |
| **Slice** | Splits the result along the operand's surface. |

The result is computed in the background, so the editor stays responsive while a heavy stack rebuilds. Its faces keep the materials they had on their operand.

An operand can be another Boolean Stack: the stack waits until that one is up to date, then uses its result.

## :lucide-circle-plus: Creating a Boolean Stack

In the **Create** tab, under **Booleans**:

1. Select the meshes to combine. The **first** one you select becomes the Base.
2. Click **Create new Stack**.

This creates a new **Boolean Stack** object. The other meshes join it with the **Difference** operation, which you can change afterwards. With nothing selected, it creates an empty stack you can fill later.

<figure class="wtk-video">
  <video controls muted loop playsinline preload="none" poster="../../assets/videos/modelling/boolean.webp">
    <source src="../assets/videos/modelling/boolean.mp4" type="video/mp4">
  </video>
  <figcaption>Combining primitives into a Boolean Stack.</figcaption>
</figure>

To add another mesh to an existing stack, select the new mesh **first**, then the Boolean Stack **last**, and click **Add to stack**. The mesh joins at the end of the stack with **Difference**, or as the Base if the stack is empty.

**Auto Disable Mesh Renderer**
:   Hides the original meshes once they join a stack, so you only see the result.

**Auto Remove Colliders**
:   Removes colliders from the original meshes once they join a stack.

## :wtk-component-boolean-stack: Editing the stack

The Boolean Stack inspector lists its operands, in the order they're applied. For each one you can:

- Change its **Operation**.
- Choose which operand is the **Base**.
- **Mute** it to temporarily leave it out of the result.
- Swap it for another operand in the **Operand** field.

Drag the operands in the list to change their order. The Base always stays first.

**Rebuild** asks for a fresh build of the result, and **Make Editable** bakes it (see below).

When something prevents the build, a warning at the top of the inspector says why, for example:

- *No active Boolean Operand is marked as Base.*
- *Multiple Boolean Operands are marked as Base. Exactly one Base is required.*
- *The Base Boolean Operand is muted.*

### :wtk-component-boolean-operand: Boolean Operand

The **Boolean Operand** component on each mesh has the same settings as its row in the stack, and a few more:

**Stack**
:   The Boolean Stack this mesh belongs to.

**Base**, **Mute** and **Operation**
:   As in the stack's list.

**Order**
:   The position of the operand in the stack. Dragging operands in the stack's list sets it for you. **Order** and **Operation** are disabled on the Base, which always comes first.

**Show Input**
:   Keeps the operand's own mesh visible, to see and edit it. When it's off, the stack hides that mesh while its result is up to date.

**Invert Open Side**
:   For open meshes (like a single plane) used as cutters, flips which side counts as "inside".

!!! warning
    A stack needs exactly one active Base. If the Base is missing, muted, or more than one operand is marked as Base, the stack shows a warning and doesn't build.

## :lucide-hammer: Baking the result

**Make Editable** in the Boolean Stack inspector turns the result into a regular [Editable Mesh](editable-meshes.md) you can edit vertex by vertex. After that, it no longer updates from the operands. It's available once the result is up to date and the stack has no warning. **Make Editable** at the top of the **Topology** tab does the same for the selected stacks.

## :lucide-scissors: Surface Cut

For a quick, one-time cut that doesn't need a stack, use **Surface Cut** in the **Topology** tab. See [Editing Tools](editing-tools.md#boolean-destructive).
