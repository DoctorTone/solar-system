import { useRef } from "react";
import { ShaderMaterial, Texture, Group, Vector3 } from "three";
import { useTexture, shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { SUN } from "../../state/Config";
import { SCENE, MODALS } from "../../state/Config";
import sunVertexShader from "../../shaders/sunVertexShader.glsl";
import sunFragmentShader from "../../shaders/sunFragmentShader.glsl";
import useStore from "../../state/store";

const RING_SCALE = 4;
const Sun = () => {
  const sunSurface1 = useTexture("./textures/sun.jpg");
  const sunSurface2 = useTexture("./textures/sun2.jpg");
  const noiseSurface = useTexture("./textures/noise.png");
  const sunBloom = useTexture("./textures/moonBloom.png");
  const explode = useStore((state) => state.explode);
  const setExplode = useStore((state) => state.setExplode);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const reset = useStore((state) => state.reset);
  const resetSimulation = useStore((state) => state.resetSimulation);
  let elapsedTime = 0;

  const SunMaterial = shaderMaterial(
    { time: 0, sun1: new Texture() },
    sunVertexShader,
    sunFragmentShader
  );
  const materialRef = useRef<ShaderMaterial>();
  const groupRef = useRef<Group>(null);
  extend({ SunMaterial });
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    materialRef.current!.time += delta;
    if (explode) {
      elapsedTime += delta;
      ringRef.current!.scale.x += delta * RING_SCALE;
      ringRef.current!.scale.y += delta * RING_SCALE;
      if (elapsedTime > 1) {
        groupRef.current!.scale.addScalar(delta * RING_SCALE * 20);
      }
      if (elapsedTime > 8) {
        setExplode(false);
        setVisibleModal(MODALS.SUN);
      }
    }
    if (reset) {
      ringRef.current!.scale.x = 1;
      ringRef.current!.scale.y = 1;
      groupRef.current!.scale.copy(
        new Vector3(SUN.radius, SUN.radius, SUN.radius)
      );
      elapsedTime = 0;
      resetSimulation(false);
      setVisibleModal(MODALS.NONE);
    }
  });
  return (
    <>
      <group ref={groupRef} scale={SUN.radius}>
        <mesh>
          <sphereGeometry
            args={[
              SCENE.PLANET_RADIUS,
              SCENE.PLANET_WIDTH_SEGMENTS,
              SCENE.PLANET_HEIGHT_SEGMENTS,
            ]}
          />
          <sunMaterial sun1={sunSurface1} ref={materialRef} />
        </mesh>
        <group ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh>
            <ringGeometry args={[0.9, 0.91]} />
            <meshStandardMaterial color={"blue"} />
          </mesh>
        </group>
      </group>
      <group scale={SUN.radius * 3}>
        <sprite>
          <spriteMaterial attach="material" map={sunBloom} />
        </sprite>
      </group>
    </>
  );
};

export default Sun;
