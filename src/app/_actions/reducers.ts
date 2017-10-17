import {ActionReducerMap, createSelector} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import {Alert} from '../_domains/alert';
import {EmployeesTable} from '../_domains/employees-table';
import {UsersState} from '../_domains/users';
import * as fromAuth from './auth.reducer';
import * as fromAlert from './alert.reducer';
import * as fromEmployees from './employees.reducer';
import * as fromUsers from './users.reducer';

export interface AppState {
  auth: Auth,
  alert: Alert,
  employees: EmployeesTable,
  users: UsersState
}

export const selectAuth = (state: AppState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, (state: Auth) => state.token);

export const selectAlert = (state: AppState) => state.alert;

export const selectEmployees = (state: AppState) => state.employees;
export const selectEmployeesList = createSelector(selectEmployees, (state: EmployeesTable) => state.list);

export const selectUsers = (state: AppState) => state.users;
export const selectUsersList = createSelector(selectUsers, (state: UsersState) => state.list);

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  alert: fromAlert.reducer,
  employees: fromEmployees.reducer,
  users: fromUsers.reducer
};
