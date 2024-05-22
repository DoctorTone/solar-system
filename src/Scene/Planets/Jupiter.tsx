import { Sphere, useTexture } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Jupiter = () => {
  const surface = useTexture("./textures/jupiter.jpg");

  return (
    <>
    <Sphere
      position-x={PLANETS.JUPITER.distance}
      scale={PLANETS.JUPITER.radius}
    >
      <meshStandardMaterial map={surface} />
    </Sphere>
    <Path startDistance={PLANETS.JUPITER.distance}/>
    </>
    
  );
};

export default Jupiter;
