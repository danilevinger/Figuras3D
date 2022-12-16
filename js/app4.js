import * as THREE from 'https://unpkg.com/three/build/three.module.js';
//cilindro
function main4() {
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
  

  
  
    const geometry = new THREE.SphereGeometry(1,64,16,0, 6.283185307179586, 0, 3,141592653589793);
    const material = new THREE.MeshPhongMaterial( {color: 0x44aa88} );
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
  
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  
  
    sphere.rotation.x = 35;
    sphere.rotation.y = 45;
    renderer.render(scene, camera);
  
  
  }
  
  main4();
  