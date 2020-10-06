import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayonsPageRoutingModule } from './rayons-routing.module';

import { RayonsPage } from './rayons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayonsPageRoutingModule
  ],
  declarations: [RayonsPage]
})
export class RayonsPageModule {}
