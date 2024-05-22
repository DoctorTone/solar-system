import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "./state/Config";
import Lights from "./Scene/Lights";
import System from "./Scene/System";
import SystemUI from "./UI/SystemUI";

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: SCENE.FOV,
          near: SCENE.NEAR,
          far: SCENE.FAR,
          position: SCENE.cameraPosition,
        }}
      >
        <Lights />
        <System />
        <OrbitControls
          makeDefault
          enablePan={true}
          enableRotate={true}
          enableDamping={true}
        />
      </Canvas>
      <SystemUI />
    </>
  );
}

export default App;
