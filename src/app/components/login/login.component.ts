import { Component, OnInit } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login;
  constructor() { }

  ngOnInit() {
    this.login = UserLoginComponent;
  }

  adminLogin() {
    this.login = AdminLoginComponent;
  }

  userLogin() {
    this.login = UserLoginComponent;
  }

}
