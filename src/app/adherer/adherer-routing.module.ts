import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhererPage } from './adherer.page';

const routes: Routes = [
  {
    path: '',
    component: AdhererPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhererPageRoutingModule {}
