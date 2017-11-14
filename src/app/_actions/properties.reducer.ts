import * as PropertiesActions from './properties.actions';
import {Properties} from '../_domains/properties';
import {PropertySummary} from '../_domains/property-summary';

export type Action = PropertiesActions.All;

const initialState = {
  list: [],
  cursor: null
};

export function reducer(state: Properties = initialState, action: Action): Properties {
  switch (action.type) {
    case PropertiesActions.SET: {
      return action.payload;
    }

    case PropertiesActions.ADD_ITEMS: {
      return {
        list: [...state.list, ...action.payload.list],
        cursor: action.payload.cursor
      };
    }

    case PropertiesActions.REMOVE_ITEM: {
      return {
        ...state,
        list: state.list.filter((item: PropertySummary) => action.payload !== item.id)
      };
    }

    default: {
      return state;
    }
  }
}
