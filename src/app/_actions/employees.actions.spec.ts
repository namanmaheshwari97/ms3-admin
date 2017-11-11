import * as EmployeesActions from './email-blacklist.actions';
import {Employee} from '../_domains/employee';

describe('Employees Actions', () => {
  describe('Set', () => {
    it('should have type SET and require a employee list payload', () => {
      const employees: Employee[] = [
        {
          id: 1,
          email: 'admin1@email.com',
          phone: '608-698-4832',
          active: true
        }
      ];
      const action = new EmployeesActions.Set(employees);

      expect(action.type).toEqual(EmployeesActions.SET);
      expect(action.payload).toEqual(employees);
    });
  });

  describe('RemoveItem', () => {
    it('should have type REMOVE_ITEM and require a id number payload', () => {
      const id = 1;
      const action = new EmployeesActions.RemoveItem(id);

      expect(action.type).toEqual(EmployeesActions.REMOVE_ITEM);
      expect(action.payload).toEqual(id);
    });
  });
});
