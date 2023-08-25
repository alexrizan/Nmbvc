import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import Countries from '../model/countries';
import {CountryInfo} from '../api/apiService';
import {SnCountryAutocomplete} from '../../../components/ui';

const countryDictionary = new Countries(10);

export const CountrySecond = observer(() => {
  const [option, setOption] = useState<CountryInfo | null>(null);

  return (
    <SnCountryAutocomplete
      label="Выберите страну (10 подсказок)"
      option={option}
      suggestions={countryDictionary.suggestions}
      onChose={setOption}
      onSuggestionChange={countryDictionary.onChange}
      debounceDelay={500}
    />
  );
})
