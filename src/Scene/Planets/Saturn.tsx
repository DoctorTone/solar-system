import { DoubleSide, Vector3 } from "three";
import { Sphere, useTexture, Ring } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path"

const Saturn = () => {
  const surface = useTexture("./textures/saturn.jpg");
  const rings = useTexture("./textures/saturn_ring.png");

  // Calculate planet position
  const distance = new Vector3(PLANETS.SATURN.distance, 0, 0);
  const angle = -Math.PI/4;
  const position = distance.applyAxisAngle(new Vector3(0, 1, 0), angle);

  return (
    <>
      <Sphere
        position={position}
        scale={PLANETS.SATURN.radius}
      >
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Ring
        args={[PLANETS.SATURN.radius + 2, PLANETS.SATURN.radius + 10, 32]}
        position-x={PLANETS.SATURN.distance}
        rotation-x={Math.PI / 2}
      >
        <meshStandardMaterial side={DoubleSide} map={rings} />
      </Ring>
      <Path startDistance={PLANETS.SATURN.distance}/>
    </>
  );
};

export default Saturn;
