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
  {
    path: 'venda-energia/:id',
    loadChildren: () => import('./venda-energia/venda-energia.module').then( m => m.VendaEnergiaPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'card-exemplo',
    loadChildren: () => import('./card-exemplo/card-exemplo.module').then( m => m.CardExemploPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'leilao',
    loadChildren: () => import('./leilao/leilao.module').then( m => m.LeilaoPageModule)
  },
  {
    path: 'listagem-venda',
    loadChildren: () => import('./listagem-venda/listagem-venda.module').then( m => m.ListagemVendaPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: 'comprar-energia',
    loadChildren: () => import('./comprar-energia/comprar-energia.module').then( m => m.ComprarEnergiaPageModule)
  },
  {
    path: 'compra-fim',
    loadChildren: () => import('./compra-fim/compra-fim.module').then( m => m.CompraFimPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
