import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Country } from '../countries.interface';
import { CommonLanguage } from './common-languages.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';


@Component({
  selector: 'myworkspace-common-languages',
  templateUrl: './common-languages.component.html',
  styleUrls: ['./common-languages.component.scss']
})
export class CommonLanguagesComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource();

  columnsToDisplay = ['language', 'countriesList'];

  subscription: any;

  private languagesAndCountries$: Observable<CommonLanguage[]> = this.store.pipe(select(appQuery.getAllApp))
    .pipe(map((countriesList: Country[]) => {
      const languageDict: { [language: string]: string[] } = {};

      for (const country of countriesList) {
        for (const language of country.languages) {
          if (!languageDict[language.name]) {
            languageDict[language.name] = [country.name];
          } else {
            languageDict[language.name].push(country.name);
          }
        }
      }
      const languageList: CommonLanguage[] = [];

      for (const language of Object.keys(languageDict)) {
        languageList.push({
          language,
          countriesList: languageDict[language]
        });
      }
      return languageList;
    }));

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.subscription = this.languagesAndCountries$.subscribe((result: CommonLanguage[]) => {
      const languagesArr: CommonLanguage[] = result;

      this.dataSource = new MatTableDataSource(languagesArr);
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
