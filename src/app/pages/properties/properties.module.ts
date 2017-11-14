import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesComponent} from './properties.component';
import {PropertiesRoutingModule} from './properties.routing';
import {PropertiesTableComponent} from './properties-table/properties-table.component';
import {ClarityModule} from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    ClarityModule.forChild()
  ],
  declarations: [PropertiesComponent, PropertiesTableComponent]
})
export class PropertiesModule {
}
