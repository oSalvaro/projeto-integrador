import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  public title:string = 'Comprar energia';
  public id:number    = 0;
  public isShowDeleteDialog:boolean = false; 
  public alertButtons:Array<any> = [];

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController,
    private ls:LocalstorageService
  ) { }

  public venda:Array<any> = [];
  ngOnInit(){
    this.ls.set('venda_id_temp',0);
    this.listar();
    this.listargerador();
  }

  async listar(){

    const loading = await this.loadingCtrl.create({
      message: 'Carregando...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'venda-listar-status'
    })
    .subscribe(
      (_res:any) => {
        loading.dismiss();
        this.venda = _res;
      }
    );
  }

  public gerador:Array<any> = [];
  listargerador(){
    this.requisicao_service.get({
      controller:'gerador-listar',
      user_id:this.ls.get('user_id')
    })
    .subscribe(
      (_res:any) => {
        this.gerador = _res;
      }
    );
  }

  comprar(id_venda:number){
    this.ls.set('venda_id_temp',id_venda);
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
          controller: 'venda-listar-status',
        })
        .subscribe (
          () => {
          location.href = '/comprar-energia';
        } 
      );
    },
  }];
  }

  go(rota:string){
    window.location.href = rota;
  }

}