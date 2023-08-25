import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import Countries from '../model/countries';
import {CountryInfo} from '../api/apiService';
import {SnCountryAutocomplete} from '../../../components/ui';

const countryDictionary = new Countries(3);

export const CountryFirst = observer(() => {
  const [option, setOption] = useState<CountryInfo | null>(null);

  return (
    <SnCountryAutocomplete
      label="Выберите страну (3 подсказки)"
      option={option}
      suggestions={countryDictionary.suggestions}
      onChose={setOption}
      onSuggestionChange={countryDictionary.onChange}
      debounceDelay={300}
    />
  );
})
