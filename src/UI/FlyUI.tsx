import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useStore from "../state/store";
import { ChangeEvent } from "react";

const FlyUI = () => {
  const setCurrentView = useStore((state) => state.setCurrentView);

  const changeView = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    setCurrentView(value);
  };

  return (
    <div id="flyUI" className="panel">
      <FormControl>
        <FormLabel
          sx={{
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          }}
          id="demo-radio-buttons-group-label"
        >
          Fly To
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="start"
          name="radio-buttons-group"
          onChange={changeView}
        >
          <FormControlLabel value="start" control={<Radio />} label="Start" />
          <FormControlLabel
            value="mercury"
            control={<Radio />}
            label="Mercury"
          />
          <FormControlLabel value="earth" control={<Radio />} label="Earth" />
          <FormControlLabel
            value="jupiter"
            control={<Radio />}
            label="Jupiter"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default FlyUI;
