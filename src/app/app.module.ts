import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroAuditoriaComponent } from './registro-auditoria/registro-auditoria.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ProcesoRecuperacionComponent } from './proceso-recuperacion/proceso-recuperacion.component';
import { AuditoriaRecuperacionComponent } from './auditoria-recuperacion/auditoria-recuperacion.component';

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
        PersonalComponent,
        InformacionPerfilComponent,
        RegistroComponent,
        RegistroAuditoriaComponent,
        MaterialesComponent,
        ProcesoRecuperacionComponent,
        AuditoriaRecuperacionComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };