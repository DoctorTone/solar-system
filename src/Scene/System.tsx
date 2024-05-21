import React from "react";
import Sun from "./Planets/Sun";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Earth from "./Planets/Earth";
import { Stars } from "@react-three/drei";

const System = () => {
  return (
    <>
      <Stars />
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
    </>
  );
};

export default System;
