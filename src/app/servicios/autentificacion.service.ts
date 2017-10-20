import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import * as firebase from 'firebase'

@Injectable()
export class AutentificacionService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute ) { }

  // Verifica si un usuario accedio
  isAuthenticated(){
    var user = firebase.auth().currentUser;
    if(user){
      return true;
    }else{
      return false;
    }
  }

  // Registro Anonimo
  anonymousRecord(){
    firebase.auth().signInAnonymously();
  }
  anonymousLogOut(){
    firebase.auth().signOut();
  }

  // Registro Email Password
  userRegister(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .then( response => {
        console.log(response);
        this.router.navigate(['/inicio'])
      })
      .catch(err => console.log(err))
  }

  // Login Email Password
  userLogin(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then( response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(err => console.log(err))
  }

  userLogout(){
    firebase.auth().signOut()
      .then( response => {
        console.log(response);
      })
  }
}
