import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidade2Page } from './funcionalidade2.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidade2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidade2PageRoutingModule {}
