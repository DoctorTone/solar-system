import { Sphere, useTexture, shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { SUN } from "../../state/Config";
import { SCENE } from "../../state/Config";
import sunVertexShader from "../../shaders/sunVertexShader.glsl";
import sunFragmentShader from "../../shaders/sunFragmentShader.glsl";

const Sun = () => {
  const sunSurface = useTexture("./textures/sun.jpg");
  const sunBloom = useTexture("./textures/moonBloom.png");
  const SunMaterial = shaderMaterial({}, sunVertexShader, sunFragmentShader);
  extend({ SunMaterial });

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
          <sunMaterial />
        </mesh>
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
