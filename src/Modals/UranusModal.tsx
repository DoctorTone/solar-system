import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

type ModalProps = {
  showModal: boolean;
};

const UranusModal: React.FC<ModalProps> = ({ showModal }) => {
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
    >
      <DialogTitle
        sx={{ fontSize: 30, color: "orange", backgroundColor: grey[900] }}
        id="alert-dialog-title"
      >
        {"Uranus"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300], backgroundColor: grey[900] }}>
        <Typography sx={{ mb: 2 }}>
          The seventh planet from the Sun. It is a gaseous cyan-coloured ice
          giant. Most of the planet is made of water, ammonia, and methane in a
          supercritical phase of matter, which in astronomy is called 'ice' or
          volatiles.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 2.871 billion km
        </Typography>
        <Typography gutterBottom>Diameter: 50,724 km</Typography>
        <Typography gutterBottom>Length of day: 17 hours 14 minutes</Typography>
        <Typography gutterBottom>Time to orbit: 84 years</Typography>
      </DialogContent>
      <DialogActions sx={{ color: "white", backgroundColor: grey[900] }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UranusModal;
