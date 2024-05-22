import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Saturn = () => {
  const surface = useTexture("./textures/saturn.jpg");

  return (
    <Sphere position-x={PLANETS.SATURN.distance} scale={PLANETS.SATURN.radius}>
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Saturn;
