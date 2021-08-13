import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration.component';



const routes: Routes = [
  {
  path: 'register',
    component: RegistrationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
