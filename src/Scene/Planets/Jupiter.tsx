import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";

const Jupiter = () => {
  const surface = useTexture("./textures/jupiter.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.JUPITER.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.JUPITER.angle
  );

  return (
    <>
      <Sphere position={position} scale={PLANETS.JUPITER.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Path startDistance={PLANETS.JUPITER.distance} />
    </>
  );
};

export default Jupiter;
