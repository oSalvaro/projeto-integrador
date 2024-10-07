import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemVendaPage } from './listagem-venda.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemVendaPageRoutingModule {}
