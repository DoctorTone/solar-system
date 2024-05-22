import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";

const Neptune = () => {
  const surface = useTexture("./textures/neptune.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.NEPTUNE.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.NEPTUNE.angle
  );

  return (
    <>
      <Sphere position={position} scale={PLANETS.NEPTUNE.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Path startDistance={PLANETS.NEPTUNE.distance} />
    </>
  );
};

export default Neptune;
