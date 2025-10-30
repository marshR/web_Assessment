# Web Assessment

This repository contains a web assessment with multiple interactive data visualization challenges.

## Live Demo

Visit the GitHub Pages site to see both challenges in action:
https://YOUR_USERNAME.github.io/web_assessment/

## Challenges

### 1. Globe Locations
An interactive 3D globe visualization built with Three.js featuring:
- Rotating Earth with orbital controls
- Clickable city pins (Warsaw, Kuala Lumpur, Mexico City)
- Perspective-based pin visibility
- Smooth WebGL rendering

### 2. Radar Chart
A dynamic radar chart built with Chart.js featuring:
- Multi-dimensional city comparisons
- Interactive filtering system
- Accessibility features (ARIA labels, screen reader support)
- Responsive design

## Project Structure

```
web_assessment/
├── docs/                    # GitHub Pages deployment folder
│   ├── index.html          # Landing page
│   ├── globe-locations/    # Built globe challenge
│   └── radar-chart/        # Built radar chart challenge
├── globe-locations/         # Source code for globe challenge
│   ├── index.html
│   ├── main.js
│   └── package.json
└── radar-chart/            # Source code for radar chart challenge
    ├── index.html
    ├── cities-chart.js
    └── package.json
```

## Local Development

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0

### Running Challenges Locally

**Globe Locations:**
```bash
cd globe-locations
npm install
npm run dev
```

**Radar Chart:**
```bash
cd radar-chart
npm install
npm run dev
```

## Deployment to GitHub Pages

### Initial Setup

1. **Enable GitHub Pages in your repository:**
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/docs`
   - Click Save

2. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
   - GitHub will automatically deploy when you push to main

### Updating the Deployment

When you make changes to either challenge, rebuild and redeploy:

```bash
# Build globe-locations
cd globe-locations
npm run build

# Build radar-chart
cd ../radar-chart
npm run build

# Copy built files to docs
cd ..
cp -r globe-locations/dist/* docs/globe-locations/
cp -r radar-chart/dist/* docs/radar-chart/

# Commit and push
git add docs/
git commit -m "Update deployment"
git push origin main
```

## Technologies Used

- **Three.js** - 3D graphics library for WebGL
- **Chart.js** - Flexible JavaScript charting library
- **Vite** - Next generation frontend build tool
- **HTML5/CSS3** - Modern web standards
- **JavaScript (ES6+)** - Modern JavaScript features

## Browser Support

Both challenges work best in modern browsers with WebGL support:
- Chrome/Edge (recommended)
- Firefox
- Safari

## License

MIT
