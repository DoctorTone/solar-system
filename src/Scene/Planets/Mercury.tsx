import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"
import { Vector3 } from "three";

const Mercury = () => {
  const surface = useTexture("./textures/mercury.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.MERCURY.distance, 0, 0);
  const position = distance.applyAxisAngle(new Vector3(0, 1, 0), PLANETS.MERCURY.angle);

  return (
    <>
    <Sphere
      position={position}
      scale={PLANETS.MERCURY.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path startDistance={PLANETS.MERCURY.distance}/>
    </>
  );
};

export default Mercury;
