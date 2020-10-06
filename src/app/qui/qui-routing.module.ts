import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuiPage } from './qui.page';

const routes: Routes = [
  {
    path: '',
    component: QuiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuiPageRoutingModule {}
