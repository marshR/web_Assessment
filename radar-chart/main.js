// Location dataset
const locations = [
    {
        id: "1",
        location_name: "Warsaw",
        latitude: 52.2297,
        longitude: 21.0122,
        branch_url:
            "https://www.oliverwyman.com/in/our-expertise/global-locations/europe/poland/warsaw.html",
    },
    {
        id: "2",
        location_name: "Kuala Lumpur",
        latitude: 3.1319,
        longitude: 101.6841,
        branch_url:
            "https://www.oliverwyman.com/our-expertise/global-locations/asia-pacific/malaysia/kuala-lumpur.html",
    },
    {
        id: "3",
        location_name: "Mexico City",
        latitude: 19.4326,
        longitude: -99.1332,
        branch_url:
            "https://www.oliverwyman.com/our-expertise/global-locations/americas/mexico/mexico-city.html",
    },
];

// convert coordinates to 3D position on sphere
function latLonToVector3(lat, lon, radius = 2) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// container for pins
const pinContainer = document.createElement('div');
pinContainer.style.position = 'absolute';
pinContainer.style.top = '0';
pinContainer.style.left = '0';
pinContainer.style.width = '100%';
pinContainer.style.height = '100%';
pinContainer.style.pointerEvents = 'none';
document.body.appendChild(pinContainer);

// pins for each location
const pins = [];
locations.forEach(loc => {
    const pin = document.createElement('a');
       pin.href = loc.branch_url;
       pin.target = '_blank';
       pin.style.position = 'absolute';
       pin.style.width = '22px';
       pin.style.height = '28px';
       pin.style.display = 'flex';
       pin.style.flexDirection = 'column';
       pin.style.alignItems = 'center';
       pin.style.justifyContent = 'flex-start';
       pin.style.textDecoration = 'none';
       pin.style.pointerEvents = 'auto';
       pin.style.zIndex = '10';
       pin.title = loc.location_name;
       // map pin head (circle)
       const pinHead = document.createElement('div');
       pinHead.style.width = '12px';
       pinHead.style.height = '12px';
       pinHead.style.background = '#9e2613';
       pinHead.style.borderRadius = '50%';
       pinHead.style.boxShadow = '0 0 4px #333';
       pinHead.style.display = 'flex';
       pinHead.style.alignItems = 'center';
       pinHead.style.justifyContent = 'center';
       pinHead.style.color = '#fff';
       pinHead.style.fontWeight = 'bold';
       pinHead.style.fontSize = '10px';
       pinHead.textContent = '';
       pin.appendChild(pinHead);
       // map pin point (triangle)
       const pinPoint = document.createElement('div');
       pinPoint.style.width = '0';
       pinPoint.style.height = '0';
       pinPoint.style.borderLeft = '5px solid transparent';
       pinPoint.style.borderRight = '5px solid transparent';
       pinPoint.style.borderTop = '8px solid #9e2613';
       pinPoint.style.marginTop = '-3px';
       pin.appendChild(pinPoint);
       // Add label
       const label = document.createElement('span');
       label.textContent = loc.location_name;
    label.style.left = '22px';
    label.style.top = '0';
    label.style.transform = '';
       label.style.position = 'absolute';
       label.style.fontSize = '12px';
       label.style.fontWeight = 'bold';
       label.style.fontFamily = 'noto-sans, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Geneva, Verdana, sans-serif';
       label.style.background = 'rgba(255,255,255,0.9)';
       label.style.color = '#333';
       label.style.padding = '4px 8px';
       label.style.borderRadius = '10px';
       label.style.whiteSpace = 'nowrap';
       label.style.boxShadow = '0 0 2px #606060ff';
       pin.appendChild(label);
       pinContainer.appendChild(pin);
       pins.push({ pin, loc });
});

// update pin positions each frame
function updatePins() {
    pins.forEach(({ pin, loc }) => {
        const pos = latLonToVector3(loc.latitude, loc.longitude);
        // 3D position to 2D screen
        const worldPos = pos.clone();
        pos.project(camera);
        const x = (pos.x * 0.5 + 0.5) * renderer.domElement.clientWidth;
        const y = (-pos.y * 0.5 + 0.5) * renderer.domElement.clientHeight;
        pin.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
        // Hide pin if on far side of globe
        // Compare direction from globe center to pin and globe center to camera
        const globeCenter = new THREE.Vector3(0, 0, 0);
        const toCamera = camera.position.clone().sub(globeCenter).normalize();
        const toPin = worldPos.clone().sub(globeCenter).normalize();
        const visible = toCamera.dot(toPin) > 0;
        pin.style.display = visible ? 'flex' : 'none';
    });
}
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x141414);const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 15);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.display = 'block';
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.left = '0';
renderer.domElement.style.top = '0';
renderer.domElement.style.width = '100vw';
renderer.domElement.style.height = '100vh';
renderer.domElement.style.margin = '0 auto';
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.minDistance = 6;
controls.maxDistance = 20;
controls.target.set(0, 0, 0);
controls.update();
controls.target.set(0, 0, 0);
controls.update();

scene.add(new THREE.AmbientLight(0x333333));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

const textureLoader = new THREE.TextureLoader();
const earthMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
const bumpMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_bump_2048.jpg');
const specMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');

const geometry = new THREE.SphereGeometry(2, 64, 64);
const material = new THREE.MeshPhongMaterial({
    map: earthMap,
    bumpMap: bumpMap,
    bumpScale: 0.05,
    specularMap: specMap,
    specular: new THREE.Color('grey'),
    shininess: 10
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    updatePins();
}
animate();