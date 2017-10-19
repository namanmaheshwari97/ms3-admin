import * as EmployeesActions from './employees.actions';
import {EmployeesTable} from '../_domains/employees-table';
import {Employee} from '../_domains/employee';

export type Action = EmployeesActions.All;

const initialState = {
  list: []
};

export function reducer(state: EmployeesTable = initialState, action: Action): EmployeesTable {
  switch (action.type) {
    case EmployeesActions.SET: {
      return {
        ...state,
        list: action.payload
      };
    }

    case EmployeesActions.REMOVE_ITEM: {
      return {
        ...state,
        list: state.list.filter((item: Employee) => action.payload !== item.id)
      };
    }

    default: {
      return state;
    }
  }
}
