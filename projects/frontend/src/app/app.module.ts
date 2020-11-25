import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchBusesComponent } from './components/search-buses/search-buses.component';
import { ViewBusesComponent } from './components/view-buses/view-buses.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { ListBusComponent } from './components/list-bus/list-bus.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, LoginComponent, RegisterComponent, SearchBusesComponent, ViewBusesComponent, AdminLoginComponent, AddBusComponent, ListBusComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
