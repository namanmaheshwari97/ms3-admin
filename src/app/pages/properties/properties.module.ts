import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesComponent} from './properties.component';
import {PropertiesRoutingModule} from './properties.routing';
import {PropertiesTableComponent} from './properties-table/properties-table.component';
import {ClarityModule} from 'clarity-angular';
import {EffectsModule} from '@ngrx/effects';
import {PropertiesGet} from './properties.effects';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    ClarityModule.forChild(),
    EffectsModule.forFeature([
      PropertiesGet.Effects
    ])
  ],
  declarations: [PropertiesComponent, PropertiesTableComponent]
})
export class PropertiesModule {
}
