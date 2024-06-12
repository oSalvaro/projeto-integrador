import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemGeradorPageRoutingModule } from './listagem-gerador-routing.module';

import { ListagemGeradorPage } from './listagem-gerador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemGeradorPageRoutingModule
  ],
  declarations: [ListagemGeradorPage]
})
export class ListagemGeradorPageModule {}
