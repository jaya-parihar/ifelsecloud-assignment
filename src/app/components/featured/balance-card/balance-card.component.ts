import { Component, OnInit } from '@angular/core';
import { CommomService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss'],
})
export class BalanceCardComponent implements OnInit {
  balance: any = {};

  ngOnInit(): void {
    this.service.getFinancialData().subscribe((res) => {
      console.log(res);
      this.balance = res.balance;
    });
  }

  constructor(private service: CommomService) {}
}
