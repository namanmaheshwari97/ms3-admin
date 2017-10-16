import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {ClarityModule} from 'clarity-angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';

import * as fromRoot from './_actions/reducers';
import {CoreModule} from './core/core.module';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
