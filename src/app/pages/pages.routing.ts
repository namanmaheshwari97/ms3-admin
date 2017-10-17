import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  }, {
    path: 'properties',
    loadChildren: './properties/properties.module#PropertiesModule',
  }, {
    path: 'employees',
    loadChildren: './employees/employees.module#EmployeesModule',
  }, {
    path: 'blacklist',
    loadChildren: './email-blacklist/email-blacklist.module#EmailBlacklistModule',
  }, {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
