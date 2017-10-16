import {Action} from '@ngrx/store';

export const SET_INFO = 'Alert.Set';
export const SET_ERROR = 'Alert.Set';
export const CLEAR = 'Alert.Clear';

export class SetInfo implements Action {
  readonly type = SET_INFO;

  constructor(public payload: string) {
  }
}

export class SetError implements Action {
  readonly type = SET_ERROR;

  constructor(public payload: string) {
  }
}

export class Clear implements Action {
  readonly type = CLEAR;
}

export type All
  = SetInfo
  | SetError
  | Clear;
