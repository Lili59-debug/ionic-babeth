import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayonsPage } from './rayons.page';

const routes: Routes = [
  {
    path: '',
    component: RayonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayonsPageRoutingModule {}
