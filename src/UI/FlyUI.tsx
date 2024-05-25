import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const actions = [
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