import React from 'react';
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";

interface Params {
  title?: string;
  text: string;
  action: () => void;
  cancel: () => void;
}

const ConfirmDialog = ({title, text, action, cancel}: Params) => {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div>{text}</div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={cancel}>
          Cancel
        </Button>
        <Button onClick={action}>Ok</Button>
      </DialogActions>
    </>
  );
}

export default ConfirmDialog
