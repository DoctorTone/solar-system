import { Vector3 } from "three";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { SCENE } from "../../state/Config";

const Venus = () => {
  const atmosphere = useTexture("./textures/venus_atmosphere.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.VENUS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.VENUS.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 10;

  return (
    <>
      <Sphere position={position} scale={PLANETS.VENUS.radius}>
        <meshStandardMaterial map={atmosphere} />
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
          Venus
        </Text>
      </Billboard>
      <Path startDistance={PLANETS.VENUS.distance} />
    </>
  );
};

export default Venus;
