import { Action } from '@ngrx/store';

export enum ActionTypes {
  Init = '[App Component] Init',
  FetchSucces = '[App Component] FetchSucces',
}

export class Init implements Action {
  readonly type = ActionTypes.Init;
}

export class FetchSucces implements Action {
  readonly type = ActionTypes.FetchSucces;
}
