import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { RegisterComponent } from './register/register.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [

  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'master',component:MasterPageComponent},
  {path:'Home',component:HomeComponent},
  {path:'Email',component:EmailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
