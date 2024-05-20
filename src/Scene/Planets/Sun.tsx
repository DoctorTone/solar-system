import React from "react";
import { Sphere, useTexture } from "@react-three/drei";
import { SUN } from "../../state/Config";

const Sun = () => {
  const sunSurface = useTexture("./textures/sun.jpg");

  return (
    <Sphere scale={SUN.radius}>
      <meshStandardMaterial color={"yellow"} map={sunSurface} />
    </Sphere>
  );
};

export default Sun;
