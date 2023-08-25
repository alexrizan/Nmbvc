import {Autocomplete, Box, TextField} from '@mui/material';
import {CountryInfo} from '../../features/AutoComplete/api/apiService';
import {useState} from 'react';
import {useDebounceEffect} from '../../hooks/debounce';

interface SnCountryAutocompleteProps {
  option: CountryInfo | null;
  suggestions: Array<CountryInfo>;
  onChose: (country: CountryInfo | null) => void;
  onSuggestionChange: (value: string) => void;
  label: string;
  debounceDelay: number;
}

export const SnCountryAutocomplete = ({
  option, suggestions, onChose, onSuggestionChange, label, debounceDelay,
}: SnCountryAutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');
  useDebounceEffect(() => onSuggestionChange(inputValue), inputValue, debounceDelay)

  return (
    <Autocomplete
      value={option}
      onChange={(e, value) => onChose(value)}
      options={suggestions}
      autoHighlight
      getOptionLabel={(option) =>  `${option.name} (${option.fullName})`}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.flag}
            alt={option.name}
          />
          {option.name} ({option.fullName})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  )
}
