import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeilaoPageRoutingModule } from './leilao-routing.module';

import { LeilaoPage } from './leilao.page';

import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeilaoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [LeilaoPage]
})
export class LeilaoPageModule {}
