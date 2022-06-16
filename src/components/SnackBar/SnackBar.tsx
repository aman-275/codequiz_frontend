import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import type { SnackbarProps } from "@mui/material/Snackbar/Snackbar";
import { TramOutlined } from "@mui/icons-material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar({
  setOpen,
  open,
  severity,
  message,
}: SnackbarProps &
  AlertProps & { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
