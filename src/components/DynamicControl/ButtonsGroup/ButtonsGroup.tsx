import { Stack } from '@mui/material';
import { ButtonOption } from '../types';
import { SnButton } from '../../ui';

interface ButtonsGroupProps {
  group: Array<ButtonOption>
}

export const ButtonsGroup = ({ group }: ButtonsGroupProps) => {
  return (
    <Stack spacing={1}>
      {
        group.map(({text, onClick}) => (
          <SnButton
            key={text}
            onClick={onClick}
          >
            { text }
          </SnButton>
        ))
      }
    </Stack>
  )
}
