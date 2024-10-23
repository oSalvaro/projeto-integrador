import { Component } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public title:string = 'Home';
public nome:Array<any> = [];

  constructor(
    public ls:LocalstorageService,
    public router:Router,
    public requisicao_service:RequisicaoService
  ) {

  }
  
  ngOnInit() {

    if (this.ls.get('is_autenticado') !== true){
      location.href = '/apresentacao';
    }else{
      
    }

    this.requisicao_service.get({
      controller: 'usuario-listar-unico',
      user_id:this.ls.get('user_id')
    })
    .subscribe(
      (_res:any) => {
        this.nome = _res;
      }
    );
    
  }


}
