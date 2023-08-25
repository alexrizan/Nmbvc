import { Stack } from '@mui/material';
import { CountryFirst } from './entities/CountryFirst';
import { CountrySecond } from './entities/CountrySecond';

const TwoAutoCompletes = () => {
  return (
    <Stack spacing={2} mt={5}>
      <CountryFirst />
      <CountrySecond />
    </Stack>
  );
};

export default TwoAutoCompletes;
