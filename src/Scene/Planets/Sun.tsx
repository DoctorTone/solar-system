import React from "react";
import { Sphere } from "@react-three/drei";

const Sun = () => {
  return (
    <Sphere>
      <meshStandardMaterial color={"yellow"} />
    </Sphere>
  );
};

export default Sun;
