import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommomService } from 'src/app/services/commom.service';
import { ActionRendererComponent } from '../../shared/action-renderer/action-renderer.component';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit {
  ngOnInit(): void {
    this.service.getFinancialData().subscribe((res) => {
      res.transactions.forEach((e: any) => {
        let d = new Date(e.date);
        let date = d.getDate();
        let month = this.getMonths[d.getMonth()];
        let year = d.getFullYear();
        e.date = month + ' ' + date + ', ' + year;
      });
      this.rowData = res.transactions;
    });
  }
  constructor(private service: CommomService) {}
  rowData: object[] = [];

  getMonths: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  transactionColDef: ColDef[] = [
    {
      headerName: 'Date',
      headerTooltip: 'Date',
      field: 'date',
      tooltipField: 'date',
      width: 160,
    },
    {
      headerName: 'Name',
      headerTooltip: 'Name',
      field: 'name',
      tooltipField: 'name',
      width: 180,
    },
    {
      headerName: 'Status',
      headerTooltip: 'Status',
      field: 'status',
      tooltipField: 'status',
      width: 180,
      cellStyle: (params) => {
        if (params.value === 'Success')
          return {
            color: 'green',
            backgroundColor: '#defff3',
            borderRadius: '0.5rem',
          };
        else if (params.value === 'Failed')
          return {
            color: 'red',
            backgroundColor: '#ffdede',
            borderRadius: '0.5rem',
          };
        else if (params.value === 'Pending')
          return {
            color: 'orange',
            backgroundColor: '#fde5cf',
            borderRadius: '0.5rem',
          };
        return null;
      },
    },
    {
      headerName: 'Type',
      headerTooltip: 'Type',
      field: 'type',
      tooltipField: 'type',
      width: 170,
    },
    {
      headerName: 'Amount',
      headerTooltip: 'Amount',
      field: 'amount',
      tooltipField: 'amount',
      width: 180,
    },
    {
      headerName: 'Action',
      headerTooltip: 'Action',
      cellRenderer: 'actionRenderer',
      width: 80,
      cellRendererParams: {
        clicked: function (params: object) {
          this.takeAction(params);
        },
      },
    },
  ];

  components = {
    actionRenderer: ActionRendererComponent,
  };

  takeAction(p: object) {
    console.log(p);
  }
}
