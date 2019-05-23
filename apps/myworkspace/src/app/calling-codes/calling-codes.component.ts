import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Country } from '../countries.interface';
import { CallingCodes } from './calling-codes.interface';
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
  @ViewChild(MatSort) sort: MatSort;

  countriesList: Country[] = [];

  codesArr: CallingCodes[] = [];

  dataSource = new MatTableDataSource();

  columnsToDisplay: string[] = ['name', 'codes'];

  countries$: Observable<Country[]> = this.store.pipe(select(appQuery.getAllApp));

  callingCodes$: Observable<Country[]> = this.countries$
    .pipe(map((countries: Country[]) => {
      this.countriesList = countries;
      return this.countriesList;
    }));

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadApp());
  }

  ngOnInit() {
    this.store.pipe(select(appQuery.getAllApp)).subscribe(arr => {
      this.countriesList = arr;

      const codesArr: CallingCodes[] = [];

      for (const country of this.countriesList) {

        const codesList: CallingCodes = {
          name: country.name,
          codes: []
        };

        const codes = country.callingCodes[0].replace(' ', '');
        codesList.codes.push(codes);
        codesArr.push(codesList);
      }

      this.codesArr = codesArr;

      this.dataSource = new MatTableDataSource(this.codesArr);
      this.dataSource.sort = this.sort;
    });
  }

}
