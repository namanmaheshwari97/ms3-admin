import {ActionReducerMap, createSelector} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import {Alert} from '../_domains/alert';
import {EmployeesTable} from '../_domains/employees-table';
import {UsersState} from '../_domains/users';
import {EmailBlacklist} from '../_domains/email-blacklist';
import {Properties} from '../_domains/properties';
import * as fromAuth from './auth.reducer';
import * as fromAlert from './alert.reducer';
import * as fromEmployees from './employees.reducer';
import * as fromUsers from './users.reducer';
import * as fromBlacklist from './email-blacklist.reducer';
import * as fromProperties from './properties.reducer';

export interface AppState {
  auth: Auth;
  alert: Alert;
  employees: EmployeesTable;
  users: UsersState;
  blacklist: EmailBlacklist;
  properties: Properties;
}

export const selectAuth = (state: AppState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, (state: Auth) => state.token);

export const selectAlert = (state: AppState) => state.alert;

export const selectEmployees = (state: AppState) => state.employees;
export const selectEmployeesList = createSelector(selectEmployees, (state: EmployeesTable) => state.list);

export const selectUsers = (state: AppState) => state.users;
export const selectUsersList = createSelector(selectUsers, (state: UsersState) => state.list);

export const selectBlacklist = (state: AppState) => state.blacklist;
export const selectBlacklistList = createSelector(selectBlacklist, (state: EmailBlacklist) => state.list);

export const selectProperties = (state: AppState) => state.properties;
export const selectPropertiesList = createSelector(selectProperties, (state: Properties) => state.list);
export const selectPropertiesCursor = createSelector(selectProperties, (state: Properties) => state.cursor);

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  alert: fromAlert.reducer,
  employees: fromEmployees.reducer,
  users: fromUsers.reducer,
  blacklist: fromBlacklist.reducer,
  properties: fromProperties.reducer
};
