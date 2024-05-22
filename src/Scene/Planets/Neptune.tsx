import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Neptune = () => {
  const surface = useTexture("./textures/neptune.jpg");

  return (
    <>
    <Sphere
      position-x={PLANETS.NEPTUNE.distance}
      scale={PLANETS.NEPTUNE.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path startDistance={PLANETS.NEPTUNE.distance}/>
    </>
  );
};

export default Neptune;
