import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Country } from '../countries.interface';
import { Observable } from 'rxjs';
import { LoadCountries, FetchSucces } from '../app.actions';


@Component({
  selector: 'myworkspace-get-countries',
  templateUrl: './get-countries.component.html',
  styleUrls: ['./get-countries.component.css']
})
export class GetCountriesComponent {
  countries$: Observable<Country[]>;

  constructor(private store: Store<{ countries: Country[]>}) {
  this.countries$ = store.pipe(select(countries);)
}

loadCountries() {
  this.store.dispatch(new LoadCountries());
}

fetchSucces() {
  this.store.dispatch(new FetchSucces());
}

}
