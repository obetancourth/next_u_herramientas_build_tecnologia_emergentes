import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent as login} from './login/login.component';
import {MainComponent as main} from './main/main.component';
const routes: Routes = [
  {path : 'login', component : login },
  {path: 'main', component: main }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
