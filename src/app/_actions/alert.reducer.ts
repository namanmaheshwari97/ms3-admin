import * as AlertActions from './alert.actions';
import {Alert, ALERT_TYPE} from '../_domains/alert';

export type Action = AlertActions.All;

const initialState = {
  type: null,
  message: null
};

export function reducer(state: Alert = initialState, action: Action): Alert {
  switch (action.type) {
    case AlertActions.SET_INFO: {
      return {
        type: ALERT_TYPE.INFO,
        message: action.payload
      };
    }

    case AlertActions.SET_ERROR: {
      return {
        type: ALERT_TYPE.ERROR,
        message: action.payload
      };
    }

    case AlertActions.CLEAR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
