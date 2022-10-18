import React, {createContext, ReactNode, useContext, useState} from 'react';
import SimpleDialog from "../components/dialog/SimpleDialog";
import ConfirmDialog from "../components/dialog/ConfirmDialog";
import {Alert, AlertColor, Snackbar} from "@mui/material";

interface IDialogContext {
  confirm: (text: string, action: () => void) => () => void;
  dialog: (contents: ReactNode) => () => void;
  closeDialog: () => void;
  snackbar: (severity: AlertColor, contents: ReactNode) => void;
}

const DialogContext = createContext<IDialogContext>({
  confirm: null,
  dialog: null,
  closeDialog: null,
  snackbar: null
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({children}) => {
  const [contents, setContents] = useState<any>(null);
  const [snackbarContents, setSnackbarContents] = useState<any>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>('success');

  const confirm = (text, action) => {
    setContents(<ConfirmDialog text={text} action={() => {
      action();
      closeDialog()
    }} cancel={closeDialog}></ConfirmDialog>);
    return closeDialog;
  };

  const dialog = (contents) => {
    setContents(contents);
    return closeDialog;
  };

  const snackbar = (severity, contents) => {
    setSnackbarSeverity(severity);
    setSnackbarContents(contents);
  };

  const closeDialog = () => {
    setContents(null);
  }

  return (
    <DialogContext.Provider value={{confirm, dialog, closeDialog, snackbar}}>
      <SimpleDialog open={!!contents}>{contents}</SimpleDialog>
      <Snackbar open={!!snackbarContents} onClose={() => setSnackbarContents(null)}>
        <Alert severity={snackbarSeverity}>{snackbarContents}</Alert>
      </Snackbar>
      {children}
    </DialogContext.Provider>
  );
};
