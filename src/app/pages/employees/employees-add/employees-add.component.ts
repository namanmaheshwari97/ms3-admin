import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeesAdd} from '../employees-add.effects';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.scss']
})
export class EmployeesAddComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private _store: Store<any>, private _fb: FormBuilder) {

    this.employeeForm = this._fb.group({
      email: ['', Validators.required],
      phoneNumber: [''],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    this._store.dispatch(new EmployeesAdd.Request(this.employeeForm.value))
  }
}
