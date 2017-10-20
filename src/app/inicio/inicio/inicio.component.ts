import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../servicios/docente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  docenteData: any;

  constructor(private docenteService: DocenteService) { }

  ngOnInit() {
    this.docenteData = this.docenteService.GetData();
  }

}
