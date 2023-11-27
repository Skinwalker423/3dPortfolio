import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        intensity={1}
        groundColor={"black"}
      />
      <pointLight
        position={isMobile ? [0.75, 1, 0] : [0.75, -0.5, 1]}
        intensity={isMobile ? 2 : 5}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={isMobile ? 4.5 : 3.5}
        position={isMobile ? [0, 0, 0] : [0, 0, 0]}
        rotation={
          isMobile
            ? [-0.01, -0.2, -0.3]
            : [-0.01, -0.2, -0.1]
        }
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 500px)"
    );

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleMediaQueryChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
