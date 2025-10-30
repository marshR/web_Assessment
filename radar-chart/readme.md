# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Chart.js visualization project that displays a bar chart using Vite as the build tool. The project demonstrates basic data visualization using Chart.js 4.x with a minimal setup.

## Architecture

**Single-File Application**: The entire application logic resides in `cities-chart.js`, which is directly referenced by `index.html`. There is no complex module structure - just one main JavaScript file that imports Chart.js and renders a bar chart.

**Chart Implementation**: The chart is initialized using an async IIFE (Immediately Invoked Function Expression) that creates a Chart.js instance with static data (years 2010-2016 with corresponding count values). Note: The chart targets an element with id `acquisitions`, but the HTML references id `cities-chart` - this is a discrepancy in the current code.

**Dependencies**:
- `chart.js` (v4.5.1) - Core charting library
- `@cubejs-client/core` (v0.31.0) - Listed but not currently used in the code
- `vite` (v6.4.1) - Build tool and dev server
- `parcel` (v2.6.2) - Listed in devDependencies but appears unused (likely legacy)

## Development Commands

**Start development server**:
```bash
npm run dev
```
This starts Vite dev server at http://127.0.0.1:5173

**Build for production**:
```bash
npm run build
```
Outputs to `dist/` directory.

## Important Notes

- The project uses Vite, not Parcel (despite Parcel being in devDependencies)
- There are no tests configured
- No linting or formatting tools are set up