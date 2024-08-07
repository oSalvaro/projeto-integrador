import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
