import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {
  settings = {
    attr: {
      class: 'table'
    },
    actions: {
      edit: false
    },
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
      email: 'Sincere@april.biz',
      phoneNumber: '608-618-8342'
    },
    {
      id: 2,
      email: 'Shanna@melissa.tv',
      phoneNumber: '608-618-8343'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
