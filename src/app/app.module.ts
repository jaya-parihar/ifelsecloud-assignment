import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/featured/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './components/featured/toolbar/toolbar.component';
import { StaticColumnDashboardComponent } from './components/featured/static-column-dashboard/static-column-dashboard.component';
import { BalanceCardComponent } from './components/featured/balance-card/balance-card.component';
import { TransactionTableComponent } from './components/featured/transaction-table/transaction-table.component';
import { GraphSectionComponent } from './components/featured/graph-section/graph-section.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './components/shared/angular-material.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ToolbarComponent,
    StaticColumnDashboardComponent,
    BalanceCardComponent,
    TransactionTableComponent,
    GraphSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgApexchartsModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
