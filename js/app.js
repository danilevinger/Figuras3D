import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const fov = 75; // Grados
const aspect = window.innerWidth / window.innerHeight; // Relación de aspecto
const near = 0.1; // Si el objeto está más cerca que esta distancia no se renderiza
const far = 5; // Si el objeto está más lejos que esta distancia no se renderiza

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Create a renderer with Antialiasing
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;

const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);


cube.rotation.x = 35;
cube.rotation.y = 45;
renderer.render(scene, camera);