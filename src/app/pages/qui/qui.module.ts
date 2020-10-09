import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiPageRoutingModule } from './qui-routing.module';

import { QuiPage } from './qui.page';
import { ComposantsModule } from '../../composants.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiPageRoutingModule,
    ComposantsModule
  ],
  declarations: [QuiPage]
})
export class QuiPageModule {}
