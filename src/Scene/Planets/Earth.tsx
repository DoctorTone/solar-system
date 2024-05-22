import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3 } from "three";
import { SCENE } from "../../state/Config";

const Earth = () => {
  const surface = useTexture("./textures/earth_daymap.jpg");

  // Calculate planet position
  const distance = new Vector3(PLANETS.EARTH.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.EARTH.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 10;

  return (
    <>
      <Sphere position={position} scale={PLANETS.EARTH.radius}>
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
          Earth
        </Text>
      </Billboard>
      <Path startDistance={PLANETS.EARTH.distance} />
    </>
  );
};

export default Earth;
