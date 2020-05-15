import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseOrderListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class PurchasesRoutingModule {}
