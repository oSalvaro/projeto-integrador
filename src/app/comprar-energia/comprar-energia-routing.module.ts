import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarEnergiaPage } from './comprar-energia.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarEnergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarEnergiaPageRoutingModule {}
