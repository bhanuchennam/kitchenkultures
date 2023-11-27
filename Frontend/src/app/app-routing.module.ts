import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { DeletedishComponent } from './deletedish/deletedish.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { HomeComponent } from './home/home.component';
import { HomechefComponent } from './homechef/homechef.component';
import { HomechefppageComponent } from './homechefppage/homechefppage.component';
import { HomechefregisterComponent } from './homechefregister/homechefregister.component';
import { FullComponent } from './layouts/full/full.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { RegisterComponent } from './register/register.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customerlogin', component: CustomerloginComponent },
  { path: 'homechef', component: HomechefComponent},
  { path: 'customerorder', component: CustomerOrderComponent},
  { path: "homechefpage", component: HomechefppageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'addfood', component: AddfoodComponent},
  { path: 'updatefood', component: UpdatefoodComponent},
  {path: 'deletedish', component: DeletedishComponent},
  { path: 'homechefregistration', component: HomechefregisterComponent},
  {path: 'edit', component: EditItemComponent},
  { path: 'ordersplaced', component: OrderItemComponent},
  { path: 'adminlogin', component: AdminLoginComponent},
  { path:'admin', component: AdminComponent},
  {
    path: 'cafe',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/cafe/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
