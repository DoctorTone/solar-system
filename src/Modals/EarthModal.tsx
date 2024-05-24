import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { grey } from "@mui/material/colors";

type ModalProps = {
  showModal: boolean;
};

const EarthModal: React.FC<ModalProps> = ({ showModal }) => {
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
        {"Earth"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300], backgroundColor: grey[900] }}>
        <Typography sx={{ mb: 2 }}>
          The third planet from the Sun and the only astronomical object known
          to harbor life. This is enabled by Earth being a water world, the only
          one in the Solar System sustaining liquid surface water. Almost all of
          Earth's water is contained in its global ocean, covering 70.8% of
          Earth's crust.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 149.6 million km
        </Typography>
        <Typography gutterBottom>Diameter: 12,742 km</Typography>
        <Typography gutterBottom>Length of day: 23 hours 56 minutes</Typography>
        <Typography gutterBottom>Time to orbit: 365 days</Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: grey[900] }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EarthModal;
