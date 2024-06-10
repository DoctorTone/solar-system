import { Sphere, useTexture } from "@react-three/drei";
import { SUN } from "../../state/Config";
import { SCENE } from "../../state/Config";

const Sun = () => {
  const sunSurface = useTexture("./textures/sun.jpg");
  const sunBloom = useTexture("./textures/moonBloom.png");

  return (
    <>
      <Sphere
        args={[
          SCENE.PLANET_RADIUS,
          SCENE.PLANET_WIDTH_SEGMENTS,
          SCENE.PLANET_HEIGHT_SEGMENTS,
        ]}
        scale={SUN.radius}
      >
        <meshStandardMaterial color={"yellow"} map={sunSurface} />
      </Sphere>
      <group scale={SUN.radius * 3}>
        <sprite>
          <spriteMaterial attach="material" map={sunBloom} />
        </sprite>
      </group>
    </>
  );
};

export default Sun;
