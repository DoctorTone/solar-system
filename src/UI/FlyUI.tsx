import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LanguageIcon from '@mui/icons-material/Language';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import useStore from "../state/store";

const actions = [
  { icon: <HomeOutlinedIcon />, planet: 'Start' },
  { icon: <LanguageIcon />, planet: 'Mercury' },
  { icon: <LanguageIcon />, planet: 'Venus' },
  { icon: <LanguageIcon />, planet: 'Earth' },
  { icon: <LanguageIcon />, planet: 'Mars' },
  { icon: <LanguageIcon />, planet: 'Jupiter' },
  { icon: <LanguageIcon />, planet: 'Saturn' },
  { icon: <LanguageIcon />, planet: 'Uranus' },
  { icon: <LanguageIcon />, planet: 'Neptune' },
];

const FlyUI = () => {
  const setCurrentView = useStore((state) => state.setCurrentView);

  const selectPlanet = (planet: string) => {
    const planetName = planet.toLowerCase();
setCurrentView(planetName);
  }

  return (
    <div id="flyUI" className="panel">
      <Typography variant="button" display="block" gutterBottom>
{" "}Fly To :
      </Typography>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        direction='down'
        icon={<RocketLaunchIcon />}
        FabProps={{color: "primary"}}
      >
        {actions.map((action) => (
          <SpeedDialAction
          onClick={(event) => {
            selectPlanet(action.planet);
          }}
            key={action.planet}
            tooltipTitle={action.planet}
            icon={action.icon}
            tooltipPlacement="right"
            sx={{color: "orange", backgroundColor: grey[600]}}
          />
        ))}
      </SpeedDial>
      </div>
  );
}

export default FlyUI