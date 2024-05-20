import React from "react";
import { Sphere } from "@react-three/drei";
import { SUN } from "../../state/Config";

const Sun = () => {
  return (
    <Sphere scale={SUN.radius}>
      <meshStandardMaterial color={"yellow"} />
    </Sphere>
  );
};

export default Sun;
