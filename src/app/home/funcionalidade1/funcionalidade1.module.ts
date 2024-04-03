import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Funcionalidade1PageRoutingModule } from './funcionalidade1-routing.module';

import { Funcionalidade1Page } from './funcionalidade1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Funcionalidade1PageRoutingModule
  ],
  declarations: []
})
export class Funcionalidade1PageModule {}
