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

const NeptuneModal: React.FC<ModalProps> = ({ showModal }) => {
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
        {"Neptune"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300], backgroundColor: grey[900] }}>
        <Typography sx={{ mb: 2 }}>
          The eighth and farthest known planet from the Sun. It is the
          fourth-largest planet in the Solar System by diameter, the
          third-most-massive planet, and the densest giant planet. It is 17
          times the mass of Earth, and slightly more massive than fellow ice
          giant Uranus.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 4.495 billion km
        </Typography>
        <Typography gutterBottom>Diameter: 49,244 km</Typography>
        <Typography gutterBottom>Length of day: 16 hours 6 minutes</Typography>
        <Typography gutterBottom>Time to orbit: 164.8 years</Typography>
      </DialogContent>
      <DialogActions sx={{ color: "white", backgroundColor: grey[900] }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NeptuneModal;
