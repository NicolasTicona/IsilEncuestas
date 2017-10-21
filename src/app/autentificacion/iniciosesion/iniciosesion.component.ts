import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  loginForm: FormGroup;

  login: any;

  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required,Validators.email]],
      'password': ['',[Validators.required]]
      // Validators.pattern('(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))')
     })
  }
  
    // User Data Formulario
    onSubmit(){ 
      this.login = this.saveRegistro();
      this.autentificacionService.userLogin(this.login);
    }
  
    saveRegistro(){
      let registro = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      }
  
      return registro;
    }
  

}
