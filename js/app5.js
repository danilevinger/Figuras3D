import * as THREE from 'https://unpkg.com/three/build/three.module.js';
//cilindro
function main5() {
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
  
  
  
    const geometry = new THREE.TorusGeometry(0.5,0.2,27,69, 6.283185307179586, 0, 3,141592653589793);
    const material = new THREE.MeshPhongMaterial( {color: 0x44aa88} );
    const torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
  
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  
  
    torus.rotation.x = 35;
    torus.rotation.y = 45;
    renderer.render(scene, camera);
  
  
  }
  
  main5();
  