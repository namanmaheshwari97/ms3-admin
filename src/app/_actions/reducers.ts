import {ActionReducerMap, createSelector} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import * as fromAuth from './auth.reducer';

export interface AppState {
  auth: Auth
}

export const selectAuth = (state: AppState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, (state: Auth) => state.token);

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer
};
