import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";

const Earth = () => {
  const surface = useTexture("./textures/earth_daymap.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.EARTH.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.EARTH.angle
  );

  return (
    <>
      <Sphere position={position} scale={PLANETS.EARTH.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Path startDistance={PLANETS.EARTH.distance} />
    </>
  );
};

export default Earth;
