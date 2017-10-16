import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {SignIn} from './sign-in.effects';
import {SignOut} from './sign-out.effects';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AuthEffects} from './auth.effects';
import { AuthGuard } from './auth.guard';
import { VisitorGuard } from './visitor.guard';

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
  exports: [LoginComponent],
  providers: [AuthGuard, VisitorGuard]
})
export class AuthModule {
}
