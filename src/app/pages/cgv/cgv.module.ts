import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CgvPageRoutingModule } from './cgv-routing.module';

import { CgvPage } from './cgv.page';
import { ComposantsModule } from '../../composants.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CgvPageRoutingModule,
    ComposantsModule
  ],
  declarations: [CgvPage]
})
export class CgvPageModule {}
