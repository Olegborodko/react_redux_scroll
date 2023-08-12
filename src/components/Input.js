import React from "react";
import TextField from '@mui/material/TextField';

export const Input = ({ value, handleChange }) => {
  return (
    <TextField
      style={{ paddingTop: "10px" }}
      size="small"
      value={value || ""}
      onChange={(e) => handleChange(e)}
    />
  )
}