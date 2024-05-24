import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { grey } from "@mui/material/colors";

type ModalProps = {
  showModal: boolean;
};

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
    >
      <DialogTitle
        sx={{ fontSize: 30, color: "orange", backgroundColor: grey[900] }}
        id="alert-dialog-title"
      >
        {"Jupiter"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[500], backgroundColor: grey[900] }}>
        <DialogContentText
          sx={{ color: grey[300], backgroundColor: grey[900] }}
          id="alert-dialog-description"
        >
          The fifth planet from the Sun and the largest in the Solar System. A
          gas giant, Jupiter's mass is more than two and a half times that of
          all the other planets in the Solar System combined and slightly less
          than one one-thousandth the mass of the Sun.
          <p>Distance from Sun: 778.5 million km</p>
          <p>Diameter: 139,822 km</p>
          <p>Length of day: 9 hours 56 minutes</p>
          <p>Time to orbit: 11.86 years</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: grey[900] }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JupiterModal;
