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
  // @Effect() loadApp$ = this.dataPersistence.fetch(AppActionTypes.LoadApp, {
  //   run: (action: LoadApp, state: AppPartialState) => {
  //     return this.countriesService.getAll.map((countryList) => countryList)
  //     // Your custom REST 'load' logic goes here. For now just return an empty list...
  //     return new AppLoaded([]);
  //   },
  //
  //   onError: (action: LoadApp, error) => {
  //     console.error('Error', error);
  //     return new AppLoadError(error);
  //   }
  // });

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
    // private dataPersistence: DataPersistence<AppPartialState>,
    private appService: AppService
  ) { }
}
