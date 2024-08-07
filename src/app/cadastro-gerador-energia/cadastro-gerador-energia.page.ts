import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-gerador-energia',
  templateUrl: './cadastro-gerador-energia.page.html',
  styleUrls: ['./cadastro-gerador-energia.page.scss'],
})
export class CadastroGeradorEnergiaPage implements OnInit {

public title:string = "Tipo de gerador de energia";
public id:number = 0;
public nome:string = '';
public descricao:string = '';

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activated_router:ActivatedRoute
  ) {
    
      this.activated_router.params
      .subscribe(
        (params:any) => {
          if (params.id != undefined){
            this.id = params.id;
            if (this.id != 0){
              this.requisicao_service.get({
                controller:'gerador-get',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  this.descricao  = _dados.descricao;
                }
              );
            }
          }
      }
    );
    
   }

  salvar(){
    const fd = new FormData();
    fd.append('controller','gerador');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('descricao',this.descricao);

    this.requisicao_service.post(fd)
    .subscribe(
      () => {
        location.href = '/listagem-gerador';
      }
    );
  }

  ngOnInit() {
  }

}