import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {EmailBlacklistComponent} from './email-blacklist.component';
import {EmailBlacklistTableComponent} from './email-blacklist-table/email-blacklist-table.component';
import {EmailBlacklistRoutingModule} from './email-blacklist.routing';
import {EmailBlacklistFormComponent} from './email-blacklist-form/email-blacklist-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmailBlacklistGet} from './email-blacklist.effects';
import {EmailBlacklistAdd} from './email-blacklist-add.effects';
import {EmailBlacklistRemove} from './email-blacklist-remove.effects';
import {ClarityModule} from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmailBlacklistRoutingModule,
    ClarityModule.forChild(),
    EffectsModule.forFeature([
      EmailBlacklistGet.Effects,
      EmailBlacklistAdd.Effects,
      EmailBlacklistRemove.Effects
    ])
  ],
  declarations: [EmailBlacklistComponent, EmailBlacklistTableComponent, EmailBlacklistFormComponent]
})
export class EmailBlacklistModule {
}
