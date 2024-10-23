import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LocalstorageService } from '../service/localstorage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venda-energia',
  templateUrl: './venda-energia.page.html',
  styleUrls: ['./venda-energia.page.scss'],
})
export class VendaEnergiaPage implements OnInit {
  public id:number    = 0;
  public qt_energia:number = 0;
  public vl_energia:number = 0;
  public descricao:string  = '';
  // public status:number = 0;
  public gerador_selecionado:number = 0;

  
  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController,
    private ls:LocalstorageService,
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
                controller:'venda-get',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  this.qt_energia = _dados.qt_energia;
                  this.vl_energia = _dados.vl_energia;
                  this.descricao  = _dados.descricao;
                  // this.status     = _dados.status;
                }
              );
            }
          }
      }
    );

    
  }
  salvar(){

    const fd = new FormData();
    fd.append('controller','venda');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('user_id',this.ls.get('user_id'));
    fd.append('qt_energia',String(this.qt_energia));
    fd.append('vl_energia',String(this.vl_energia));
    fd.append('descricao',this.descricao);
    fd.append('usuario_vendeu',this.ls.get('user_id')); 
    fd.append('gerador',String(this.gerador_selecionado)); 

    this.requisicao_service.post(fd)
    .subscribe(
      (_res:any) => {
        //this.ls.set('em_andamento',true);
        //this.ls.set('status',_res.status);
       //location.href = '/listagem-venda';
      }
    );
   }

   public gerador:Array<any> = [];
   ngOnInit() {
     this.listar ();
   }
 
   listar(){
 
 
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

  
  handleChange(ev:any) {
    this.gerador_selecionado = ev.target.value;
  }
  
}
