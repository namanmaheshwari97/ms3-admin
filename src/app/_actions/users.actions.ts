import {Action} from '@ngrx/store';
import {User} from '../_domains/user';

export const SET = 'Users.SET';
export const REMOVE_ITEM = 'Users.REMOVE_ITEM';
export const UPDATE_ITEM = 'Users.UPDATE_ITEM';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: User[]) {
  }
}

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;

  constructor(public payload: User) {
  }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: number) {
  }
}

export type All
  = Set
  | UpdateItem
  | RemoveItem;
