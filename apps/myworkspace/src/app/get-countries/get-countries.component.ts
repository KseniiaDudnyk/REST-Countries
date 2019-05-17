import { Component, OnInit } from '@angular/core';
import { Country } from '../countries.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'myworkspace-get-data',
  templateUrl: './get-countries.component.html',
  styleUrls: ['./get-countries.component.css']
})
export class GetCountriesComponent implements OnInit {
  countries$: Observable<Country[]> = this.store.select(state => state.countries);

  constructor(private store: Store<{ countries: Country[]>}) { }

  ngOnInit() {
    this.store.dispatch({ type: '[Get Countries] LoadCountriesS'})
  }

}
