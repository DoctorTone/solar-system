import { useState } from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import useStore from "../state/store";

const FlyUI = () => {
  const [showList, setShowList] = useState(false);
  const setCurrentView = useStore((state) => state.setCurrentView);

  const toggleList = () => {
    setShowList(!showList);
  };

  const changeView = (event: SelectChangeEvent) => {
    setCurrentView(event.target.value as string);
  };

  return (
    <div id="flyUI" className="panel">
      <Fab sx={{ mb: 3 }} onClick={toggleList} size="small" variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Fly To
      </Fab>
      {showList && (
        <RadioGroup
          sx={{ ml: 1 }}
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
      )}
    </div>
  );
};

export default FlyUI;
