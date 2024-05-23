import { useRef } from "react";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Vector3, Mesh } from "three";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Uranus = () => {
  const surface = useTexture("./textures/uranus.jpg");
  const showPath = useStore((state) => state.showPaths);
  const planetRef = useRef<Mesh>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.URANUS.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.URANUS.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 20;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.URANUS.rotationSpeed;
  });

  return (
    <>
      <Sphere
        ref={planetRef}
        position={position}
        scale={PLANETS.URANUS.radius}
        rotation-x={PLANETS.URANUS.tilt}
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
          Uranus
        </Text>
      </Billboard>
      {showPath && <Path startDistance={PLANETS.URANUS.distance} />}
    </>
  );
};

export default Uranus;
