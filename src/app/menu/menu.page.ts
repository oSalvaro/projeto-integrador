import { Component, Input, OnInit } from '@angular/core';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
@Input("content-id") content_id:string = '';
  constructor(
    private ls:LocalstorageService
  ) { }

  ngOnInit() {
      if (this.ls.get('is_autenticado') == false){
        location.href = '/home';
      }
    }
  

  go(rota:string){
    window.location.href = rota;
  }

  logout(){
    this.ls.remove('is_autenticado');
    this.ls.remove('user_id');
      location.href = '/login';
  }
}
