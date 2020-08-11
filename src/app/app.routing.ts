import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';
import {RegistroComponent} from './registro/registro.component';
import {RegistroAuditoriaComponent} from './registro-auditoria/registro-auditoria.component'
import {MaterialesComponent} from './materiales/materiales.component'
import {ProcesoRecuperacionComponent} from './proceso-recuperacion/proceso-recuperacion.component'
import {AuditoriaRecuperacionComponent } from './auditoria-recuperacion/auditoria-recuperacion.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'personal', component: PersonalComponent},
    { path: 'InformacionPerfil', component: InformacionPerfilComponent},
    { path: 'Registro',component: RegistroComponent},
    { path: 'RegistroAuditoria',component: RegistroAuditoriaComponent},
    { path: 'Materiales',component: MaterialesComponent},
    { path: 'ProcesoRecuperacion',component: ProcesoRecuperacionComponent},
    { path: 'AuditoriaRecuperacion',component: AuditoriaRecuperacionComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);