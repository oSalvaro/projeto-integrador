import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendaEnergiaPageRoutingModule } from './venda-energia-routing.module';

import { VendaEnergiaPage } from './venda-energia.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendaEnergiaPageRoutingModule,
    MenuPageModule
  ],
  declarations: [VendaEnergiaPage]
})
export class VendaEnergiaPageModule {}
