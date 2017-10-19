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

    case UsersActions.REMOVE_ITEM: {
      return {
        ...state,
        list: state.list.filter((item: User) => action.payload !== item.id)
      };
    }

    default: {
      return state;
    }
  }
}
