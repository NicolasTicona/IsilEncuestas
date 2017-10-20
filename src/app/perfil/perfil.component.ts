import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../servicios/docente.service';
import { Router, UrlTree, UrlSegmentGroup, PRIMARY_OUTLET, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usersData: any;
  userData: any

  constructor(private docenteService: DocenteService,
              private router: Router) { }

  ngOnInit() {
    // Parametro Id
    const url :string = this.router.url;
    const tree: UrlTree = this.router.parseUrl(url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;

    const id: any = s[1].path;
    console.log(id);

    this.usersData = this.docenteService.GetData();
    this.userData = this.usersData[id - 1];
    console.log(this.userData);
  }

}
