import { useRef } from "react";
import { Vector3, Mesh } from "three";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Venus = () => {
  const atmosphere = useTexture("./textures/venus_atmosphere.jpg");
  const showPath = useStore((state) => state.showPaths);
  const planetRef = useRef<Mesh>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.VENUS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.VENUS.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 10;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.VENUS.rotationSpeed;
  });

  return (
    <>
      <Sphere
        ref={planetRef}
        position={position}
        scale={PLANETS.VENUS.radius}
        rotation-x={PLANETS.VENUS.tilt}
      >
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
      {showPath && <Path startDistance={PLANETS.VENUS.distance} />}
    </>
  );
};

export default Venus;
