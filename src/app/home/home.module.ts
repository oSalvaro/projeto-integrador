import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Funcionalidade1Page } from './funcionalidade1/funcionalidade1.page';
import { Funcionalidade2Page } from './funcionalidade2/funcionalidade2.page';
import { Funcionalidade3Page } from './funcionalidade3/funcionalidade3.page';

import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

import { MenuPageModule } from '../menu/menu.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuPageModule
  ],
  declarations: [HomePage,Funcionalidade1Page,Funcionalidade2Page,Funcionalidade3Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
