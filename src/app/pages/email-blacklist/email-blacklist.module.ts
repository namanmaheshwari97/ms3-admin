import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EmailBlacklistComponent} from './email-blacklist.component';
import {EmailBlacklistTableComponent} from './email-blacklist-table/email-blacklist-table.component';
import {EmailBlacklistRoutingModule} from './email-blacklist.routing';
import {EmailBlacklistFormComponent} from './email-blacklist-form/email-blacklist-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmailBlacklist} from './email-blacklist.effects';
import {EmailBlacklistAdd} from './email-blacklist-add.effects';
import {EmailBlacklistRemove} from "./email-blacklist-remove.effects";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmailBlacklistRoutingModule,
    Ng2SmartTableModule,
    EffectsModule.forFeature([
      EmailBlacklist.Effects,
      EmailBlacklistAdd.Effects,
      EmailBlacklistRemove.Effects
    ])
  ],
  declarations: [EmailBlacklistComponent, EmailBlacklistTableComponent, EmailBlacklistFormComponent]
})
export class EmailBlacklistModule {
}
