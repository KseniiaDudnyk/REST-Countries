import { Country } from '../countries.interface';

export interface TimeZone {
  timezone: string;
  countriesList: Country[];
}
