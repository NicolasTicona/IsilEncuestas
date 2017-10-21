import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { ComentariosService } from '../../servicios/comentarios.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarioForm: FormGroup;
  comentUser: any;
  user: any;

  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentarioForm = this.formBuilder.group({
      'comentario': [''],
    })

    this.user = this.autentificacionService.getData();
    console.log(this.user);

  }

  onSubmit(){
    this.comentUser = this.onSave();
    this.comentariosService.postComentario(this.comentUser)
      .subscribe(newcom => {
      })
  }

  onSave(){
    let comentario = {
      'comentario': this.comentarioForm.get('comentario').value,
      'email': this.user.email,
      'date': new Date()
    }

    return comentario;
  }

}
