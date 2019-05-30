import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Country } from '../countries.interface';
import { CallingCodes } from './calling-codes.interface';

import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'myworkspace-calling-codes',
  templateUrl: './calling-codes.component.html',
  styleUrls: ['./calling-codes.component.scss']
})

export class CallingCodesComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;

  codesArr: CallingCodes[] = [];

  dataSource = new MatTableDataSource();

  columnsToDisplay: string[] = ['name', 'codes'];

  subscription: any;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.subscription = this.store.pipe(select(appQuery.getAllApp)).subscribe(arr => {
      const countriesArr:Country[] = arr;

      const codesArr: CallingCodes[] = [];

      for (const country of countriesArr) {

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
