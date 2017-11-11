import * as EmailBlacklistActions from './email-blacklist.actions';
import {EmailItem} from '../_domains/email-item';

describe('Email Blacklist Actions', () => {
  describe('Set', () => {
    it('should have type SET and require a email item list payload', () => {
      const blacklist: EmailItem[] = [
        {
          id: 1,
          email: 'blacklist1@email.com'
        },
        {
          id: 2,
          email: 'blacklist2@email.com'
        }
      ];
      const action = new EmailBlacklistActions.Set(blacklist);

      expect(action.type).toEqual(EmailBlacklistActions.SET);
      expect(action.payload).toEqual(blacklist);
    });
  });

  describe('AddItem', () => {
    it('should have type ADD_ITEM and require a EmailItem payload', () => {
      const email: EmailItem = {
        id: 1,
        email: 'blacklist1@email.com'
      };
      const action = new EmailBlacklistActions.AddItem(email);

      expect(action.type).toEqual(EmailBlacklistActions.ADD_ITEM);
      expect(action.payload).toEqual(email);
    });
  });

  describe('RemoveItem', () => {
    it('should have type REMOVE_ITEM and require a id number payload', () => {
      const id = 1;
      const action = new EmailBlacklistActions.RemoveItem(id);

      expect(action.type).toEqual(EmailBlacklistActions.REMOVE_ITEM);
      expect(action.payload).toEqual(id);
    });
  });
});
