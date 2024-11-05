import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraFimPageRoutingModule } from './compra-fim-routing.module';

import { CompraFimPage } from './compra-fim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraFimPageRoutingModule
  ],
  declarations: [CompraFimPage]
})
export class CompraFimPageModule {}
