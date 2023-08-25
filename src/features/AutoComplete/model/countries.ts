import { makeAutoObservable } from 'mobx';
import {CountryInfo, getCountryByName} from '../api/apiService';

const filterCountries = (countries: Array<CountryInfo>, count: number): Array<CountryInfo> => {
  let res = new Map();
  for (let i = 0; i < countries.length; i++) {
    if (res.size === count) {
      // @ts-ignore
      return [...res.values()];
    }
    const country = countries[i];
    // deduplicate
    if (!res.has(country.name)) {
      res.set(country.name, country)
    }
  }
  // @ts-ignore
  return [...res.values()];
}

class Countries {
  maxSuggestions: number = 3;
  loading: boolean = false;
  suggestions: Array<CountryInfo> = [];

  constructor(maxSuggestions: number) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  onChange = async (value: string) => {
    if (value === '') {
      this.suggestions = [];
      return;
    }
    try {
      const res = await getCountryByName(value);
      this.suggestions = filterCountries(res, this.maxSuggestions);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Countries;
