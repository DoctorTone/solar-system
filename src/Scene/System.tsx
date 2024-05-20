import React from "react";
import Sun from "./Planets/Sun";
import { Stars } from "@react-three/drei";

const System = () => {
  return (
    <>
      <Stars />
      <Sun />
    </>
  );
};

export default System;
