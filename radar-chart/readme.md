# radar chart

// interactive radar chart that compares cities across different metrics.

## what it does

// shows data for three cities: warsaw, kuala lumpur, and mexico city
// displays five metrics: social impact, infrastructure, market attractiveness, system efficiency, and innovation
// compares global averages vs regional averages vs specific city data
// click the filter tags below the chart to switch between cities

## before you start

// you need node.js 16 or higher and npm 8 or higher installed on your machine.


## setup

// clone or download this project, then run:

```bash
npm install
```
// this installs chart.js and vite (the only dependencies you need).


## running it

// start the dev server:

```bash
npm run dev
```

// open your browser and go to http://127.0.0.1:5173


## building for production

// create a build:

```bash
npm run build
```
// your files will be in the `dist/` folder

## project structure

// everything lives in two files:
// - `index.html` - the page layout and styles
// - `cities-chart.js` - all the chart logic and data