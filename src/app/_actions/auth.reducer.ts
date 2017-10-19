import * as AuthActions from './auth.actions';
import {Auth} from '../_domains/auth';

export type Action = AuthActions.All;

const initialState = {
  token: null,
  email: null
};

export function reducer(state: Auth = initialState, action: Action): Auth {
  switch (action.type) {
    case AuthActions.SET: {
      return action.payload;
    }

    case AuthActions.CLEAR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
