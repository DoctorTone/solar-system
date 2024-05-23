import React from "react";
import Sun from "./Planets/Sun";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Earth from "./Planets/Earth";
import Mars from "./Planets/Mars";
import Jupiter from "./Planets/Jupiter";
import Saturn from "./Planets/Saturn";
import Uranus from "./Planets/Uranus";
import Neptune from "./Planets/Neptune";
import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const System = () => {
  useFrame((state) => {
    console.log("State = ", state.camera.position);
  });

  return (
    <>
      {/* <Stars /> */}
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
    </>
  );
};

export default System;
