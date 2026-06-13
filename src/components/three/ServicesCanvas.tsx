'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  scrollRef: React.MutableRefObject<number>; // 0 → 1 through section
}

export default function ServicesCanvas({ scrollRef }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 5.5;

    // ─── Central group (logo + rings) ───────────────────────
    const group = new THREE.Group();
    scene.add(group);


    // Logo disc (Crodlin logo as texture)
    const texLoader = new THREE.TextureLoader();
    const logoTex = texLoader.load('/logo_without_name-removebg-preview.png');
    logoTex.colorSpace = THREE.SRGBColorSpace;

    const discGeo = new THREE.PlaneGeometry(3.2, 3.2);
    const discMat = new THREE.MeshBasicMaterial({
      map:         logoTex,
      transparent: true,
      depthWrite:  false,
      side:        THREE.DoubleSide,
      alphaTest:   0.05,
    });
    const disc = new THREE.Mesh(discGeo, discMat);
    group.add(disc);


    const bubbles: never[] = []; // bubbles removed

    // ─── Mouse parallax ──────────────────────────────────────
    let mx = 0, my = 0, cmx = 0, cmy = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    // ─── Resize ──────────────────────────────────────────────
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    // ─── Animate ─────────────────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      const scroll = scrollRef.current;

      cmx += (mx - cmx) * 0.04;
      cmy += (my - cmy) * 0.04;

      // Scroll drives Y rotation of main group
      group.rotation.y = scroll * Math.PI * 3 + cmx * 0.25;
      group.rotation.x = -cmy * 0.18;


      void bubbles; // no bubbles

      // Camera subtle parallax
      camera.position.x += (cmx * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (-cmy * 0.25 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [scrollRef]);

  return <div ref={mountRef} className="w-full h-full" />;
}
