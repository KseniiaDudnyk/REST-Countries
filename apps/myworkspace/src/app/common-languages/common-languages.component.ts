import { Component, OnInit, ViewChild } from '@angular/core';
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
  styleUrls: ['./common-languages.component.css']
})
export class CommonLanguagesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  languages: CommonLanguage[] = [];

  dataSource = new MatTableDataSource();

  columnsToDisplay = ['language', 'countriesList'];

  countries$: Observable<Country[]> = this.store.pipe(select(appQuery.getAllApp));

  countriesList$: Observable<CommonLanguage[]> = this.countries$
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
    this.countriesList$.subscribe((result: CommonLanguage[]) => {
      this.languages = result;

      this.dataSource = new MatTableDataSource(this.languages);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
