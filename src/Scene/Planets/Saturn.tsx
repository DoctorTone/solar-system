import { DoubleSide } from "three";
import { Sphere, useTexture, Ring } from "@react-three/drei";
import { PLANETS } from "../../state/Config";

const Saturn = () => {
  const surface = useTexture("./textures/saturn.jpg");
  const rings = useTexture("./textures/saturn_ring.png");

  return (
    <>
      <Sphere
        position-x={PLANETS.SATURN.distance}
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
    </>
  );
};

export default Saturn;
