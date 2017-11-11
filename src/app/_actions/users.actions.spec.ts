import * as UsersActions from './users.actions';
import {User} from '../_domains/user';

describe('Users Actions', () => {
  describe('Set', () => {
    it('should have type SET and require a user list payload', () => {
      const users: User[] = [
        {
          id: 1,
          email: 'admin1@email.com',
          phone: '608-698-4832',
          active: true
        }
      ];
      const action = new UsersActions.Set(users);

      expect(action.type).toEqual(UsersActions.SET);
      expect(action.payload).toEqual(users);
    });
  });

  describe('UpdateItem', () => {
    it('should have type UPDATE_ITEM and require a user payload', () => {
      const user = {
        id: 1,
        email: 'admin1@email.com',
        phone: '608-698-4832',
        active: false
      };
      const action = new UsersActions.UpdateItem(user);

      expect(action.type).toEqual(UsersActions.UPDATE_ITEM);
      expect(action.payload).toEqual(user);
    });
  });
});
