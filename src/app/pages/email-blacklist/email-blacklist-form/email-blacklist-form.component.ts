import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailForm} from '../../../_domains/email-form';

@Component({
  selector: 'app-email-blacklist-form',
  templateUrl: './email-blacklist-form.component.html',
  styleUrls: ['./email-blacklist-form.component.scss']
})
export class EmailBlacklistFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<EmailForm> = new EventEmitter<EmailForm>();

  emailForm: FormGroup;

  constructor(private _fb: FormBuilder) {

    this.emailForm = this._fb.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {

    this.formSubmit.emit(this.emailForm.value);
  }
}
