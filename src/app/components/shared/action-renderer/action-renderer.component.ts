import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-renderer',
  templateUrl: './action-renderer.component.html',
  styleUrls: ['./action-renderer.component.scss'],
})
export class ActionRendererComponent implements OnInit {
  ngOnInit(): void {}

  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method Not Implemented');
  }
  agInit(params: ICellRendererParams): void {}
}
