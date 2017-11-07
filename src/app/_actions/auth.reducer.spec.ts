import {reducer} from './auth.reducer';
import * as AuthActions from './auth.actions';

describe('Auth Reducer', () => {
  const initialState = {token: null, email: null};
  const auth = {
    token: 'testToken',
    email: 'testUser@email.com'
  };

  it('should return auth object with payload on Set action', () => {
    const action = new AuthActions.Set(auth);

    expect(reducer(initialState, action)).toEqual(auth);
  });

  it('should return initial state if Clear action is input', () => {
    const action = new AuthActions.Clear();

    expect(reducer(auth, action)).toEqual(initialState);
  });
});
