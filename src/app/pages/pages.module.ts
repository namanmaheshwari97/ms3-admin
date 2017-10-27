import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages.routing';
import {ClarityModule} from 'clarity-angular';
import { AlertBarComponent } from './alert-bar/alert-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ClarityModule.forChild()
  ],
  declarations: [PagesComponent, AlertBarComponent]
})
export class PagesModule {
}
