import { SCENE, SUN } from "../state/Config";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight
        args={[SUN.colour, SUN.intensity, SUN.distance]}
        position={SCENE.lightPosition}
      />
    </>
  );
};

export default Lights;
