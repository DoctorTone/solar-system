import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import { FormGroup, FormControlLabel } from "@mui/material";
import useStore from "../state/store";
import { ChangeEvent } from "react";

const SystemUI = () => {
  const showPaths = useStore((state) => state.showPaths);
  const toggleShowPaths = useStore((state) => state.toggleShowPaths);

  const togglePaths = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    toggleShowPaths(checked);
  };

  return (
    <>
      <div id="solarUI" className="panel">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={showPaths}
                onChange={togglePaths}
                sx={{
                  color: blue[800],
                  "&.Mui-checked": {
                    color: blue[600],
                  },
                }}
              />
            }
            label="Show paths"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default SystemUI;
