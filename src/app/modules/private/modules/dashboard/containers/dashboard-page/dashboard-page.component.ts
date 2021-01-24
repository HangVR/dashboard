import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase';
import User = firebase.User;
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  user$: Observable<User>;
  token$: Observable<string>;

  constructor(private authFire: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.authFire.user;
    this.token$ = this.authFire.idToken;
  }

  logout() {
    from(this.authFire.signOut()).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
