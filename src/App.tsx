import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Box />
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
