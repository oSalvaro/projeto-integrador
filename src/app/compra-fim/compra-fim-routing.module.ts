import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraFimPage } from './compra-fim.page';

const routes: Routes = [
  {
    path: '',
    component: CompraFimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraFimPageRoutingModule {}
