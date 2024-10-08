import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendaEnergiaPage } from './venda-energia.page';

import { MenuPageModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: VendaEnergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendaEnergiaPageRoutingModule {}
