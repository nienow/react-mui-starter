import React, {Fragment} from "react";
import {Button} from "@mui/material";
import {useDialog} from "@/providers/DialogProvider";
import AlertDialog from "@/components/dialog/AlertDialog";

interface Params {
  resetFn: () => void;
  count: number;
}

// let root;
const ResetButton = (params: Params) => {
  const {confirm, dialog} = useDialog();

  const openConfirm = () => {
    confirm('Do you want to reset?', params.resetFn);
  };

  const openAlert = () => {
    dialog(<AlertDialog text={'The count is ' + params.count}></AlertDialog>);
  };

  return <Fragment>
    <Button onClick={openConfirm}>Reset</Button>
    <Button onClick={openAlert}>Alert</Button>
  </Fragment>
}

export default ResetButton
