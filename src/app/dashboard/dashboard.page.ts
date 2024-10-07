import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public data: any;
  public data2: any;

  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  load(){
    this.requisicao_service.get({
      controller:'faturamento'
    })
    .subscribe((data:any) => {
      this.data2.labels = data.meses;
      this.data2.datasets[0].data = data.valores;
    })
  };
  ngOnInit() {
    this.load();
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540,325,702]
        }
      ]
    };

    this.data2 = {
        labels: [],
        datasets: [
          {
            label:'1° Trimestre',
            data: [],
          }
        ]
      };
  }
}
