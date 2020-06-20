import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
//import {LoginComponent} from './Pages/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        InicioComponent,
        PersonalComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };