import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Mars = () => {
  const surface = useTexture("./textures/mars.jpg");

  return (
    <>
    <Sphere position-x={PLANETS.MARS.distance} scale={PLANETS.MARS.radius}>
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path startDistance={PLANETS.MARS.distance}/>
    </>
    
  );
};

export default Mars;
