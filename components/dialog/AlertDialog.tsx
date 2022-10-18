import React from 'react';
import {useDialog} from "../../providers/DialogProvider";
import {Button, DialogActions, DialogContent} from "@mui/material";

const AlertDialog = ({text}) => {
  const {closeDialog} = useDialog();
  const onOK = () => {
    closeDialog();
  };

  return (
    <>
      <DialogContent>{text}</DialogContent>
      <DialogActions>
        <Button onClick={onOK}>Ok</Button>
      </DialogActions>
    </>
  );
}

export default AlertDialog;
