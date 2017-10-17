import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersTableComponent} from './users-table/users-table.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
      path: '',
      component: UsersTableComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
