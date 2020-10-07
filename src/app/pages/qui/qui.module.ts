import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiPageRoutingModule } from './qui-routing.module';

import { QuiPage } from './qui.page';
import { FooterComponent } from '../../components/footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiPageRoutingModule
  ],
  declarations: [QuiPage, FooterComponent]
})
export class QuiPageModule {}
