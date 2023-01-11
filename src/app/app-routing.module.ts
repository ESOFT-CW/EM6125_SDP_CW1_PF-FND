import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {ManageTokensComponent} from "./components/components/manage-tokens/manage-tokens.component";
import {DashboardHomeComponent} from "./components/components/dashboard-home/dashboard-home.component";
import {ManageCustomersComponent} from "./components/components/manage-customers/manage-customers.component";
import {ManageStocksComponent} from "./components/components/manage-stocks/manage-stocks.component";
import {PaymentComponent} from "./components/components/payment/payment.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {AuditComponent} from "./components/components/audit/audit.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ManageStationsComponent} from "./components/components/manage-stations/manage-stations.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] ,children:[
      {path:'',component:DashboardHomeComponent},
      {path: 'home', component: DashboardHomeComponent    },
      {path: 'customers', component: ManageCustomersComponent},
      {path: 'station', component: ManageStationsComponent},
      {path: 'stock', component: ManageStocksComponent},
      {path: 'token', component: ManageTokensComponent},
      {path: 'audit', component: AuditComponent},
      {path: 'payment', component: PaymentComponent},
    ]},
  { path: 'shared', loadChildren: () => import('./components/shared/shared.module').then(m => m.SharedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
