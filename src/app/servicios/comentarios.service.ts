import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ComentariosService {

  URL = 'https://isilencuestas.firebaseio.com/comentarios.json';

  constructor(private http: Http) { 

  }

  postComentario(comentario){
    const newcom = JSON.stringify(comentario);
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post(this.URL, newcom, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getComentario(){
    return this.http.get(this.URL)
      .map(res => res.json());
  }

}
