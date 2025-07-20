import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../core/guard/auth.guard';
import { RoleGuard } from '../../../core/guard/role.guard';
import { DashboardComponent as AdminDashboardComponent } from '../dashboard/dashboard.component';
import { PurchaseApprovalComponent } from '../purchase/purchase-approval/purchase-approval.component';
import { RfqManagementComponent } from '../purchase/rfq-management/rfq-management.component';
import { PurchaseOrderComponent } from '../purchase/purchase-order/purchase-order.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'purchase/approval', component: PurchaseApprovalComponent },
      { path: 'purchase/rfq', component: RfqManagementComponent },
      { path: 'purchase/order', component: PurchaseOrderComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
