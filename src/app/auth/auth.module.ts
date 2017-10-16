import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {SignIn} from './sign-in.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      SignIn.Effects
    ])
  ],
  declarations: []
})
export class AuthModule { }
