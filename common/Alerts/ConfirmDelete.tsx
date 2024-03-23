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
  id: number;
  loading?: boolean;
  confirm: (id: number) => void;
};
const ConfirmDelete: React.FC<PropsType> = ({ text, confirm, id, loading }) => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = () => {
    confirm(id);
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
      {loading ? (
        <span className="text-red-500">
          <Spinner />
        </span>
      ) : (
        <Tooltip title="Delete" placement="top">
          <button onClick={handleClickOpen} className="text-red-400">
            <DeleteOutlineIcon />
          </button>
        </Tooltip>
      )}

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
export default ConfirmDelete;
