import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PropertiesComponent} from './properties.component';
import {PropertiesTableComponent} from './properties-table/properties-table.component';

const routes: Routes = [{
  path: '',
  component: PropertiesComponent,
  children: [
    {
      path: '',
      component: PropertiesTableComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesRoutingModule {
}
