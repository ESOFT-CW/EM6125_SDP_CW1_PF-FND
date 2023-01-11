import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApprovalDialogComponent } from './core/dialogs/approval-dialog/approval-dialog.component';
import { InputDialogComponent } from './core/dialogs/input-dialog/input-dialog.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TopBarComponent } from './components/dashboard/inner-com/top-bar/top-bar.component';
import { LeftSideNavBarComponent } from './components/dashboard/inner-com/left-side-nav-bar/left-side-nav-bar.component';
import { AuditComponent } from './components/components/audit/audit.component';
import { DashboardHomeComponent } from './components/components/dashboard-home/dashboard-home.component';
import { ManageCustomersComponent } from './components/components/manage-customers/manage-customers.component';
import { ManageStocksComponent } from './components/components/manage-stocks/manage-stocks.component';
import { ManageTokensComponent } from './components/components/manage-tokens/manage-tokens.component';
import { ManageStationsComponent } from './components/components/manage-stations/manage-stations.component';
import { PaymentComponent } from './components/components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApprovalDialogComponent,
    InputDialogComponent,
    LoginComponent,
    NotFoundComponent,
    TopBarComponent,
    LeftSideNavBarComponent,
    AuditComponent,
    DashboardHomeComponent,
    ManageCustomersComponent,
    ManageStocksComponent,
    ManageTokensComponent,
    ManageStationsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
