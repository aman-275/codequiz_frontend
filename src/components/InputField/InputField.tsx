import TextField from "@mui/material/TextField";
import React from "react";
import type { TextFieldProps } from "@mui/material/TextField/TextField";

export default function InputField(props: TextFieldProps) {
  return <TextField {...props} />;
}
