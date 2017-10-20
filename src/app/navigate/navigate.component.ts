import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private autentificacionService: AutentificacionService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  // Verifica si esta Autenticado
  isAuth(){
    return this.autentificacionService.isAuthenticated();
  }

  // Cierra Sesion
  onLogout(){
    this.autentificacionService.userLogout();
    this.router.navigate(['/login'])
  }

}
