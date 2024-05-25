import Switch from '@mui/material/Switch';
import { blue } from "@mui/material/colors";
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

  const togglePaths = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    toggleShowPaths(checked);
  };

  const toggleAnimation = (
    event: ChangeEvent<HTMLInputElement>,
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
                color='warning'
              />
            }
            label="Show paths"
          />
          <FormControlLabel
            control={
              <Switch
                checked={animatePlanets}
                onChange={toggleAnimation}
                color='warning'
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
