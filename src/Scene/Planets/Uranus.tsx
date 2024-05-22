import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Uranus = () => {
  const surface = useTexture("./textures/uranus.jpg");

  return (
    <Sphere position-x={PLANETS.URANUS.distance} scale={PLANETS.URANUS.radius}>
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Uranus;
