import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Earth = () => {
  const surface = useTexture("./textures/earth_daymap.jpg");

  return (
    <>
    <Sphere position-x={PLANETS.EARTH.distance} scale={PLANETS.EARTH.radius}>
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path startDistance={PLANETS.EARTH.distance}/>
    </>
  );
};

export default Earth;
