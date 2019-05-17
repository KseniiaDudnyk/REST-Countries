import { Action } from '@ngrx/store';
import { ActionTypes } from './app.actions';

export function getCountries(action: Action) {
  switch (action.type) {
    case ActionTypes.LoadCountries:
      return;

    case ActionTypes.FetchSucces:
      return;

    default:
      return;

  }

}
