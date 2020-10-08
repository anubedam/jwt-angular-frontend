import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes hacia los que voy a navegar */
import { LoginComponent } from './paginas/login/login.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}