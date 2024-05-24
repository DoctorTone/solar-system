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
import { SCENE, PLANETS, MODALS } from "../state/Config";

const System = () => {
  const { camera } = useThree();
  const currentView = useStore((state) => state.currentView);
  const toggleShowPaths = useStore((state) => state.toggleShowPaths);
  const setVisibleModal = useStore((state) => state.setVisibleModal);

  switch (currentView) {
    case "start":
      camera.position.copy(SCENE.cameraPosition);
      toggleShowPaths(true);
      setVisibleModal(MODALS.NONE);
      break;

    case "mercury":
      camera.position.copy(PLANETS.MERCURY.viewPosition);
      toggleShowPaths(false);
      setVisibleModal(MODALS.MERCURY);
      break;

    case "jupiter":
      camera.position.copy(PLANETS.JUPITER.viewPosition);
      toggleShowPaths(true);
      setVisibleModal(MODALS.JUPITER);
      break;

    default:
      break;
  }

  return (
    <>
      <Stars />
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
