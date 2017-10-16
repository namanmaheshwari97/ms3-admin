import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {VisitorGuard} from './auth/visitor.guard';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule',
    canLoad: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent,
    canActivate: [VisitorGuard]
  }, {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
