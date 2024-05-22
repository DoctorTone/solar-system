import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";

const Mars = () => {
  const surface = useTexture("./textures/mars.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.MARS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.MARS.angle
  );

  return (
    <>
      <Sphere position={position} scale={PLANETS.MARS.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Path startDistance={PLANETS.MARS.distance} />
    </>
  );
};

export default Mars;
