import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdhererPageRoutingModule } from './adherer-routing.module';

import { AdhererPage } from './adherer.page';
import { ComposantsModule } from '../../composants.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdhererPageRoutingModule,
    ComposantsModule
  ],
  declarations: [AdhererPage]
})
export class AdhererPageModule {}
