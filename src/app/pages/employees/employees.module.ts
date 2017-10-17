import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './employees.component';
import {EmployeesRoutingModule} from './employees.routing';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EmployeesTableComponent} from './employees-table/employees-table.component';
import {EmployeesAddComponent} from './employees-add/employees-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {Employees} from './employees.effects';
import {EmployeesAdd} from './employees-add.effects';
import {EmployeesRemove} from './employees-remove.effects';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    EffectsModule.forFeature([
      Employees.Effects,
      EmployeesAdd.Effects,
      EmployeesRemove.Effects
    ])
  ],
  declarations: [EmployeesComponent, EmployeesTableComponent, EmployeesAddComponent]
})
export class EmployeesModule {
}
