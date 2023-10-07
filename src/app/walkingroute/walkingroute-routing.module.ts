import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkingroutePage } from './walkingroute.page';

const routes: Routes = [
  {
    path: '',
    component: WalkingroutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkingroutePageRoutingModule {}
