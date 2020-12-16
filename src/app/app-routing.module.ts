import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddgamesadminComponent } from './pages/addgamesadmin/addgamesadmin.component';
import { AddsugerenciasadminComponent } from './pages/addsugerenciasadmin/addsugerenciasadmin.component';
import { BuscarjuegosComponent } from './pages/buscarjuegos/buscarjuegos.component';
import { CharlasComponent } from './pages/charlas/charlas.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginacrearcharlaComponent } from './pages/paginacrearcharla/paginacrearcharla.component';
import { PaginajuegoComponent } from './pages/paginajuego/paginajuego.component';
import { PaginasugerirComponent } from './pages/paginasugerir/paginasugerir.component';
import { PaginatipsComponent } from './pages/paginatips/paginatips.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SugerenciasAdminComponent } from './pages/sugerencias-admin/sugerencias-admin.component';
import { ToptenComponent } from './pages/topten/topten.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "tips", component: PaginatipsComponent },
  { path: "topten", component: ToptenComponent },
  { path: "charlas", component: CharlasComponent },
  { path: "buscarjuegos", component: BuscarjuegosComponent },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "sugAdmin", component: SugerenciasAdminComponent },
  { path: "registro", component: RegistroComponent },
  { path: "crearjuego", component: AddgamesadminComponent },
  { path: "crearcharla", component: PaginacrearcharlaComponent },
  { path: "paginajuego", component: PaginajuegoComponent },
  { path: "sugerirjuego", component: PaginasugerirComponent },
  { path: "about", component: AboutComponent },
  { path: "404", component: ErrorComponent },
  { path: "**", redirectTo: '/404' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
