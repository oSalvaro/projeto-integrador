import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionalidade2',
  templateUrl: './funcionalidade2.page.html',
  styleUrls: ['./funcionalidade2.page.scss'],
})
export class Funcionalidade2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  }

}
