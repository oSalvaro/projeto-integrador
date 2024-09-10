import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public data: any;
  public data2: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540,325,702]
        }
      ]
    };

    this.data2 = {
        labels: ['A', 'B', 'C','D','E'],
        datasets: [
          {
            data: [100,200,300,400,500]
          }
        ]
      };
  }
}
