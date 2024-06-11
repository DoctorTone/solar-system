import { useRef } from "react";
import { ShaderMaterial, Texture, Group } from "three";
import { useTexture, shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { SUN } from "../../state/Config";
import { SCENE } from "../../state/Config";
import sunVertexShader from "../../shaders/sunVertexShader.glsl";
import sunFragmentShader from "../../shaders/sunFragmentShader.glsl";

const RING_SCALE = 2;
const Sun = () => {
  const sunSurface1 = useTexture("./textures/sun.jpg");
  const sunSurface2 = useTexture("./textures/sun2.jpg");
  const noiseSurface = useTexture("./textures/noise.png");
  const sunBloom = useTexture("./textures/moonBloom.png");

  const SunMaterial = shaderMaterial(
    { time: 0, noise: new Texture(), sun1: new Texture(), sun2: new Texture() },
    sunVertexShader,
    sunFragmentShader
  );
  const materialRef = useRef<ShaderMaterial>();
  extend({ SunMaterial });
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    materialRef.current!.time += delta;
    ringRef.current!.scale.x += delta * RING_SCALE;
    ringRef.current!.scale.y += delta * RING_SCALE;
  });
  return (
    <>
      <group scale={SUN.radius}>
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
            <ringGeometry args={[1.1, 1.11]} />
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
