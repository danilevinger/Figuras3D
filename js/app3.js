import * as THREE from 'https://unpkg.com/three/build/three.module.js';
//cilindro
function main3() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
  
    const fov = 90; // Grados
    const aspect = window.innerWidth / window.innerHeight; // Relación de aspecto
    const near = 0.2; // Si el objeto está más cerca que esta distancia no se renderiza
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
  
  
  
    const geometry = new THREE.ConeGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial( {color: 0x44aa88} );
    const cone = new THREE.Mesh( geometry, material );
    scene.add( cone );
  
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  
  
    cone.rotation.x = 35;
    cone.rotation.y = 45;
    renderer.render(scene, camera);
  
  
  }
  
  main3();
  