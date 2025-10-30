# globe locations

interactive 3d globe with clickable location pins.

## what it does

displays a spinning earth that you can rotate and zoom
shows three cities with clickable pins: warsaw, kuala lumpur, and mexico city
each pin links to a specific url
pins hide when they're on the back side of the globe

## before you start

you need node.js 16 or higher and npm 8 or higher installed on your machine.
you also need an internet connection since the earth textures load from a cdn.

## setup

clone or download this project, then run:

```bash
npm install
```

this installs three.js and vite (the only dependencies you need).

## running it

start the dev server:

```bash
npm run dev
```

open your browser and go to http://127.0.0.1:5173

if port 5173 is already in use, vite will pick another port and show you which one.

## building for production

create a build:

```bash
npm run build
```

your files will be in the `dist/` folder.

## project structure

everything lives in two files:
- `index.html` - the page structure
- `main.js` - all the 3d globe logic and location data
