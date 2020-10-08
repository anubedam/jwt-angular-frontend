import { Component, OnInit } from '@angular/core';

/* Para verificar la autorizacion del usuario */
import { AutorizacionService } from '../../servicios/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Datos que se comunican con el formulario
  usuario = '';
  contrasena = '';

  constructor(private autService: AutorizacionService) { 
    /* Inyectamos el servicio de autenticación */
  }

  ngOnInit(): void {
  }

  enviar(){
    // Realiza la validación del usuario
    console.log("usuario: ", this.usuario, "contrasena: ", this.contrasena);
    this.autService.login(this.usuario, this.contrasena);
  }

}
