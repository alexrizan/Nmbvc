import {TextField, TextFieldProps} from '@mui/material';

export const SnInput = (props: TextFieldProps) => {
  return (
    <TextField variant="standard" { ...props } />
  )
}
