import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Venus = () => {
  const atmosphere = useTexture("./textures/venus_atmosphere.jpg");

  return (
    <>
    <Sphere position-x={PLANETS.VENUS.distance} scale={PLANETS.VENUS.radius}>
      <meshStandardMaterial map={atmosphere} />
    </Sphere>
    <Path startDistance={PLANETS.VENUS.distance}/>
    </>
  );
};

export default Venus;
