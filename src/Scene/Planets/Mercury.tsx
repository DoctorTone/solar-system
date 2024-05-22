import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Mercury = () => {
  const surface = useTexture("./textures/mercury.jpg");

  return (
    <>
    <Sphere
      position-x={PLANETS.MERCURY.distance}
      scale={PLANETS.MERCURY.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path />
    </>
  );
};

export default Mercury;
