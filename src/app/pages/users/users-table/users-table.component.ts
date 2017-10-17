import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
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
      },
      phoneNumber: {
        title: 'Phone Number',
        sort: false,
        filter: false
      }
    }
  };

  data = [
    {
      id: 1,
      email: 'user1@wisc.edu',
      phoneNumber: null
    },
    {
      id: 2,
      email: 'user2@wisc.edu',
      phoneNumber: '608-123-1234'
    },
    {
      id: 3,
      email: 'user3@wisc.edu',
      phoneNumber: '608-234-2345'
    },
    {
      id: 4,
      email: 'user4@wisc.edu',
      phoneNumber: '608-345-3456'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onDelete(event) {
  }
}
