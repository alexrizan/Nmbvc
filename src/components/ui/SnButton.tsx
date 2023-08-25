import {Button, ButtonProps} from '@mui/material';

export const SnButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ width: '150px' }}
      {...props}
    >
      { props.children }
    </Button>
  )
}
