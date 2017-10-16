import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {SignIn} from './sign-in.effects';
import {SignOut} from './sign-out.effects';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AuthEffects} from './auth.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      SignIn.Effects,
      SignOut.Effects,
      AuthEffects
    ]),
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {
}
