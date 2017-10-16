import {Action} from '@ngrx/store';
import {Auth} from '../_domains/auth';

export const SET = 'Auth.Set';
export const CLEAR = 'Auth.Clear';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: Auth) {
  }
}

export class Clear implements Action {
  readonly type = CLEAR;
}

export type All
  = Set
  | Clear;
