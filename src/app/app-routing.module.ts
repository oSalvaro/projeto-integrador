import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'etapa1',
    loadChildren: () => import('./apresentacao/etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'etapa2',
    loadChildren: () => import('./apresentacao/etapa2/etapa2.module').then( m => m.Etapa2PageModule)
  },
  {
    path: 'etapa3',
    loadChildren: () => import('./apresentacao/etapa3/etapa3.module').then( m => m.Etapa3PageModule)
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'funcionalidade1',
    loadChildren: () => import('./home/funcionalidade1/funcionalidade1.module').then( m => m.Funcionalidade1PageModule)
  },
  {
    path: 'funcionalidade2',
    loadChildren: () => import('./home/funcionalidade2/funcionalidade2.module').then( m => m.Funcionalidade2PageModule)
  },
  {
    path: 'funcionalidade3',
    loadChildren: () => import('./home/funcionalidade3/funcionalidade3.module').then( m => m.Funcionalidade3PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro/:id',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'cadastro-gerador-energia',
    loadChildren: () => import('./cadastro-gerador-energia/cadastro-gerador-energia.module').then( m => m.CadastroGeradorEnergiaPageModule)
  },
  {
    path: 'cadastro-gerador-energia/:id',
    loadChildren: () => import('./cadastro-gerador-energia/cadastro-gerador-energia.module').then( m => m.CadastroGeradorEnergiaPageModule)
  },
  {
    path: 'listagem-gerador',
    loadChildren: () => import('./listagem-gerador/listagem-gerador.module').then( m => m.ListagemGeradorPageModule)
  },
  {
    path: 'venda-energia',
    loadChildren: () => import('./venda-energia/venda-energia.module').then( m => m.VendaEnergiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
