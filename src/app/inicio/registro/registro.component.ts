import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm : FormGroup;

  registro: any;

  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.registroForm = this.formBuilder.group({
    'nombre': ['', Validators.required],
    'email': ['', [Validators.required,Validators.email]],
    'password': ['',[Validators.required]]
    // Validators.pattern('(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))')
   })

  }

  // User Data Formulario
  onSubmit(){ 
    this.registro = this.saveRegistro();
    this.autentificacionService.userRegister(this.registro);
  }

  saveRegistro(){
    let registro = {
      nombre: this.registroForm.get('nombre').value,
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }

    return registro;
  }


  // Registro Anonimo
  anonymousSesionIn(){
    this.autentificacionService.anonymousRecord();
  }

}
