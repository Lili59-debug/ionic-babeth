import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdhererPageRoutingModule } from './adherer-routing.module';

import { AdhererPage } from './adherer.page';
import { FooterComponent } from '../../components/footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdhererPageRoutingModule
  ],
  declarations: [AdhererPage, FooterComponent]
})
export class AdhererPageModule {}
