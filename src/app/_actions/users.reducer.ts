import * as UsersActions from './users.actions';
import {UsersState} from '../_domains/users';
import {User} from '../_domains/user';

export type Action = UsersActions.All;

const initialState = {
  list: []
};

export function reducer(state: UsersState = initialState, action: Action): UsersState {
  switch (action.type) {
    case UsersActions.SET: {
      return {
        ...state,
        list: action.payload
      };
    }

    case UsersActions.UPDATE_ITEM: {
      return {
        ...state,
        list: state.list.map((item: User) =>
          item.id === action.payload.id ? action.payload : item)
      };
    }

    default: {
      return state;
    }
  }
}
