import * as THREE from 'https://unpkg.com/three/build/three.module.js';
//cilindro
function main2() {
  
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1, 5 );
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const scene = new THREE.Scene();

  const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1.5, 30, 1, false, 0, 6.283185307179586);
  const material = new THREE.MeshPhongMaterial( {color: 0x44aa88} );
  const cylinder = new THREE.Mesh( geometry, material );
  scene.add( cylinder );

  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  cylinder.rotation.x = 35;
  cylinder.rotation.y = 45;

  renderer.render( scene, camera );
  
  
  }
  
  main2();
  