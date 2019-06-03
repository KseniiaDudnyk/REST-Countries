import { AppAction, AppActionTypes } from './app.actions';
import { Country } from '../countries.interface';
export const APP_FEATURE_KEY = 'app';

export interface AppState {
  list: Country[];
  selectedId?: string | number;
  loaded: boolean;
  error?: any;
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
