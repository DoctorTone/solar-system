import { useRef } from "react";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3, Mesh } from "three";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Earth = () => {
  const surface = useTexture("./textures/earth_daymap.jpg");
  const showPath = useStore((state) => state.showPaths);
  const planetRef = useRef<Mesh>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.EARTH.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.EARTH.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 10;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.EARTH.rotationSpeed;
  });

  return (
    <>
      <Sphere
        ref={planetRef}
        position={position}
        scale={PLANETS.EARTH.radius}
        rotation-x={PLANETS.EARTH.tilt}
      >
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
      {showPath && <Path startDistance={PLANETS.EARTH.distance} />}
    </>
  );
};

export default Earth;
