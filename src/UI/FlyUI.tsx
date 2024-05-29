import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LanguageIcon from "@mui/icons-material/Language";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import useStore from "../state/store";

const actions = [
  {
    icon: <HomeOutlinedIcon />,
    planet: "Start",
    image: "",
  },
  { icon: <LanguageIcon />, planet: "Mercury", image: "./images/mercury.webp" },
  { icon: <LanguageIcon />, planet: "Venus", image: "./images/venus.webp" },
  { icon: <LanguageIcon />, planet: "Earth", image: "./images/earth.jpg" },
  { icon: <LanguageIcon />, planet: "Mars", image: "./images/mars.jpg" },
  { icon: <LanguageIcon />, planet: "Jupiter", image: "./images/jupiter.webp" },
  { icon: <LanguageIcon />, planet: "Saturn", image: "./images/saturn.webp" },
  { icon: <LanguageIcon />, planet: "Uranus", image: "./images/uranus.png" },
  { icon: <LanguageIcon />, planet: "Neptune", image: "./images/neptune.png" },
];

const FlyUI = () => {
  const setCurrentView = useStore((state) => state.setCurrentView);

  const selectPlanet = (planet: string) => {
    const planetName = planet.toLowerCase();
    setCurrentView(planetName);
  };

  return (
    <div id="flyUI" className="panel">
      <Typography variant="button" display="block" gutterBottom>
        {" "}
        Fly To :
      </Typography>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        direction="down"
        icon={<RocketLaunchIcon />}
        FabProps={{ color: "primary" }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={(event) => {
              selectPlanet(action.planet);
            }}
            key={action.planet}
            tooltipTitle={action.planet}
            tooltipPlacement="right"
            sx={{
              backgroundImage: `url(${action.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default FlyUI;
