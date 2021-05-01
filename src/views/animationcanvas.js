import { Canvas } from "react-three-fiber";
import Points from "./points";
import { Suspense } from "react";
//import {OrbitControls} from "@react-three/drei";

function AnimationCanvas() {
  return (
    <Canvas colorManagement camera={{ position: [200, -1, 0], fov: -10 }}>
      <ambientLight intensity={1} />
      <directionalLight
        position={[0, 30, 0]}
        intensity={3}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      {/* <OrbitControls
                autoRotate={true}
                autoRotateSpeed={0.3}
            /> */}
    </Canvas>
  );

}

export default AnimationCanvas;
