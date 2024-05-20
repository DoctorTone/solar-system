import React from "react";
import Sun from "./Planets/Sun";
import Mercury from "./Planets/Mercury";
import { Stars } from "@react-three/drei";

const System = () => {
  return (
    <>
      <Stars />
      <Sun />
      <Mercury />
    </>
  );
};

export default System;
