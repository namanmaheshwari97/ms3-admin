import * as EmailBlacklistActions from './email-blacklist.actions';
import {EmailBlacklist} from '../_domains/email-blacklist';
import {EmailItem} from '../_domains/email-item';

export type Action = EmailBlacklistActions.All;

const initialState = {
  list: []
};

export function reducer(state: EmailBlacklist = initialState, action: Action): EmailBlacklist {
  switch (action.type) {
    case EmailBlacklistActions.SET: {
      return {
        ...state,
        list: action.payload
      }
    }

    case EmailBlacklistActions.ADD_ITEM: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }

    case EmailBlacklistActions.REMOVE_ITEM: {
      return {
        ...state,
        list: state.list.filter((item: EmailItem) => action.payload != item.id)
      };
    }

    default: {
      return state;
    }
  }
}
