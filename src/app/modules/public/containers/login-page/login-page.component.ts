import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.angularAuth.user.subscribe((user) => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
