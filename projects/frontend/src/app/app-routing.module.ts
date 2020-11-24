import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { ListBusComponent } from './components/list-bus/list-bus.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchBusesComponent } from './components/search-buses/search-buses.component';
import { ViewBusesComponent } from './components/view-buses/view-buses.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'login' , component : LoginComponent},
 {path: 'register' , component : RegisterComponent},
 {path: 'search-buses' , component : SearchBusesComponent},
 {path: 'view-buses' , component: ViewBusesComponent},
 {path: 'admin-login' , component: AdminLoginComponent},
 {path: 'add-bus' , component: AddBusComponent},
 {path: 'list-bus', component: ListBusComponent},
  {path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
