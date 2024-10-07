import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-venda',
  templateUrl: './listagem-venda.page.html',
  styleUrls: ['./listagem-venda.page.scss'],
})
export class ListagemVendaPage implements OnInit {

  constructor() { }
  public title:string = 'Listagem de venda';
  ngOnInit() {
  }

}
