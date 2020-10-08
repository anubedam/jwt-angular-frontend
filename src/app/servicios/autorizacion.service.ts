import { Injectable } from '@angular/core';

/* Para realizar peticiones Http */
import { HttpClient } from '@angular/common/http';

/* Para realizar las navegaciones desde código */
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  uri = 'http://localhost:5000/api';
  token;
 
  constructor(private http: HttpClient, private router: Router) { 
    /* Importamos los servicios de peticiones web y navegación. Se crea propiedad */
  }

  login(usuario: string, contrasena: string) {
    // Realizamos peticion post con usuario y contraseña
    this.http.post(this.uri + '/autenticar', { usuario: usuario, contrasena: contrasena })
    .subscribe((resp: any) => {
      // Navegamos a la página perfil y grabamos el token en localstorage
      this.router.navigate(['perfil']);
      localStorage.setItem('token', resp.token);     
      alert(resp.token);
      });
  }

  logout() {
    // Elimina del localstorage el token
    localStorage.removeItem('token');
  }
 
  public get isLogin(): boolean {
    // Indica si el usuario está autorizado
    return (localStorage.getItem('token') !== null);
  }
}