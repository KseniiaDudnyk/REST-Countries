import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Country } from '../countries.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { LoadApp } from '../+state/app.actions';
import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'myworkspace-calling-codes',
  templateUrl: './calling-codes.component.html',
  styleUrls: ['./calling-codes.component.css']
})

export class CallingCodesComponent implements OnInit {
  columnsToDisplay = ['countryName', 'calling-codes'];

  countries$: Observable<Country[]> = this.store.pipe(select(appQuery.getAllApp));

  callingCodes$: Observable<Country[]> = this.countries$
    .pipe(map((countries: Country[]) => {
      return countries;
    }));

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadApp());
  }

  ngOnInit() {

  }

}
