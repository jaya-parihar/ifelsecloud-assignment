import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { CommomService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-graph-section',
  templateUrl: './graph-section.component.html',
  styleUrls: ['./graph-section.component.scss'],
})
export class GraphSectionComponent implements OnInit, AfterViewInit {
  public chartOptions: any;

  incomeData: any;
  investmentData: any;
  expenseData: any;
  xAxisData: any;
  balance: any;
  moneyStatistics: any;

  ngOnInit(): void {
    this.getGraphData();
    this.getFinancialData();
  }

  getFinancialData() {
    this.service.getFinancialData().subscribe((res: any) => {
      console.log(res);
      this.balance = res.balance;
      this.moneyStatistics = res.money_statistics;
    });
  }

  getGraphData() {
    this.service.getGraphData().subscribe((res: any) => {
      console.log(res);

      this.incomeData = res.incomeData;
      this.expenseData = res.expenseData;
      this.investmentData = res.investmentData;
      this.xAxisData = res.xAxisData;
    });
  }
  // income - 650000
  // expense - 398000
  // investment = 128000

  constructor(private service: CommomService) {
    setTimeout(() => {
      this.chartOptions = {
        series: [
          {
            name: 'Income',
            data: this.incomeData,
          },
          {
            name: 'Investment',
            data: this.investmentData,
          },
          {
            name: 'Expense',
            data: this.expenseData,
          },
        ],
        chart: {
          type: 'bar',
          height: 350,
          // width: '600px',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '65%',
            endingShape: 'circle',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent'],
        },
        xaxis: {
          categories: this.xAxisData,
        },
        yaxis: {
          title: {
            text: '',
          },
        },
        fill: {
          opacity: 1,
          colors: ['#92a8a9', '#8385ae', '#555c8f'],
        },
        legend: {
          markers: {
            fillColors: ['#92a8a9', '#8385ae', '#555c8f'],
            radius: 12,
          },
        },

        tooltip: {
          y: {
            formatter: function (val: any) {
              return '$ ' + val + ' thousands';
            },
          },
        },
      };
    }, 1000);
  }

  ngAfterViewInit(): void {
    //   const options = {
    //     chart: {
    //       type: 'bar',
    //       width: '100%', // Set the width to 100%,
    //       height: 350,
    //     },
    //     series: [
    //       {
    //         name: 'Sales',
    //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    //       },
    //     ],
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    //     },
    //   };
    //   const chart = new ApexCharts(document.querySelector('#chart'), options);
    //   chart.render();
    // }
  }
}
