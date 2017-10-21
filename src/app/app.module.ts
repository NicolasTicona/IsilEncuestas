import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RegistroComponent } from './inicio/registro/registro.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { AutentificacionService } from './servicios/autentificacion.service';
import { NavigateComponent } from './navigate/navigate.component';
import { IniciosesionComponent } from './autentificacion/iniciosesion/iniciosesion.component'
import { DocenteService } from './servicios/docente.service';
import { PerfilComponent } from './perfil/perfil.component';
import { ComentariosComponent } from './comentarios/comentarios/comentarios.component'
import { ComentariosService } from './servicios/comentarios.service';
import { ListComponent } from './comentarios/list/list.component';

const routes:Routes = [
  {path: '', component: IniciosesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: IniciosesionComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  {path: 'comentarios', component: ComentariosComponent},
  {path: 'lista', component: ListComponent},  
  {path: '**', component: IniciosesionComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    NavigateComponent,
    IniciosesionComponent,
    PerfilComponent,
    ComentariosComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AutentificacionService, DocenteService, ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
