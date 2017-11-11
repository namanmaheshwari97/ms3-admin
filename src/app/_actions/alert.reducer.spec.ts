import {reducer} from './alert.reducer';
import * as AlertActions from './alert.actions';
import {ALERT_TYPE} from '../_domains/alert';

describe('Alert Reducer', () => {
  const initialState = {type: null, message: null};
  const message = 'test';

  it('should return info alert object with payload message if SetInfo action is input', () => {
    const action = new AlertActions.SetInfo(message);

    expect(reducer(initialState, action)).toEqual({
      type: ALERT_TYPE.INFO,
      message: message
    });
  });

  it('should return error alert object with payload message if SetInfo action is input', () => {
    const action = new AlertActions.SetError(message);

    expect(reducer(initialState, action)).toEqual({
      type: ALERT_TYPE.ERROR,
      message: message
    });
  });

  it('should return initial stateif Clear action is input', () => {
    const previousState = {
      type: ALERT_TYPE.INFO,
      message: message
    };
    const action = new AlertActions.Clear();

    expect(reducer(previousState, action)).toEqual(initialState);
  });
});
