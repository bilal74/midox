import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { PaymentEmployeeComponent } from './payment-employee/payment-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  { path: 'add', component:  AddEmployeeComponent},
  { path: 'job-history', component:  JobHistoryComponent},
  { path: 'payment', component:  PaymentEmployeeComponent},
  { path: 'view', component:  ViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
