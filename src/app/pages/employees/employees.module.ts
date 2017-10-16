import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './employees.component';
import {EmployeesRoutingModule} from './employees.routing';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EmployeesTableComponent} from './employees-table/employees-table.component';
import {EmployeesAddComponent} from './employees-add/employees-add.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
  ],
  declarations: [EmployeesComponent, EmployeesTableComponent, EmployeesAddComponent]
})
export class EmployeesModule {
}
