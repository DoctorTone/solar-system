import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import useStore from "../state/store";
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

const SunModal: React.FC<ModalProps> = ({ showModal }) => {
  const [show, setShow] = useState(showModal);
  const resetSimulation = useStore((state) => state.resetSimulation);

  const handleClose = () => {
    setShow(false);
    resetSimulation(true);
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
        sx={{ fontSize: 30, color: "orange" }}
        id="alert-dialog-title"
      >
        {"Sun"}
      </DialogTitle>
      <DialogContent sx={{ color: grey[300] }}>
        <Typography sx={{ mb: 2 }}>
          Don't worry. Astronomers estimate that the sun has about 7 billion to
          8 billion years left before it sputters out and dies. We have a bit of
          time to prepare!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "white" }} onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SunModal;
