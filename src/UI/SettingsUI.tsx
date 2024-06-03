import Switch from "@mui/material/Switch";
import { FormGroup, FormControlLabel } from "@mui/material";
import useStore from "../state/store";
import { ChangeEvent } from "react";

const SettingsUI = () => {
  const showPaths = useStore((state) => state.showPaths);
  const toggleShowPaths = useStore((state) => state.toggleShowPaths);
  const animatePlanets = useStore((state) => state.animatePlanets);
  const togglePlanetAnimation = useStore(
    (state) => state.togglePlanetAnimation
  );

  const togglePaths = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    toggleShowPaths(checked);
  };

  const toggleAnimation = (
    _: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    togglePlanetAnimation(checked);
  };

  return (
    <>
      <div id="solarUI" className="panel">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={showPaths}
                onChange={togglePaths}
                color="primary"
              />
            }
            label="Show paths"
          />
          <FormControlLabel
            control={
              <Switch
                checked={animatePlanets}
                onChange={toggleAnimation}
                color="primary"
              />
            }
            label="Animate planets"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default SettingsUI;
