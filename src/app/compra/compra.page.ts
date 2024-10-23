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
  public title:string = 'Compra';
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
    this.listar();
    this.listargerador();
  }

  async listar(){

    const loading = await this.loadingCtrl.create({
      message: 'Carregando...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'venda-listar-unico',
      user_id:this.ls.get('user_id')
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

  comprar(){
      
  }

}