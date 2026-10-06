---
icon: lucide/waves
---

# Erosion and Smoothing

**Smooth** and **Erosion** reshape the ground using the heights around each point, inside the layer's [mask](masks.md). They read across the borders of neighbouring terrains of the same target, so tiles stay seamless.

## :lucide-waves: Smooth

The **Smooth** operation softens the terrain shape: each pass averages every point with its neighbours.

**Iterations**
:   How many smoothing passes to run.

**Strength**
:   How much of the smoothed result is used, from 0 to 1. The mask scales it further.

**Radius**
:   How far each pass reaches, in heightmap samples.

!!! note
    Smoothing and erosion only change points inside the mask, and smoothing only averages points inside it. To soften the ground around a shape too, widen the mask with a **Border** adjustment. See [Shape adjustments](masks.md#shape-adjustments).

## :lucide-droplets: Erosion

The **Erosion** operation simulates natural weathering, giving terrain a more realistic, worn look.

### Mode

:lucide-thermometer: **Thermal**
:   Material slides down slopes steeper than the **Talus Angle**, in degrees, softening cliffs and building up slopes at their base.

:lucide-cloud-rain: **Hydraulic**
:   Simulates rain droplets flowing downhill, picking up and dropping sediment. It carves gullies and channels. Droplets start at random points inside the mask, and stop when they leave it.

### Common settings

**Iterations**
:   For **Thermal**, how many passes to run. For **Hydraulic**, multiplied by **Droplets Per Iteration** to give the number of droplets (70,000 at most).

**Strength**
:   How much of the eroded result is used, from 0 to 1. The mask scales it further.

**Radius**
:   How far each step reaches, in heightmap samples. **Hydraulic** allows up to 8.

### Hydraulic settings

| Setting | What it does |
|---|---|
| **Seed** | Changes where the droplets fall. |
| **Inertia** | How much droplets keep their direction instead of following the slope. |
| **Rain Amount** | Water carried by each droplet. |
| **Sediment Capacity** / **Min Sediment Capacity** | How much sediment a droplet can carry. Fast, steep, heavy droplets carry more; the minimum applies even on flat ground. |
| **Erosion Rate** / **Deposition Rate** | How fast droplets pick up and drop sediment. |
| **Evaporation Rate** | How much water droplets lose at each step. |
| **Gravity** | How fast droplets speed up going downhill. |
| **Max Droplet Lifetime** | How many steps a droplet lives, 128 at most. |
| **Droplets Per Iteration** | How many droplets fall per iteration. |
| **Initial Speed** | How fast droplets start. |
