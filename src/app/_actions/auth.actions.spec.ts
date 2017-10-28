import * as AuthActions from './auth.actions';
import {Auth} from '../_domains/auth';

describe('Auth Actions', () => {
  describe('Set', () => {
    it('should have type SET_INFO and require a string payload', () => {
      const auth: Auth = {
        token: 'testToken',
        email: 'test@email.com'
      };
      const action = new AuthActions.Set(auth);

      expect(action.type).toEqual(AuthActions.SET);
      expect(action.payload).toEqual(auth);
    });
  });

  describe('Clear', () => {
    it('should have type CLEAR', () => {
      const action = new AuthActions.Clear();

      expect(action.type).toEqual(AuthActions.CLEAR);
    });
  });
});
