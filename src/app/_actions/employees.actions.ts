import {Action} from '@ngrx/store';
import {EmployeesTable} from '../_domains/employees-table';
import {Employee} from '../_domains/employee';

export const SET = 'Employees.Set';
export const REMOVE_ITEM = 'Employees.RemoveItem';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: Employee[]) {
  }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: number) {
  }
}

export type All
  = Set
  | RemoveItem;
