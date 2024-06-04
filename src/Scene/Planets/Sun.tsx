import { Sphere, useTexture } from "@react-three/drei";
import { SUN } from "../../state/Config";
import { SCENE } from "../../state/Config";

const Sun = () => {
  const sunSurface = useTexture("./textures/sun.jpg");

  return (
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
  );
};

export default Sun;
