import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroGeradorEnergiaPageRoutingModule } from './cadastro-gerador-energia-routing.module';

import { CadastroGeradorEnergiaPage } from './cadastro-gerador-energia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroGeradorEnergiaPageRoutingModule
  ],
  declarations: [CadastroGeradorEnergiaPage]
})
export class CadastroGeradorEnergiaPageModule {}
