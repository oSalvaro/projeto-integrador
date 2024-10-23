import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-listagem-gerador',
  templateUrl: './listagem-gerador.page.html',
  styleUrls: ['./listagem-gerador.page.scss'],
})
  export class ListagemGeradorPage implements OnInit {
  public title:string = 'Listagem gerador';
  public isShowDeleteDialog:boolean = false; 
  public alertButtons:Array<any> = [];
  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController,
    private ls:LocalstorageService
  ) { }
    
  public gerador:Array<any> = [];
  ngOnInit() {
    this.listar ();
  }

  go(rota:string){
    window.location.href = rota;
  }
  
  async listar(){

    const loading = await this.loadingCtrl.create({
      message: 'Carregando...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'gerador-listar',
      user_id:this.ls.get('user_id')
    })
    .subscribe(
      (_res:any) => {
        loading.dismiss();
        this.gerador = _res;
      }
    );
  }

  editar(id:number){ 
    this.router.navigateByUrl('/cadastro-gerador-energia/' + id);
  } 
  
  excluir(id:number){
    this.isShowDeleteDialog = true;
    this.alertButtons = [{
      text: 'Não',
      role: 'cancel',
      handler: () => {
        this.isShowDeleteDialog = false;
      },
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.requisicao_service.get({
          controller: 'gerador-excluir',
          id:id
        })
        .subscribe (
          () => {
          this.listar();
        } 
      );
    },
  }];
  }
}