import { DoubleSide, Vector3 } from "three";
import { Sphere, useTexture, Ring, Text, Billboard } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { SCENE } from "../../state/Config";

const Saturn = () => {
  const surface = useTexture("./textures/saturn.jpg");
  const rings = useTexture("./textures/saturn_ring.png");

  // Calculate planet position
  const distance = new Vector3(PLANETS.SATURN.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.SATURN.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 40;

  return (
    <>
      <Sphere position={position} scale={PLANETS.SATURN.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Billboard position={textPosition}>
        <Text
          color="white"
          fontSize={SCENE.FONT_SIZE}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Saturn
        </Text>
      </Billboard>
      <Ring
        args={[PLANETS.SATURN.radius + 2, PLANETS.SATURN.radius + 10, 32]}
        position={position}
        rotation-x={Math.PI / 2}
      >
        <meshStandardMaterial side={DoubleSide} map={rings} />
      </Ring>
      <Path startDistance={PLANETS.SATURN.distance} />
    </>
  );
};

export default Saturn;
