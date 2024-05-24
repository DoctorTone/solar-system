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

const SaturnModal: React.FC<ModalProps> = ({ showModal }) => {
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
        {"Saturn"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300], backgroundColor: grey[900] }}>
        <Typography sx={{ mb: 2 }}>
          The sixth planet from the Sun and the second-largest in the Solar
          System, after Jupiter. It is a gas giant with an average radius of
          about nine-and-a-half times that of Earth. It has only one-eighth the
          average density of Earth, but is over 95 times more massive.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 1.434 billion km
        </Typography>
        <Typography gutterBottom>Diameter: 116,464 km</Typography>
        <Typography gutterBottom>Length of day: 10 hours 34 minutes</Typography>
        <Typography gutterBottom>Time to orbit: 29.45 years</Typography>
      </DialogContent>
      <DialogActions sx={{ color: "white", backgroundColor: grey[900] }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaturnModal;
