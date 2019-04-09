import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient } from '@angular/common/http';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signUpPage = SignupPage;
  email: string;
  password: string;
  id: string;
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }


  login() {
    let email = this.email;
    let password = this.password;
    if (email == '' || password == '') {
      console.log('Please fill in the forms');
    } else {
      this.http.post('http://localhost:3000/api/login', {
        email: email,
        password: password
      }).subscribe(data => {
        console.log(data);
        if (data !== null) {
          console.log('Done');
          this.id = data['_id'];
          this.navCtrl.push(DashboardPage, { id: this.id });
        } else {
          console.log('User not found!');
        }
      }, err => {
        console.log(err);
      })
    }
  }


  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
