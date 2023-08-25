import { Stack } from '@mui/material';
import { FirstControl } from './entities/FirstControl';
import { SecondControl } from './entities/SecondControl';

const TwoControls = () => {
  return (
    <Stack spacing={5} m={1}>
      <FirstControl />
      <SecondControl />
    </Stack>
  )
}

export default TwoControls;
