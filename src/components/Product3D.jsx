// src/components/Product3D.jsx
import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Custom easing function for smooth bounce
function easeOutElastic(x) {
  const c4 = (2 * Math.PI) / 3;
  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function Model() {
  const ref = useRef();
  const { scene } = useGLTF("/models/mainModel.glb");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const baseScale = isMobile ? 1.5 : 2.0;

  // Textures + materials + shadows
  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;

        if (obj.material) {
          const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];

          materials.forEach((mat) => {
            if (mat.map) {
              const tex = mat.map;
              tex.anisotropy = 16;
              tex.minFilter = THREE.LinearMipmapLinearFilter;
              tex.magFilter = THREE.LinearFilter;
              tex.generateMipmaps = true;
              tex.needsUpdate = true;
            }

            if ("roughness" in mat && mat.roughness !== undefined) {
              mat.roughness = Math.min(mat.roughness, 0.7);
            }
            if ("metalness" in mat && mat.metalness !== undefined) {
              mat.metalness = Math.min(mat.metalness, 0.2);
            }

            mat.needsUpdate = true;
          });
        }
      }
    });
  }, [scene]);

  const dropProgress = useRef(0);
  const hasStarted = useRef(false);
  const currentRotation = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    // Start position (above the view)
    ref.current.position.y = 5;
    ref.current.scale.setScalar(baseScale * 0.7);
    
    // Trigger animation after a tiny delay
    setTimeout(() => {
      hasStarted.current = true;
    }, 100);
  }, [baseScale]);

  useFrame((state, delta) => {
    if (!ref.current || !hasStarted.current) return;

    // 🎯 Ultra-smooth rotation with lerp interpolation
    const smoothDelta = Math.min(delta, 0.1); // Cap delta to prevent frame drops
    currentRotation.current += smoothDelta * 0.35;
    
    // Apply smooth rotation with easing for buttery movement
    const targetY = currentRotation.current;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.08;

    // Drop + bounce animation (1.2 seconds)
    if (dropProgress.current < 1) {
      dropProgress.current += smoothDelta / 1.2;
      const t = Math.min(dropProgress.current, 1);
      const eased = easeOutElastic(t);

      const startY = 5;
      const endY = -0.2;
      const currentY = startY + (endY - startY) * eased;
      ref.current.position.y = currentY;

      const startScale = baseScale * 0.7;
      const endScale = baseScale;
      const currentScale = startScale + (endScale - startScale) * eased;
      ref.current.scale.setScalar(currentScale);
    }
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}

export default function Product3D() {
  return (
    <>
      <style>{`
        .product3d-wrapper {
          width: 100%;
          height: 420px;
          position: relative;
        }

        .product3d-wrapper canvas {
          outline: none;
        }

        @media (max-width: 1024px) {
          .product3d-wrapper {
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .product3d-wrapper {
            height: 260px;
          }
        }
      `}</style>

      <div className="product3d-wrapper">
        <Canvas
          
          camera={{ position: [2.6, 1.7, 3.2], fov: 42 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            physicallyCorrectLights: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
            alpha: true, // Transparent background
          }}
          style={{ background: 'transparent' }} // Remove grey background
        >
          <Suspense fallback={null}>
            {/* Key light with soft shadows */}
            <directionalLight
              position={[3, 5, 4]}
              intensity={1.0}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={1}
              shadow-camera-far={15}
              shadow-camera-left={-6}
              shadow-camera-right={6}
              shadow-camera-top={6}
              shadow-camera-bottom={-6}
              shadow-bias={-0.0001}
            />

            {/* Soft pink fill light */}
            <directionalLight
              position={[-2, 3, -3]}
              intensity={0.4}
              color={new THREE.Color("#F4C2C2")}
            />

            <ambientLight intensity={0.4} />

            <Model />

            {/* Ultra-soft contact shadow */}
            
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>
    </>
  );
}
