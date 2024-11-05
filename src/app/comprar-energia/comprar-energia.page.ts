import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LocalstorageService } from '../service/localstorage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar-energia',
  templateUrl: './comprar-energia.page.html',
  styleUrls: ['./comprar-energia.page.scss'],
})
export class ComprarEnergiaPage implements OnInit {

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController,
    private ls:LocalstorageService,
    private activated_router:ActivatedRoute 
  ) { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  }

  venda:Array<any> = [];
  comprar(){
    this.requisicao_service.get({
      controller:'compra',
      id_venda:this.ls.get('venda_id_temp')
    })
    .subscribe(
      (_res:any) => {
        location.href = '/compra-fim'
      }
    );
  }
  }

