import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarjuegosComponent } from './pages/buscarjuegos/buscarjuegos.component';
import { CharlasComponent } from './pages/charlas/charlas.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginatipsComponent } from './pages/paginatips/paginatips.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SugerenciasAdminComponent } from './pages/sugerencias-admin/sugerencias-admin.component';
import { ToptenComponent } from './pages/topten/topten.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"tips", component: PaginatipsComponent},
  {path:"topten", component: ToptenComponent},
  {path:"charlas", component: CharlasComponent},
  {path:"buscarjuegos", component: BuscarjuegosComponent},
  {path:"login", component: LoginComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"sugAdmin", component: SugerenciasAdminComponent},
  {path:"registro", component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
