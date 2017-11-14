import {Action} from '@ngrx/store';
import {Properties} from '../_domains/properties';

export const SET = 'Properties.Set';
export const ADD_ITEMS = 'Properties.AddItems';
export const REMOVE_ITEM = 'Properties.RemoveItem';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: Properties) {
  }
}

export class AddItems implements Action {
  readonly type = ADD_ITEMS;

  constructor(public payload: Properties) {
  }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: number) {
  }
}

export type All
  = Set
  | AddItems
  | RemoveItem;
