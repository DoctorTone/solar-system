import { Sphere, useTexture, Text } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";
import { SCENE } from "../../state/Config";

const Neptune = () => {
  const surface = useTexture("./textures/neptune.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.NEPTUNE.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.NEPTUNE.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 20;

  return (
    <>
      <Sphere position={position} scale={PLANETS.NEPTUNE.radius}>
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
        Neptune
      </Text>
      <Path startDistance={PLANETS.NEPTUNE.distance} />
    </>
  );
};

export default Neptune;
