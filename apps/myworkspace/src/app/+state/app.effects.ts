import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppService } from '../app.service';
import { switchMap, map } from 'rxjs/operators';

import { AppPartialState } from './app.reducer';
import {
  LoadApp,
  AppLoaded,
  AppLoadError,
  AppActionTypes
} from './app.actions';

@Injectable()
export class AppEffects {

  @Effect() loadApp$ = this.actions$.pipe(
    ofType(AppActionTypes.LoadApp),
    switchMap(() => this.appService.getAll()
      .pipe(
        map((countryList) => new AppLoaded(countryList)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) { }
}
