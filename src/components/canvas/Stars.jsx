import React, {
  useState,
  useEffect,
  Suspense,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  Preload,
  PointMaterial,
} from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  return <div>Stars</div>;
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 -z-10'>
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
