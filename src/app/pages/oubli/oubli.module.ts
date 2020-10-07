import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OubliPageRoutingModule } from './oubli-routing.module';

import { OubliPage } from './oubli.page';
import { FooterComponent } from '../../components/footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OubliPageRoutingModule
  ],
  declarations: [OubliPage, FooterComponent]
})
export class OubliPageModule {}
