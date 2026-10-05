# Erosion and Smoothing

## Smooth

The **Smooth** operation softens the terrain shape inside its [mask](masks.md).

**Iterations**
:   How many smoothing passes to run.

**Strength**
:   How strong each pass is.

**Radius**
:   How far each pass reaches.

## Erosion

The **Erosion** operation simulates natural weathering, giving terrain a more realistic, worn look.

### Mode

**Thermal**
:   Material slides down slopes steeper than the **Talus Angle**, softening cliffs and building up slopes at their base.

**Hydraulic**
:   Simulates rain droplets flowing downhill, picking up and dropping sediment. It carves gullies and channels.

### Common settings

**Iterations**, **Strength** and **Radius**
:   How long the simulation runs, how strong it is, and how far each step reaches.

**Seed**
:   Changes the random pattern.

### Hydraulic settings

| Setting | What it does |
|---|---|
| **Rain Amount** | Water carried by each droplet. |
| **Droplets Per Iteration** | How many droplets fall per iteration. |
| **Max Droplet Lifetime** | How many steps a droplet lives. |
| **Inertia** | How much droplets keep their direction instead of following the slope. |
| **Initial Speed** and **Gravity** | Droplet speed. |
| **Sediment Capacity** / **Min Sediment Capacity** | How much sediment a droplet can carry. |
| **Erosion Rate** / **Deposition Rate** | How fast droplets pick up and drop sediment. |
| **Evaporation Rate** | How fast droplets lose water. |
