import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

export const MaterialRoutes: Routes = [
  {
    path: 'category',
    component: ManageCategoriesComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
  {
    path: 'product',
    component: ManageProductComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
  {
    path: 'order',
    component: ManageOrderComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin','user'],
    },
  },
  {
    path: 'bill',
    component: ViewBillComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin','user'],
    },
  }
];
