import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../../servicios/comentarios.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  comentarios: any[] = [];

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosService.getComentario()
      .subscribe(comentarios => {
        for(const id in comentarios){
          const comen = comentarios[id];
          comen.id = id;
          this.comentarios.push(comentarios[id]);
        }
      })
  }

}
