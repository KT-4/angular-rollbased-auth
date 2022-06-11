import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserloginComponent } from './userlogin/userlogin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component'


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    UserloginComponent,
    AdminComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
