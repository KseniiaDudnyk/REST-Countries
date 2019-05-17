import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CountriesService } from '../countries.service';

@Injectable()
export class CountriesEffects {

  @Effect()
  loadCountries$ = this.actions$
    .pipe(
      ofType('[Get Countries] LoadCountries'),
      mergeMap(() => this.countriesService.getAll()
        .pipe(
          map(countries => ({ type: '[Countries API] FetchSucces', payload: countries })),
          catchErroe(() => EMPTY)
        ))
    )
);

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) { }
}
