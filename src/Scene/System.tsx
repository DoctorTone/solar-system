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
import { useThree } from "@react-three/fiber";
import useStore from "../state/store";
import { SCENE, PLANETS } from "../state/Config";

const System = () => {
  const { camera } = useThree();
  const currentView = useStore((state) => state.currentView);
  switch (currentView) {
    case "start":
      camera.position.copy(SCENE.cameraPosition);
      break;

    case "mercury":
      camera.position.copy(PLANETS.MERCURY.viewPosition);
      break;

    case "jupiter":
      camera.position.copy(PLANETS.JUPITER.viewPosition);
      break;

    default:
      break;
  }

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
