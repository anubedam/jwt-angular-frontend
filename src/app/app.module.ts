import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* Módulo para realizar la navegación entre rutas */
import { AppRoutingModule } from './app-routing.module';

/* Para realizar llamadas a los API REST */
import { HttpClientModule } from '@angular/common/http';

/* Para utilizar los formularios por template */
import { FormsModule } from '@angular/forms';

/* Componentes de mi aplicación */
import { LoginComponent } from './paginas/login/login.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { MenuComponent } from './paginas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
