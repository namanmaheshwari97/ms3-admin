import {Action} from '@ngrx/store';
import {EmailBlacklist} from '../_domains/email-blacklist';
import {EmailItem} from '../_domains/email-item';

export const SET = 'EmailBlacklist.SET';
export const ADD_ITEM = 'EmailBlacklist.ADD_ITEM';
export const REMOVE_ITEM = 'EmailBlacklist.REMOVE_ITEM';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: EmailItem[]) {
  }
}

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: EmailItem) {
  }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: number) {
  }
}

export type All
  = Set
  | AddItem
  | RemoveItem;
