import * as EmailBlacklistActions from './email-blacklist.actions';
import {EmailItem} from '../_domains/email-item';
import {EmailBlacklist} from '../_domains/email-blacklist';

describe('Email Blacklist Actions', () => {
  describe('Set', () => {
    it('should have type SET and require a email item list payload', () => {
      const blacklist: EmailBlacklist = {
        list: [
          {
            email: 'blacklist1@email.com',
            createdAt: '2017-10-21T00:00:00'
          },
          {
            email: 'blacklist2@email.com',
            createdAt: '2017-10-21T00:00:00'
          }
        ]
      };
      const action = new EmailBlacklistActions.Set(blacklist);

      expect(action.type).toEqual(EmailBlacklistActions.SET);
      expect(action.payload).toEqual(blacklist);
    });
  });

  describe('AddItem', () => {
    it('should have type ADD_ITEM and require a EmailItem payload', () => {
      const email: EmailItem = {
        email: 'blacklist1@email.com',
        createdAt: '2017-10-21T00:00:00'
      };
      const action = new EmailBlacklistActions.AddItem(email);

      expect(action.type).toEqual(EmailBlacklistActions.ADD_ITEM);
      expect(action.payload).toEqual(email);
    });
  });

  describe('RemoveItem', () => {
    it('should have type REMOVE_ITEM and require a id number payload', () => {
      const email = 'blacklist';
      const action = new EmailBlacklistActions.RemoveItem(email);

      expect(action.type).toEqual(EmailBlacklistActions.REMOVE_ITEM);
      expect(action.payload).toEqual(email);
    });
  });
});
