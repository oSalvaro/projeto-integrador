import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LocalstorageService } from '../service/localstorage.service';


@Component({
  selector: 'app-listagem-venda',
  templateUrl: './listagem-venda.page.html',
  styleUrls: ['./listagem-venda.page.scss'],
})
export class ListagemVendaPage implements OnInit {
  public title:string = 'Listagem de vendas';
  public isShowDeleteDialog:boolean = false; 
  public alertButtons:Array<any> = [];

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController,
    private ls:LocalstorageService
  ) { }

  public venda:Array<any> = [];
  ngOnInit(){
    this.listar();
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

  editar(id:number){ 
    this.router.navigateByUrl('venda-energia/' + id);
  } 
  
}


