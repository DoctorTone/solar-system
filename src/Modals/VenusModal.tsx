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

const VenusModal: React.FC<ModalProps> = ({ showModal }) => {
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
        {"Venus"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300] }}>
        <Typography sx={{ mb: 2 }}>
          The second planet from the Sun. It is a terrestrial planet and is the
          closest in mass and size to its orbital neighbour Earth. Venus is
          notable for having the densest atmosphere of the terrestrial planets,
          composed mostly of carbon dioxide with a thick, global sulfuric acid
          cloud cover.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 108.2 million km
        </Typography>
        <Typography gutterBottom>Diameter: 12,103.6 km</Typography>
        <Typography gutterBottom>Length of day: 243 days</Typography>
        <Typography gutterBottom>Time to orbit: 225 days</Typography>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VenusModal;
