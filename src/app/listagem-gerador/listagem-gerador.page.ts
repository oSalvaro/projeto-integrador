import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-gerador',
  templateUrl: './listagem-gerador.page.html',
  styleUrls: ['./listagem-gerador.page.scss'],
})
export class ListagemGeradorPage implements OnInit {
public title:string = 'Listagem gerador';
  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router
  ) { }
    
  public gerador:Array<any> = [];
  ngOnInit() {
    this.listar ();
  }

  listar(){
    this.requisicao_service.get({
      controller:'gerador-listar'
    })
    .subscribe(
      (_res:any) => {
        this.gerador = _res;
      }
    );
  }

  editar(id:number){ 
    this.router.navigateByUrl('/cadastro-gerador-energia/' + id);
  } 
  
  excluir(id:number){
    this.requisicao_service.get({
      controller:'gerador-excluir',
      id:id
    })
    .subscribe ( () => {
      this.listar();
    } );
  }

}
