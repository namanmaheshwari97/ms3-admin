import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EmailBlacklistComponent} from './email-blacklist.component';
import {EmailBlacklistTableComponent} from './email-blacklist-table/email-blacklist-table.component';
import {EmailBlacklistRoutingModule} from './email-blacklist.routing';

@NgModule({
  imports: [
    CommonModule,
    EmailBlacklistRoutingModule,
    Ng2SmartTableModule,
    EffectsModule.forFeature([])
  ],
  declarations: [EmailBlacklistComponent, EmailBlacklistTableComponent]
})
export class EmailBlacklistModule {
}
