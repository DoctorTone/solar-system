import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Neptune = () => {
  const surface = useTexture("./textures/neptune.jpg");

  return (
    <Sphere
      position-x={PLANETS.NEPTUNE.distance}
      scale={PLANETS.NEPTUNE.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
  );
};

export default Neptune;
