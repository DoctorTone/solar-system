import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Venus = () => {
  const atmosphere = useTexture("./textures/venus_atmosphere.jpg");

  return (
    <Sphere position-x={PLANETS.VENUS.distance} scale={PLANETS.VENUS.radius}>
      <meshStandardMaterial map={atmosphere} />
    </Sphere>
  );
};

export default Venus;
