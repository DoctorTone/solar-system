import { useRef } from "react";
import { ShaderMaterial, Texture, Group } from "three";
import { useTexture, shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { SUN } from "../../state/Config";
import { SCENE } from "../../state/Config";
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
  let elapsedTime = 0;

  const SunMaterial = shaderMaterial(
    { time: 0, noise: new Texture(), sun1: new Texture(), sun2: new Texture() },
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
      }
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
          <sunMaterial
            noise={noiseSurface}
            sun1={sunSurface1}
            sun2={sunSurface2}
            ref={materialRef}
          />
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
