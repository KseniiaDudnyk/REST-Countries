import { Component, OnInit } from '@angular/core';
import { Country } from '../countries.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { LoadApp } from '../+state/app.actions';
import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'myworkspace-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {
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
