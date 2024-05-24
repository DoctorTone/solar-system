import { useRef } from "react";
import { DoubleSide, Vector3, Group } from "three";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { Rings } from "./Rings";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Saturn = () => {
  const surface = useTexture("./textures/saturn.jpg");
  const showPath = useStore((state) => state.showPaths);
  const animatePlanets = useStore((state) => state.animatePlanets);
  const groupRef = useRef<Group>(null);
  const planetRef = useRef<Group>(null);
  const textRef = useRef<Group>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.SATURN.distance, 0, 0);
  const position = distance.applyAxisAngle(
    SCENE.ROTATION_AXIS,
    PLANETS.SATURN.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 40;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.SATURN.rotationSpeed;
    if (animatePlanets) {
      groupRef.current!.position.copy(
        distance.applyAxisAngle(
          SCENE.ROTATION_AXIS,
          delta * PLANETS.SATURN.animationSpeed
        )
      );
      textRef.current!.position.y = planetRef.current!.position.y + 40;
    }
  });

  return (
    <>
      <group ref={groupRef} position={position}>
        <group ref={planetRef} rotation-x={PLANETS.SATURN.tilt}>
          <Sphere
            args={[
              SCENE.PLANET_RADIUS,
              SCENE.PLANET_WIDTH_SEGMENTS,
              SCENE.PLANET_HEIGHT_SEGMENTS,
            ]}
            scale={PLANETS.SATURN.radius}
          >
            <meshStandardMaterial map={surface} />
          </Sphere>
          <Rings scale={22} />
        </group>
        <Billboard ref={textRef} position-y={position.y + 40}>
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
      </group>
      {showPath && <Path startDistance={PLANETS.SATURN.distance} />}
    </>
  );
};

export default Saturn;
