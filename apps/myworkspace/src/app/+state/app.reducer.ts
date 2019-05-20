import { AppAction, AppActionTypes } from './app.actions';
import { Country } from '../countries.interface';
export const APP_FEATURE_KEY = 'app';

export interface AppState {
  list: Country[]; // list of App; analogous to a sql normalized table
  selectedId?: string | number; // which App record has been selected
  loaded: boolean; // has the App list been loaded
  error?: any; // last none error (if any)
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppState;
}

export const initialState: AppState = {
  list: [],
  loaded: false
};

export function appReducer(
  state: AppState = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case AppActionTypes.AppLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}

export const getAllApp = (state: AppState) => state.list;
