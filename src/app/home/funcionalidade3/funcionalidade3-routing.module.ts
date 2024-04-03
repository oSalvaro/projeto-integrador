import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidade3Page } from './funcionalidade3.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidade3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidade3PageRoutingModule {}
