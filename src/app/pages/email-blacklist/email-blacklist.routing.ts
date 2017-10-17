import {EmailBlacklistComponent} from './email-blacklist.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmailBlacklistTableComponent} from './email-blacklist-table/email-blacklist-table.component';
const routes: Routes = [{
  path: '',
  component: EmailBlacklistComponent,
  children: [
    {
      path: '',
      component: EmailBlacklistTableComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailBlacklistRoutingModule {
}
