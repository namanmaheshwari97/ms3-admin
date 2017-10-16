import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './employees.component';
import {EmployeesRoutingModule} from './employees.routing';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [EmployeesComponent]
})
export class EmployeesModule {
}
