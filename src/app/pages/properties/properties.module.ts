import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesComponent} from './properties.component';
import {PropertiesRoutingModule} from './properties.routing';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ],
  declarations: [PropertiesComponent]
})
export class PropertiesModule {
}
