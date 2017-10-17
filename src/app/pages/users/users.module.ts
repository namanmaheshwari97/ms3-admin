import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users.routing';
import {UsersTableComponent} from './users-table/users-table.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [UsersComponent, UsersTableComponent]
})
export class UsersModule {
}
