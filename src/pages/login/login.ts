import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DashboardPage } from '../dashboard/dashboard';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  id: string;
  signUpPage = SignupPage
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
          this.navCtrl.push(DashboardPage, { id: this.id, em: data['email'] });
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
