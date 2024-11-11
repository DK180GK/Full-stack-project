import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import {HomepageComponent} from '../app/components/homepage/homepage.component';
import { FeeManagementComponent } from '../app/fee-payment-portal/fee-payment-portal.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'PaymentPortal', component: PaymentPortalComponent },
  {path: 'HomePage', component: HomepageComponent }, // New route for Payment Portal
  {path: "FeePaymentPortal", component: FeeManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
