import { Sphere, useTexture, Text } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";
import { SCENE } from "../../state/Config";

const Uranus = () => {
  const surface = useTexture("./textures/uranus.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.URANUS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.URANUS.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 20;

  return (
    <>
      <Sphere position={position} scale={PLANETS.URANUS.radius}>
        <meshStandardMaterial map={surface} />
      </Sphere>
      <Text
        color="white"
        fontSize={SCENE.FONT_SIZE}
        anchorX="center"
        anchorY="middle"
        outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
        outlineColor="black"
        position={textPosition}
      >
        Uranus
      </Text>
      <Path startDistance={PLANETS.URANUS.distance} />
    </>
  );
};

export default Uranus;
