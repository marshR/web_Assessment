# readme.md

This is an interactive 3D globe visualization project built with Three.js and Vite. The project displays a rotating Earth with clickable location pins that link to specific branch URLs. It demonstrates 3D graphics, texture mapping, camera controls, and dynamic HTML element positioning over a 3D scene.

## Architecture

**Single-File Application**: The entire application logic resides in `main.js`, which is directly referenced by `index.html`. The JavaScript file handles both the 3D globe rendering and the 2D pin overlay.

**Key Components**:
- **3D Globe**: Rendered using Three.js with realistic Earth textures (color, bump, and specular maps)
- **Location Pins**: HTML elements positioned dynamically over 3D coordinates, with visibility culling for the far side of the globe
- **Interactive Controls**: OrbitControls allow users to rotate, zoom, and explore the globe
- **Location Data**: Hardcoded array of 3 locations (Warsaw, Kuala Lumpur, Mexico City) with coordinates and URLs

**Dependencies**:
- `three` (v0.180.0) - 3D graphics library for rendering the globe and managing the scene
- `vite` (v6.4.1) - Build tool and dev server

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

## Project Files

- `index.html` - Minimal HTML structure that loads the main script
- `main.js` - All application logic (3D scene setup, location pins, animation loop)
- `OrbitControls.js` - Placeholder file with comments (actual OrbitControls imported from three.js examples)
- `package.json` - Project dependencies and scripts

## Important Notes

- The project uses ES6 modules with Three.js
- OrbitControls is imported from `three/examples/jsm/controls/OrbitControls.js`
- Earth textures are loaded from Three.js CDN (requires internet connection)
- Pins are HTML elements overlaid on the WebGL canvas using CSS transforms
- No tests or linting configured
