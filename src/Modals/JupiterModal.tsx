import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

type ModalProps = {
  showModal: boolean;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="down"
      ref={ref}
      {...props}
      timeout={{ enter: 1500, exit: 100 }}
    />
  );
});

const JupiterModal: React.FC<ModalProps> = ({ showModal }) => {
  const [show, setShow] = useState(showModal);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      slots={{
        transition: Transition,
      }}
      slotProps={{
        paper: {
          sx: {
            opacity: 0.8,
            backgroundColor: "black",
            color: "white",
            borderRadius: "30px",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: 30,
          color: "orange",
        }}
        id="alert-dialog-title"
      >
        {"Jupiter"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300] }}>
        <Typography sx={{ mb: 2 }}>
          The fifth planet from the Sun and the largest in the Solar System. A
          gas giant, Jupiter's mass is more than two and a half times that of
          all the other planets in the Solar System combined and slightly less
          than one one-thousandth the mass of the Sun.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 778.5 million km
        </Typography>
        <Typography gutterBottom>Diameter: 139,822 km</Typography>
        <Typography gutterBottom>Length of day: 9 hours 56 minutes</Typography>
        <Typography gutterBottom>Time to orbit: 11.86 years</Typography>
      </DialogContent>
      <DialogActions sx={{ color: "white" }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JupiterModal;
