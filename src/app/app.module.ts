import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { CharlasComponent } from './pages/charlas/charlas.component';
import { SugerenciasAdminComponent } from './pages/sugerencias-admin/sugerencias-admin.component';
import { AddsugerenciasadminComponent } from './pages/addsugerenciasadmin/addsugerenciasadmin.component';
import { AddgamesadminComponent } from './pages/addgamesadmin/addgamesadmin.component';
import { BuscarjuegosComponent } from './pages/buscarjuegos/buscarjuegos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PaginajuegoComponent } from './pages/paginajuego/paginajuego.component';
import { PaginatipsComponent } from './pages/paginatips/paginatips.component';
import { ToptenComponent } from './pages/topten/topten.component';
import { PaginasugerirComponent } from './pages/paginasugerir/paginasugerir.component';
import { PaginacrearcharlaComponent } from './pages/paginacrearcharla/paginacrearcharla.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CharlasComponent,
    SugerenciasAdminComponent,
    AddsugerenciasadminComponent,
    AddgamesadminComponent,
    BuscarjuegosComponent,
    PerfilComponent,
    PaginajuegoComponent,
    PaginatipsComponent,
    ToptenComponent,
    PaginasugerirComponent,
    PaginacrearcharlaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
