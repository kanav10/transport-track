import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
// import { appRoutes} from '../../routes' ;
// import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  // Name: any;

  constructor(public af: AngularFireAuth) {

    // this.Name = this.af.auth.currentUser.displayName; }
}
}
