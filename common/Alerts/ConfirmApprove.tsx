import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
type PropsType = {
  text: string;
  id: string;
  loading?: boolean;
  confirmApprove: (id: string) => void;
};
const ConfirmApprove: React.FC<PropsType> = ({
  text,
  confirmApprove,
  id,
  loading,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = () => {
    confirmApprove(id);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="bg-green-500 px-5 py-2 rounded-full text-white flex items-center"
      >
        <span>Approve</span>
        <span className="text-white">{loading ? <Spinner /> : null}</span>
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ConfirmApprove;
