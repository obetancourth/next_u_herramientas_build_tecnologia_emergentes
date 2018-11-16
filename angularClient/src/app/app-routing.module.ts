import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent as login} from './login/login.component';
import { MainComponent as main} from './main/main.component';
import { DetailItemComponent as item} from './detail-item/detail-item.component';
import { CheckoutComponent as checkout} from './checkout/checkout.component';
const routes: Routes = [
  {path : 'login', component : login },
  {path: 'main', component: main },
  {path: 'detail/:id', component: item},
  {path: 'checkout', component: checkout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
