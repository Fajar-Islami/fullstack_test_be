import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

export function DeleteDialog(props) {
  return (
    <>
      <Dialog
        open={props.deleteModalOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Yakin ingin hapus travel package ini?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Batal</Button>
          <Button color="error" onClick={props.handleAction} autoFocus>
            Hapus
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
  deleteModalOpen: PropTypes.bool,
};
