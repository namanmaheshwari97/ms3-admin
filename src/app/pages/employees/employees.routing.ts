import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees.component';
import {EmployeesTableComponent} from './employees-table/employees-table.component';
import {EmployeesAddComponent} from './employees-add/employees-add.component';

const routes: Routes = [{
  path: '',
  component: EmployeesComponent,
  children: [
    {
      path: '',
      component: EmployeesTableComponent
    },
    {
      path: 'add',
      component: EmployeesAddComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {
}
