import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users.routing';
import {UsersTableComponent} from './users-table/users-table.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EffectsModule} from '@ngrx/effects';
import {Users} from './users.effects';
import {UsersRemove} from './users-remove.effects';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
    EffectsModule.forFeature([
      Users.Effects,
      UsersRemove.Effects
    ])
  ],
  declarations: [UsersComponent, UsersTableComponent]
})
export class UsersModule {
}
