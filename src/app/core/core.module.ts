import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from '../auth/auth.module';
import {RestApiService} from './rest-api.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AuthModule
  ],
  declarations: [],
  providers: [RestApiService]
})
export class CoreModule {
}
