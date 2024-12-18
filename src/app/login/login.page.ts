import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formLogin: FormGroup;
  public id: number = 0;
  public email: string = '';
  public senha: string = '';

  constructor(
    public requisicao_service: RequisicaoService,
    private loadingController: LoadingController,
    private activated_router: ActivatedRoute,
    private formBuilder: FormBuilder,
    public ls: LocalstorageService
  ) {
    this.formLogin = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
          ),
        ]),
      ],
      senha: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
    });

    this.activated_router.params.subscribe((params: any) => {
      if (params.id != undefined) {
        this.id = params.id;
        if (this.id != 0) {
          this.requisicao_service.get({
            controller: 'logar',
            id: this.id,
          }).subscribe((_dados: any) => {
            this.email = _dados.email;
            this.senha = _dados.senha;
          });
        }
      }
    });
  }

  ngOnInit() {
    if (this.ls.get('is_autenticado') == true) {
      location.href = '/home';
    }
  }

  autenticar() {
    if (this.formLogin.valid) {
      const fd = new FormData();
      fd.append('controller', 'logar');
      fd.append('op', 'salvar');
      fd.append('id', String(this.id));
      fd.append('senha', this.senha);
      fd.append('email', this.email);

      this.requisicao_service.post(fd).subscribe((_res: any) => {
        this.ls.set('is_autenticado', true);
        this.ls.set('user_id', _res.user_id);
        location.href = '/home';
      });
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  }

  go(rota: string) {
    window.location.href = rota;
  }
}