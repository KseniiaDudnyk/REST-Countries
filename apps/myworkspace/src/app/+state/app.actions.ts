import { Action } from '@ngrx/store';
import { Country } from '../countries.interface';

export enum AppActionTypes {
  LoadApp = '[App] Load App',
  AppLoaded = '[App] App Loaded',
  AppLoadError = '[App] App Load Error'
}

export class LoadApp implements Action {
  readonly type = AppActionTypes.LoadApp;
}

export class AppLoadError implements Action {
  readonly type = AppActionTypes.AppLoadError;
  constructor(public payload: any) { }
}

export class AppLoaded implements Action {
  readonly type = AppActionTypes.AppLoaded;
  constructor(public payload: Country[]) { }
}

export type AppAction = LoadApp | AppLoaded | AppLoadError;

export const fromAppActions = {
  LoadApp,
  AppLoaded,
  AppLoadError
};
