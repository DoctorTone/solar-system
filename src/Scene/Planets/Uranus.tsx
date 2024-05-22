import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";

const Uranus = () => {
  const surface = useTexture("./textures/uranus.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.URANUS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.URANUS.angle
  );

  return (
    <>
      <Sphere position={position} scale={PLANETS.URANUS.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Path startDistance={PLANETS.URANUS.distance} />
    </>
  );
};

export default Uranus;
