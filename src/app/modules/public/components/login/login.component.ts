import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private angularAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    from(this.angularAuth.signInWithPopup(new GoogleAuthProvider())).subscribe(
      (event) => {
        console.log(event);
        this.router.navigate(['/public/dashboard']);
      }
    );
  }
}
