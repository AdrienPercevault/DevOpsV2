import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/api.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  i: any = 1;

  chartLine: any;
  date: any[] = [];
  data: [] = [];
  tempTank: any[] = [];

  constructor(private route: ActivatedRoute,
    private api: ApiService) { }

  ngOnInit() {

    console.log(this.tempTank)

    this.api.getidunit(this.route.snapshot.paramMap.get('idAutomate'), this.route.snapshot.paramMap.get('unit')).subscribe(
      data => {
        data.forEach(element => {
          console.log(element)
          this.tempTank.push(element.tempTank)
          this.date.push(this.i)
          this.i = this.i + 1;
        });
        this.chartLine = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.date,
            datasets: [
              {
                label: "Température de la cuve",
                data: this.tempTank,
                borderColor: '#3cba9f'
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      }
    )
  }

}
