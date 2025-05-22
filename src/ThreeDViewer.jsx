import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { gsap } from "gsap";
import "/styles/ThreeDViewer.css";

function ThreeDViewer({ modelPath }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const { clientWidth: width, clientHeight: height } = mountRef.current;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.setClearColor(0xffffff, 0);
    mountRef.current.appendChild(renderer.domElement);

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (item, loaded, total) => {
        console.log(`Loading ${item}: ${loaded}/${total}`);
        const progress = Math.round((loaded / total) * 100);
        document.getElementById('loading-text').innerText = `${progress}%`;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    };

    loadingManager.onLoad = () => {
      console.log('All assets loaded');
      document.getElementById('loading-screen').style.display = 'none';
    };

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.target.set(0, 0, 0);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader(loadingManager)
      .setDataType(THREE.FloatType)
      .load('/images/studio-scene.hdr', (hdrEquirectangular) => {
        const envMap = pmremGenerator.fromEquirectangular(hdrEquirectangular).texture;
        scene.environment = envMap;
        hdrEquirectangular.dispose();
        pmremGenerator.dispose();
      });

    const gltfLoader = new GLTFLoader(loadingManager);

    gltfLoader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(5.8, 5.8, 5.8);
        scene.add(model);
      },
      undefined,
      (error) => console.error('Error loading the model:', error)
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    function spinModel(scene) {
      gsap.to(scene.rotation, {
        y: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    }

    controls.addEventListener("start", () => {
      gsap.killTweensOf(scene.rotation);
    });
    spinModel(scene);

    const handleResize = () => {
      const { clientWidth: newWidth, clientHeight: newHeight } = mountRef.current;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (
        mountRef.current &&
        renderer.domElement &&
        mountRef.current.contains(renderer.domElement)
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeDViewer;