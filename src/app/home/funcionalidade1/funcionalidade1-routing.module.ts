import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidade1Page } from './funcionalidade1.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidade1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidade1PageRoutingModule {}
