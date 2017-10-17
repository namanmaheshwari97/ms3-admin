import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EmailBlacklistComponent} from './email-blacklist.component';
import {EmailBlacklistTableComponent} from './email-blacklist-table/email-blacklist-table.component';
import {EmailBlacklistRoutingModule} from './email-blacklist.routing';
import { EmailBlacklistFormComponent } from './email-blacklist-form/email-blacklist-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmailBlacklistRoutingModule,
    Ng2SmartTableModule,
    EffectsModule.forFeature([])
  ],
  declarations: [EmailBlacklistComponent, EmailBlacklistTableComponent, EmailBlacklistFormComponent]
})
export class EmailBlacklistModule {
}
