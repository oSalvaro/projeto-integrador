import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public title:string = "Cadastro";
  public id:number    = 0;
  public nome:string  = '';
  public email:string = '';
  public senha:string = '';
  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activated_router:ActivatedRoute
  ) 
  { 
    this.activated_router.params
      .subscribe(
        (params:any) => {
          if (params.id != undefined){
            this.id = params.id;
            if (this.id != 0){
              this.requisicao_service.get({
                controller:'usuario-get',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  this.nome  = _dados.nome;
                  this.email = _dados.email;
                  this.senha = _dados.senha;
                }
              );
            }
          }
      }
    );
    
  }

  salvar(){
 
    const fd = new FormData();
    fd.append('controller','usuario');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('nome',this.nome);
    fd.append('senha',this.senha);
    fd.append('email',this.email);
    

    this.requisicao_service.post(fd)
    .subscribe(
      () => {
        location.href = '/usuarios';
      }
    );
  }
  ngOnInit() {
  }

}
