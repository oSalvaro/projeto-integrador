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


slideOpts = {
  initialSlide: 0,  // Slide inicial
  speed: 400,       // Velocidade da transição
  loop: true,       // Loop contínuo
  spaceBetween: 10, // Espaçamento entre os slides
  slidesPerView: 1  // Quantidade de slides visíveis
};


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

  go(rota:string){
    window.location.href = rota;
  }


}
