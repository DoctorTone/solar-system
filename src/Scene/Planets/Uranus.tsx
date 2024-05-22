import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Uranus = () => {
  const surface = useTexture("./textures/uranus.jpg");

  return (
    <>
    <Sphere position-x={PLANETS.URANUS.distance} scale={PLANETS.URANUS.radius}>
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path startDistance={PLANETS.URANUS.distance}/>
    </>
  );
};

export default Uranus;
