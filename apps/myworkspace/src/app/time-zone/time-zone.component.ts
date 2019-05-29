import { Component, OnInit } from '@angular/core';
import { Country } from '../countries.interface';
import { TimeZone } from './time-zone.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';


@Component({
  selector: 'myworkspace-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})

export class TimeZoneComponent implements OnInit {

  callingCodes$: Observable<TimeZone[]> = this.store.pipe(select(appQuery.getAllApp))
    .pipe(map((countries: Country[]) => {
      const timezoneDict: { [timezone: string]: Country[] } = {};

      for (const country of countries) {
        for (const timezone of country.timezones) {
          if (!timezoneDict[timezone]) {
            timezoneDict[timezone] = [country];
          } else {
            timezoneDict[timezone].push(country);
          }
        }
      }

      const timezoneArr: TimeZone[] = [];

      for (const timezone of Object.keys(timezoneDict)) {
        timezoneArr.push({
          timezone,
          countriesList: timezoneDict[timezone]
        });
      }

      timezoneArr.sort((tz1: TimeZone, tz2: TimeZone) => {
        const t1 = tz1.timezone;
        const t2 = tz2.timezone;
        if (t1[3] === t2[3]) {
          if (t1[3] === '+') {
            if (t1 < t2) {
              return 1;
            }

            return -1;
          } else {
            if (t1 < t2) {
              return -1;
            }

            return 1;
          }
        } else {
          if (t1[3] === '+') {
            return -1;
          }

          if (t1[3] === '-') {
            return 1;
          }

          if (!t1[3] && t2[3] === '+') {
            return -1;
          }

          return 1;
        }
      });

      return timezoneArr;

    }));

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {

  }
}
