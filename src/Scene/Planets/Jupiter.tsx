import { useRef } from "react";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Group, Vector3, Mesh } from "three";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Jupiter = () => {
  const surface = useTexture("./textures/jupiter.jpg");
  const showPath = useStore((state) => state.showPaths);
  const animatePlanets = useStore((state) => state.animatePlanets);
  const planetRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const textRef = useRef<Group>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.JUPITER.distance, 0, 0);
  const position = distance.applyAxisAngle(
    SCENE.ROTATION_AXIS,
    PLANETS.JUPITER.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 40;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.JUPITER.rotationSpeed;
    if (animatePlanets) {
      groupRef.current!.position.copy(
        distance.applyAxisAngle(
          SCENE.ROTATION_AXIS,
          delta * PLANETS.JUPITER.animationSpeed
        )
      );
      textRef.current!.position.y = planetRef.current!.position.y + 40;
    }
  });

  return (
    <>
      <group ref={groupRef} position={position}>
        <Sphere
          args={[
            SCENE.PLANET_RADIUS,
            SCENE.PLANET_WIDTH_SEGMENTS,
            SCENE.PLANET_HEIGHT_SEGMENTS,
          ]}
          ref={planetRef}
          scale={PLANETS.JUPITER.radius}
          rotation-x={PLANETS.JUPITER.tilt}
        >
          <meshStandardMaterial map={surface} />
        </Sphere>
        <Billboard ref={textRef} position-y={position.y + 40}>
          <Text
            color="white"
            fontSize={SCENE.FONT_SIZE}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Jupiter
          </Text>
        </Billboard>
      </group>
      {showPath && <Path startDistance={PLANETS.JUPITER.distance} />}
    </>
  );
};

export default Jupiter;
