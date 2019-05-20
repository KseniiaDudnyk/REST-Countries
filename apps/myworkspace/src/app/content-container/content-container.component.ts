import { Component } from '@angular/core';
import { Country } from '../countries.interface';
import { Store, select } from '@ngrx/store';

import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';
import { map } from 'rxjs/operators';

export interface CountryInfo {
  letter: string;
  countyList: Country[];
}

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent {

  countries$ = this.store.pipe(select(appQuery.getAllApp))
  .pipe(map((countryList: Country[]) => {
      const letters: string[] = [];

      for (const country of countryList) {
        letters.push(country.name[0]);
      }

      const sortedLetters: string[] = letters.filter((item, index) => letters.indexOf(item) === index);
      sortedLetters.sort();

      const result: CountryInfo[] = [];

      for (const letter of sortedLetters) {

        const lettersCountries: CountryInfo = {
          letter: '{letter}',
          countyList: []
        };

        for (const country of countryList) {
          if (letter === country.name[0]) {
            lettersCountries.countyList.push(country);
          }
        }

        result.push(lettersCountries);
      }

      return result;
    }
  ));

  constructor(private store: Store<AppState>) { }
}
