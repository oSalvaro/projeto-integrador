import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-fim',
  templateUrl: './compra-fim.page.html',
  styleUrls: ['./compra-fim.page.scss'],
})
export class CompraFimPage implements OnInit {

  constructor(

  ) { }

  ngOnInit(
  ) {
    
  }
   

   

  
  
  go(rota:string){
    window.location.href = rota;
  }
}
