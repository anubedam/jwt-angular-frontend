import { Component, OnInit } from '@angular/core';

/* Para verificar la autorizacion del usuario */
import { AutorizacionService } from '../../servicios/autorizacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private autService: AutorizacionService) { 
    /* Inyectamos el servicio de autenticación */
  }
  
  ngOnInit(): void {
  }

  logout(){
     this.autService.logout();
  }

  public get isLogin(): boolean {
    return this.autService.isLogin;
  }

}