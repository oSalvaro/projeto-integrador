import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemVendaPageRoutingModule } from './listagem-venda-routing.module';

import { ListagemVendaPage } from './listagem-venda.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemVendaPageRoutingModule,
    MenuPageModule
  ],
  declarations: [ListagemVendaPage]
})
export class ListagemVendaPageModule {}
