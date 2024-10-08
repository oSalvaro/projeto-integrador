import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemGeradorPageRoutingModule } from './listagem-gerador-routing.module';

import { ListagemGeradorPage } from './listagem-gerador.page';

import { MenuPageModule } from '../menu/menu.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemGeradorPageRoutingModule,
    MenuPageModule
  ],
  declarations: [ListagemGeradorPage]
})
export class ListagemGeradorPageModule {}
