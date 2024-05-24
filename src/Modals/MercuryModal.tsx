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

const MercuryModal: React.FC<ModalProps> = ({ showModal }) => {
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
        sx={{ color: "orange", backgroundColor: grey[900] }}
        id="alert-dialog-title"
      >
        {"Mercury"}
      </DialogTitle>
      <DialogContent sx={{ color: "white", backgroundColor: grey[900] }}>
        <DialogContentText
          sx={{ color: "white", backgroundColor: grey[900] }}
          id="alert-dialog-description"
        >
          The first planet from the Sun and the smallest in the Solar System. In
          English, it is named after the ancient Roman god Mercurius, god of
          commerce and communication, and the messenger of the gods. Mercury is
          classified as a terrestrial planet, with roughly the same surface
          gravity as Mars.
          <p>Distance from Sun: 58 million km</p>
          <p>Diameter: 4879.4 km</p>
          <p>Length of day: 59 days</p>
          <p>Time to orbit: 88 days</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ color: "white", backgroundColor: grey[900] }}>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MercuryModal;
