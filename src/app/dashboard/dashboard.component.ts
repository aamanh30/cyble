import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.drawChart('line');
    this.drawChart('corechart');
  }

  drawChart(type: string): void {
    switch (type) {
      case `line`:
        google.charts.load('current', {packages: ['corechart', type]});
        google.charts.setOnLoadCallback(this.drawBasic);
        break;
      case  `corechart`:
        google.charts.load("current", {packages:[ type ]});
        google.charts.setOnLoadCallback(this.drawHistogramChart);
    }
  }

  drawBasic() {

      const data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Mobiles');

      data.addRows([
        [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      const options = {
        hAxis: {
          title: 'Price(in Thousands)'
        },
        vAxis: {
          title: 'Quantity'
        }
      };

      const chart = new google.visualization.LineChart(document.getElementById('line-chart'));

      chart.draw(data, options);
  }

  drawHistogramChart() {
    const data = google.visualization.arrayToDataTable([
      ['Clothing Items', 'Avg. Sales'],
      ['Jeans', 12.2],
      ['T-Shirts', 9.1],
      ['Formal Shirts', 12.2],
      ['Casual Shirts', 22.9],
      ['Formal Trousers', 0.9],
      ['Suits', 36.6],
      ['Shoes', 30.5],
      ['Tie', 1.8]]);

    const options = {
      title: 'Avg. Number of Items(per day)',
      legend: { position: 'none' },
    };

    const chart = new google.visualization.Histogram(document.getElementById('histogram-chart'));
    chart.draw(data, options);
  }
}
