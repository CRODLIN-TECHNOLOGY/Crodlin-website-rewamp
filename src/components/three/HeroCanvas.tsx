'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d0d0d, 0.018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0d0d0d, 1);

    // --- Sparse accent particles (just a handful for depth cues) ---
    const PARTICLE_COUNT = 80;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    const ember = new THREE.Color(0xd85a30);
    const grey  = new THREE.Color(0x555555);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 22 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const c = Math.random() < 0.1 ? ember : grey;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.25,
    });

    const particles = new THREE.Points(geo, particleMat);
    scene.add(particles);

    // --- Central wireframe: TorusKnot (glowing ember) ---
    const knotGeo = new THREE.TorusKnotGeometry(7, 2.2, 180, 28);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xd85a30,
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knot);

    // --- Outer icosahedron shell ---
    const icoGeo = new THREE.IcosahedronGeometry(13, 3);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // --- Floating ring ---
    const ringGeo = new THREE.TorusGeometry(18, 0.08, 4, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd85a30,
      transparent: true,
      opacity: 0.18,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // --- Mouse parallax ---
    let mx = 0, my = 0, tmx = 0, tmy = 0;

    const onMouse = (e: MouseEvent) => {
      tmx = (e.clientX / window.innerWidth  - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    // --- Resize ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Animation loop ---
    let raf: number;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Smooth mouse lag
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      // Rotate objects
      knot.rotation.x = t * 0.07;
      knot.rotation.y = t * 0.11;

      ico.rotation.y = t * 0.02;
      ico.rotation.z = t * 0.015;

      ring.rotation.z = t * 0.04;

      particles.rotation.y = t * 0.008;
      particles.rotation.x = t * 0.004;

      // Camera parallax
      camera.position.x += (mx * 6 - camera.position.x) * 0.04;
      camera.position.y += (-my * 3 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      knotGeo.dispose();
      icoGeo.dispose();
      ringGeo.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
