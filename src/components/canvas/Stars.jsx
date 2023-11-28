import React, { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  Preload,
  PointMaterial,
} from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.2 })
  );

  console.log("sphere", sphere);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          color='#f272c8'
          size={0.002}
          transparent
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 -z-10'>
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
