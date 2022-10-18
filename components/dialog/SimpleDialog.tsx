import React, {ReactNode} from 'react';
import {Dialog} from "@mui/material";

interface Params {
  children?: ReactNode;
  open?: boolean;
}

const SimpleDialog = ({children, open}: Params) => {
  return (
    <Dialog open={open}>
      {children}
    </Dialog>
  )
}

export default SimpleDialog
