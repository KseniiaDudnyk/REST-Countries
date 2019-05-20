import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../countries.interface';
import { Store, select } from '@ngrx/store';

import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'myworkspace-get-countries',
  templateUrl: './get-countries.component.html',
  styleUrls: ['./get-countries.component.css']
})
export class GetCountriesComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.countries$ = this.store.pipe(select(appQuery.getAllApp));
  }

}
