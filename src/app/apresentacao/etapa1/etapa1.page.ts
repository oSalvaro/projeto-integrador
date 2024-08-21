import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.page.html',
  styleUrls: ['./etapa1.page.scss'],
})
export class Etapa1Page implements OnInit {
public title:string = 'Etapa 1';
public texto:string = '';
  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  ngOnInit() {
    this.requisicao_service.get({
      controller:'traducao-get',
      etapa:1
    })
    .subscribe(
      (_res:any) => {
        this.texto = _res;
      }
    );
  }

}
