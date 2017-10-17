import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-blacklist-form',
  templateUrl: './email-blacklist-form.component.html',
  styleUrls: ['./email-blacklist-form.component.scss']
})
export class EmailBlacklistFormComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private _fb: FormBuilder) {

    this.emailForm = this._fb.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
