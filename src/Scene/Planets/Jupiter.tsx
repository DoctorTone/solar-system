import { useRef } from "react";
import { Sphere, useTexture, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { Mesh, Vector3 } from "three";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Jupiter = () => {
  const surface = useTexture("./textures/jupiter.jpg");
  const showPath = useStore((state) => state.showPaths);
  const planetRef = useRef<Mesh>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.JUPITER.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.JUPITER.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 40;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.JUPITER.rotationSpeed;
  });

  return (
    <>
      <Sphere
        ref={planetRef}
        position={position}
        scale={PLANETS.JUPITER.radius}
        rotation-x={PLANETS.JUPITER.tilt}
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
          Jupiter
        </Text>
      </Billboard>
      {showPath && <Path startDistance={PLANETS.JUPITER.distance} />}
    </>
  );
};

export default Jupiter;
