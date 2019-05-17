export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages: Language[];
  borders: string[];
  callingCodes: string[];
  timezones: string[];
  flag: string;
  currencies: Currency[];
  symbol: string;
}

export interface Language {
  name: string;
}

export interface Currency {
     name: string;
}
