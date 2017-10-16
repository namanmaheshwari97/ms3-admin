import {ActionReducerMap, createSelector} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import {Alert} from '../_domains/alert';
import * as fromAuth from './auth.reducer';
import * as fromAlert from './alert.reducer';

export interface AppState {
  auth: Auth,
  alert: Alert
}

export const selectAuth = (state: AppState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, (state: Auth) => state.token);

export const selectAlert = (state: AppState) => state.alert;

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  alert: fromAlert.reducer
};
