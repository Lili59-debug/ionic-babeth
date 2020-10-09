import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OubliPageRoutingModule } from './oubli-routing.module';

import { OubliPage } from './oubli.page';
import { ComposantsModule } from '../../composants.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OubliPageRoutingModule,
    ComposantsModule
  ],
  declarations: [OubliPage]
})
export class OubliPageModule {}
