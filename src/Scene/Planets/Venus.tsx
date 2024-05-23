import { useRef } from "react";
import { Vector3, Group } from "three";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Venus = () => {
  const atmosphere = useTexture("./textures/venus_atmosphere.jpg");
  const showPath = useStore((state) => state.showPaths);
  const animatePlanets = useStore((state) => state.animatePlanets);
  const planetRef = useRef<Group>(null);
  const textRef = useRef<Group>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.VENUS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    SCENE.ROTATION_AXIS,
    PLANETS.VENUS.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 10;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.VENUS.rotationSpeed;
    if (animatePlanets) {
      planetRef.current!.position.copy(
        distance.applyAxisAngle(
          SCENE.ROTATION_AXIS,
          delta * PLANETS.VENUS.animationSpeed
        )
      );
      textRef.current!.position.y = planetRef.current!.position.y + 20;
    }
  });

  return (
    <>
      <group ref={planetRef} position={position}>
        <Sphere scale={PLANETS.VENUS.radius} rotation-x={PLANETS.VENUS.tilt}>
          <meshStandardMaterial map={atmosphere} />
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
            Venus
          </Text>
        </Billboard>
      </group>
      {showPath && <Path startDistance={PLANETS.VENUS.distance} />}
    </>
  );
};

export default Venus;
