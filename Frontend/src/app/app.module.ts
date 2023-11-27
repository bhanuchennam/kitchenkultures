import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddfoodComponent } from './addfood/addfood.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { DeletedishComponent } from './deletedish/deletedish.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { HomeComponent } from './home/home.component';
import { HomechefComponent } from './homechef/homechef.component';
import { HomechefppageComponent } from './homechefppage/homechefppage.component';
import { HomechefregisterComponent } from './homechefregister/homechefregister.component';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderService } from './order.service';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './shared/material-module';
import { SharedModule } from './shared/shared.module';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    CustomerloginComponent,
    HomechefComponent,
    CustomerOrderComponent,
    HomechefppageComponent,
    RegisterComponent,
    AddfoodComponent,
    UpdatefoodComponent,
    DeletedishComponent,
    HomechefregisterComponent,
    EditItemComponent,
    OrderItemComponent,
    AdminLoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
   

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
