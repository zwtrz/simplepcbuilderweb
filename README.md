# Simple PC Parts Configurator

A beginner-friendly web project that helps users choose better PC part combinations based on **performance compatibility** and **build logic**.

This project is **not focused on price-to-performance**.  
The main goal is:

1. Think of a core part first (GPU, CPU, or Motherboard)
2. Get relevant options and pairing suggestions
3. Understand what combinations make sense for stable, balanced performance

## Project Focus

- Prioritizes **GPU, CPU, and Motherboard** recommendations
- Gives **practical compatibility and performance tips**
- Helps avoid poor combinations
- Treats other components as secondary for now (RAM, storage, PSU, case, cooling)

## Core Idea

The configurator starts from the part the user has in mind, then guides them through compatible and sensible options.

Examples:

- User selects a **GPU** -> website suggests CPU/motherboard pairings that can keep up
- User selects a **CPU** -> website suggests suitable motherboard families and GPU classes
- User selects a **Motherboard** -> website suggests compatible CPUs and balanced GPU directions

## What This Website Is Not

- A “cheapest build finder”
- A strict benchmark database
- A full marketplace or pricing comparison engine

## Current Stack

- `index.html` – page structure
- `styles.css` – visual styling
- `script.js` – interaction logic (current entry point for configurator behavior)

## Planned Feature Direction

- Part-first selection flow (GPU/CPU/Motherboard as entry points)
- Compatibility checks and warnings
- “Good combo” suggestions for balanced performance targets
- Explanation snippets for each recommendation (why it works / what to avoid)

## Usage

1. Open `index.html` in a browser
2. Start from the part you want to build around
3. Follow suggested options and tips to form a stronger combo

## Vision

Make PC planning simpler by guiding users toward **coherent, high-performance part combinations**, starting from the component they care about most.
