import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGeradorEnergiaPage } from './cadastro-gerador-energia.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGeradorEnergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroGeradorEnergiaPageRoutingModule {}
