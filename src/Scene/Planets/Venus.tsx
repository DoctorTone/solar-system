import { Vector3 } from "three";
import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Venus = () => {
  const atmosphere = useTexture("./textures/venus_atmosphere.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.VENUS.distance, 0, 0);
  const position = distance.applyAxisAngle(new Vector3(0, 1, 0), PLANETS.VENUS.angle);

  return (
    <>
    <Sphere position={position} scale={PLANETS.VENUS.radius}>
      <meshStandardMaterial map={atmosphere} />
    </Sphere>
    <Path startDistance={PLANETS.VENUS.distance}/>
    </>
  );
};

export default Venus;
