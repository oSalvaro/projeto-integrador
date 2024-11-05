import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
public title:string = 'Usuários';
public isShowDeleteDialog:boolean = false; 
public alertButtons:Array<any> = [];
  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController
  ) { }
  
  public usuario:Array<any> = [];
  ngOnInit() {
    this.listar ();                
  }

  go(rota:string){
    window.location.href = rota;
  }
  async listar(){

    const loading = await this.loadingCtrl.create({
      message: 'Carregando...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'usuario-listar'
    })
    .subscribe(
      (_res:any) => {
        loading.dismiss();
        this.usuario = _res;
      }
    );
  }

  editar(id:number){ 
    this.router.navigateByUrl('/cadastro/' + id);
  } 
  
  excluir(id:number){
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
          controller: 'usuario-excluir',
          id:id
        })
        .subscribe (
          () => {
          this.listar();
        } 
      );
    },
  }];
  }
}
