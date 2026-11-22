---
icon: wtk/component-scene-label
---

# Scene Labels

A :wtk-component-scene-label: **Scene Label** names an object in the Scene view: a line rises from the object to a height you choose, with a label at its end that always faces the camera and keeps the same size on screen. Use it to find landmarks, districts or points of interest in a large scene from far away.

Labels are for the editor only. They're drawn in the Scene view and show nothing in Play mode or in a build.

## :lucide-plus: Adding a label

1. Select the object.
2. Choose **Add Component > World Toolkit > Scene Label**.

The label shows the object's name until you type your own text. An object can have one Scene Label.

Labels follow the Scene view's **Gizmos** toggle, and labels of objects hidden in the Scene view (Unity's scene visibility) aren't drawn. Turn the component off to hide one label.

## :lucide-settings-2: Settings

**Label**
:   The text of the label. Leave it empty to show the GameObject's name.

**Anchor**
:   Where the line starts. **Origin**: the object's position. **Bounds Top**: the middle of the top of its renderers' bounds, those of its own renderer or else of its children's, or its origin when it has none.

**Height Mode** and **Height**
:   Where the line ends, in meters. **Relative**: **Height** above where it starts. **Absolute**: at the world height **Height**.

**Color**
:   The color of the line and the text.

**Background Color**
:   The color behind the text. An alpha of 0 shows no background.

**Font Size**
:   The size of the text on screen, in points. It stays the same at any distance.

**Line Thickness**
:   The thickness of the line on screen, in pixels.

**Always On Top**
:   On, the line and the label draw over everything. Off, geometry in front of them hides them.
