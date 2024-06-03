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
        id="myCanvas"
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
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
        />
      </Canvas>
      <SystemUI />
    </>
  );
}

export default App;
