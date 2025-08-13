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

const MarsModal: React.FC<ModalProps> = ({ showModal }) => {
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
        {"Mars"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300] }}>
        <Typography sx={{ mb: 2 }}>
          The fourth planet from the Sun. The surface of Mars is orange-red
          because it is covered in iron(III) oxide dust, giving it the nickname
          "the Red Planet". Mars is among the brightest objects in Earth's sky,
          and its high-contrast albedo features have made it a common subject
          for telescope viewing.
        </Typography>
        <Typography gutterBottom>
          Distance from Sun: 227.9 million km
        </Typography>
        <Typography gutterBottom>Diameter: 6779 km</Typography>
        <Typography gutterBottom>Length of day: 1 day 37 minutes</Typography>
        <Typography gutterBottom>Time to orbit: 687 days</Typography>
      </DialogContent>
      <DialogActions sx={{ color: "white" }}>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MarsModal;
