import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';



export const MaterialRoutes: Routes = [{
    path:'category',
    component:ManageCategoriesComponent,
    canActivate:[RouteGuardService],
    data:{
        expectedRole:['admin']
    }
}
];
