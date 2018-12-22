import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent as login} from './login/login.component';
import { MainComponent as main} from './main/main.component';
import { DetailItemComponent as item} from './detail-item/detail-item.component';
import { CheckoutComponent as checkout} from './checkout/checkout.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: login },
  {path: 'main', component: main, canActivate: [AuthGuard] },
  {path: 'detail/:id', component: item, canActivate: [AuthGuard]},
  {path: 'checkout', component: checkout, canActivate: [AuthGuard] },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
