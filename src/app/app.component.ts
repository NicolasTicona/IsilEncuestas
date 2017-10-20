import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    var config = {
      apiKey: "AIzaSyC4mREEs0w03OeQG2M-vRiPdS8tlX23Gf4",
      authDomain: "isilencuestas.firebaseapp.com",
      databaseURL: "https://isilencuestas.firebaseio.com",
      projectId: "isilencuestas",
      storageBucket: "isilencuestas.appspot.com",
      messagingSenderId: "399888869482"
    };
    firebase.initializeApp(config);
  }

}
