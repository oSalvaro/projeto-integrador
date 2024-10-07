import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  })
 export class LoginPage implements OnInit {
  public id:number = 0;
  public email:string = '';
  public senha:string = '';

  

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activated_router:ActivatedRoute,

    //private formBuilder: FormBuilder,
    //public formLogin: FormGroup

  )
   {
    this.activated_router.params
      .subscribe(
        (params:any) => {
          if (params.id != undefined){
            this.id = params.id;
            if (this.id != 0){
              this.requisicao_service.get({
                controller:'logar',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  this.email = _dados.email;
                  this.senha = _dados.senha;
                }
              );
            }
          }
      }
    );

    //this.formLogin = this.formBuilder
   }
  
 
  autenticar(){
 
    const fd = new FormData();
    fd.append('controller','logar');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('senha',this.senha);
    fd.append('email',this.email);
    

    this.requisicao_service.post(fd)
    .subscribe(
      () => {
        location.href = '/home';
      }
    );
  }

  ngOnInit() {
  }
}
