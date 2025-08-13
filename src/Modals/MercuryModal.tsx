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
        sx={{ fontSize: 30, color: "orange" }}
        id="alert-dialog-title"
      >
        {"Mercury"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300] }}>
        <Typography sx={{ mb: 2 }}>
          The first planet from the Sun and the smallest in the Solar System. In
          English, it is named after the ancient Roman god Mercurius, god of
          commerce and communication, and the messenger of the gods. Mercury is
          classified as a terrestrial planet, with roughly the same surface
          gravity as Mars.
        </Typography>
        <Typography gutterBottom>Distance from Sun: 58 million km</Typography>
        <Typography gutterBottom>Diameter: 4879.4 km</Typography>
        <Typography gutterBottom>Length of day: 59 days</Typography>
        <Typography gutterBottom>Time to orbit: 88 days</Typography>
      </DialogContent>
      <DialogActions sx={{ color: "white" }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MercuryModal;
