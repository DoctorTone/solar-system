import { useRef } from "react";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3, Group, Mesh } from "three";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Neptune = () => {
  const surface = useTexture("./textures/neptune.jpg");
  const showPath = useStore((state) => state.showPaths);
  const animatePlanets = useStore((state) => state.animatePlanets);
  const planetRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const textRef = useRef<Group>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.NEPTUNE.distance, 0, 0);
  const position = distance.applyAxisAngle(
    SCENE.ROTATION_AXIS,
    PLANETS.NEPTUNE.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 20;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.NEPTUNE.rotationSpeed;
    if (animatePlanets) {
      groupRef.current!.position.copy(
        distance.applyAxisAngle(
          SCENE.ROTATION_AXIS,
          delta * PLANETS.NEPTUNE.animationSpeed
        )
      );
      textRef.current!.position.y = planetRef.current!.position.y + 20;
    }
  });

  return (
    <>
      <group ref={groupRef} position={position}>
        <Sphere
          ref={planetRef}
          scale={PLANETS.NEPTUNE.radius}
          rotation-x={PLANETS.NEPTUNE.tilt}
        >
          <meshStandardMaterial map={surface} />
        </Sphere>
        <Billboard ref={textRef} position-y={position.y + 20}>
          <Text
            color="white"
            fontSize={SCENE.FONT_SIZE}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Neptune
          </Text>
        </Billboard>
      </group>
      {showPath && <Path startDistance={PLANETS.NEPTUNE.distance} />}
    </>
  );
};

export default Neptune;
