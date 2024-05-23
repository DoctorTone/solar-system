import { useRef } from "react";
import { DoubleSide, Vector3, Group } from "three";
import { Sphere, useTexture, Ring, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PLANETS } from "../../state/Config";
import Path from "../Path";
import { SCENE } from "../../state/Config";
import useStore from "../../state/store";

const Saturn = () => {
  const surface = useTexture("./textures/saturn.jpg");
  const rings = useTexture("./textures/saturn_ring.png");
  const showPath = useStore((state) => state.showPaths);
  const planetRef = useRef<Group>(null);

  // Calculate planet position
  const distance = new Vector3(PLANETS.SATURN.distance, 0, 0);
  const position = distance.applyAxisAngle(
    new Vector3(0, 1, 0),
    PLANETS.SATURN.angle
  );
  const textPosition = new Vector3().copy(position);
  textPosition.y += 40;

  useFrame((_, delta) => {
    planetRef.current!.rotation.y += delta * PLANETS.SATURN.rotationSpeed;
  });

  return (
    <>
      <group
        ref={planetRef}
        position={position}
        rotation-x={PLANETS.SATURN.tilt}
      >
        <Sphere scale={PLANETS.SATURN.radius}>
          <meshStandardMaterial map={surface} />
        </Sphere>
        <Ring
          args={[PLANETS.SATURN.radius + 2, PLANETS.SATURN.radius + 10, 32]}
          rotation-x={Math.PI / 2}
        >
          <meshStandardMaterial side={DoubleSide} map={rings} />
        </Ring>
      </group>
      <Billboard position={textPosition}>
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
      {showPath && <Path startDistance={PLANETS.SATURN.distance} />}
    </>
  );
};

export default Saturn;
