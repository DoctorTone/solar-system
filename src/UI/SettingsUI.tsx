import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import FlareIcon from "@mui/icons-material/Flare";
import { FormGroup, FormControlLabel, Typography } from "@mui/material";
import useStore from "../state/store";
import { ChangeEvent, MouseEventHandler } from "react";

const SettingsUI = () => {
  const showPaths = useStore((state) => state.showPaths);
  const toggleShowPaths = useStore((state) => state.toggleShowPaths);
  const animatePlanets = useStore((state) => state.animatePlanets);
  const setExplode = useStore((state) => state.setExplode);
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

  const explode = (_: MouseEventHandler<HTMLAnchorElement>) => {
    setExplode(true);
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
        <IconButton onClick={explode}>
          <FlareIcon color="error" sx={{ mr: 1 }} />
          <Typography color={"white"}>Explode</Typography>
        </IconButton>
      </div>
    </>
  );
};

export default SettingsUI;
