import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.scss']
})
export class EmployeesAddComponent implements OnInit {
  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl(''),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }


  submitted = false;
  onSubmit() {
  }

  addNewEmployeeAddress() {
    this.employeeForm.reset();
    this.submitted = false;
  }
}
