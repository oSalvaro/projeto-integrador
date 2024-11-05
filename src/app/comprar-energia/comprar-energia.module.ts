import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprarEnergiaPageRoutingModule } from './comprar-energia-routing.module';

import { ComprarEnergiaPage } from './comprar-energia.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarEnergiaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ComprarEnergiaPage]
})
export class ComprarEnergiaPageModule {}
