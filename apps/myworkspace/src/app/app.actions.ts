import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadCountries = '[Get Countries] LoadCountries',
  FetchSucces = '[Get Countries] FetchSucces',
}

export class LoadCountries implements Action {
  readonly type = ActionTypes.LoadCountries;
}

export class FetchSucces implements Action {
  readonly type = ActionTypes.FetchSucces;
}
