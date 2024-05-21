import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Jupiter = () => {
  const surface = useTexture("./textures/jupiter.jpg");

  return (
    <Sphere
      position-x={PLANETS.JUPITER.distance}
      scale={PLANETS.JUPITER.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Jupiter;
