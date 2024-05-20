import React from "react";
import Sun from "./Planets/Sun";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import { Stars } from "@react-three/drei";

const System = () => {
  return (
    <>
      <Stars />
      <Sun />
      <Mercury />
      <Venus />
    </>
  );
};

export default System;
