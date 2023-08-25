import { Box, Paper, Stack } from '@mui/material';
import { ButtonOption } from './types';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';
import { SnInput } from '../ui';

export interface ButtonsConfig {
  leftButtons?: Array<ButtonOption>;
  rightButtons?: Array<ButtonOption>;
}

interface DynamicControlProps {
  value: string;
  onChange: (value: string) => void;
  buttonsConfig: ButtonsConfig;
}

const getPrettyMenuPosition = (buttonsConfig: ButtonsConfig) => {
  if (!buttonsConfig.leftButtons) {
    return 'flex-end';
  }
  if (!buttonsConfig.rightButtons) {
    return 'flex-start'
  }
  return 'space-between';
}

export const DynamicControl = ({
  value, onChange, buttonsConfig,
}: DynamicControlProps) => {
  const { leftButtons, rightButtons } = buttonsConfig;

  return (
    <Paper elevation={3} sx={{padding: (theme) => theme.spacing(2)}}>
      <Stack spacing={2}>
        <SnInput value={value} onChange={(e) => onChange(e.target.value)} />
        <Box sx={{ display: 'flex', justifyContent: getPrettyMenuPosition(buttonsConfig) }}>
          {
            leftButtons && (
              <ButtonsGroup group={leftButtons} />
            )
          }
          {
            rightButtons && (
              <ButtonsGroup group={rightButtons} />
            )
          }
        </Box>
      </Stack>
    </Paper>
  )
}
