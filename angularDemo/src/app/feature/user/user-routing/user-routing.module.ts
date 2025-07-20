import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent as UserDashboardComponent} from '../dashboard/dashboard.component';
import { PurchaseRequestComponent } from '../purchase/purchase-request/purchase-request.component';
import { PurchaseHistoryComponent } from '../purchase/purchase-history/purchase-history.component';

const routes: Routes = [
  {path:'dashboard',component:UserDashboardComponent},
  {path:'purchase/request',component:PurchaseRequestComponent},
  {path:'purchase/history',component:PurchaseHistoryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
