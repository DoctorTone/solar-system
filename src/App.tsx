import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Scene/Lights";
import System from "./Scene/System";

function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <System />
        <OrbitControls
          makeDefault
          enablePan={true}
          enableRotate={true}
          enableDamping={true}
        />
      </Canvas>
    </>
  );
}

export default App;
