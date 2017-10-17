import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-email-blacklist-table',
  templateUrl: './email-blacklist-table.component.html',
  styleUrls: ['./email-blacklist-table.component.scss']
})
export class EmailBlacklistTableComponent implements OnInit {
  settings = {
    attr: {
      class: 'table'
    },
    actions: {
      edit: false
    },
    mode: 'external',
    hideSubHeader: true,
    columns: {
      id: {
        title: 'ID',
        sort: false,
        filter: false
      },
      email: {
        title: 'Email',
        sort: false,
        filter: false
      }
    }
  };

  data = [
    {
      id: 1,
      email: 'black1@email.com'
    },
    {
      id: 2,
      email: 'black2@email.com'
    },
    {
      id: 3,
      email: 'black3@email.com'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onDelete(event) {
  }
}
