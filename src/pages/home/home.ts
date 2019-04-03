import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { DashboardPage } from '../dashboard/dashboard';
import {  HttpClient }  from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signUpPage = SignupPage;
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }


  login() {
    let email = this.email;
    let password = this.password;
      if (email == '' || password == ''){
        console.log('Please fill in the forms');
      } else {
        this.http.get('http://localhost:3000/api/')
      }
    this.navCtrl.push(DashboardPage);
  }
}
