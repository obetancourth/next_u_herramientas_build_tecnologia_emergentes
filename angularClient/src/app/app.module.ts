import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './main/detail/detail.component';
import { NavComponent } from './nav/nav.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { AuthService } from './admin/auth.service';
import { CartService } from './api/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DetailComponent,
    NavComponent,
    DetailItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
