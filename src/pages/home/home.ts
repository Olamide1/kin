import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signUpPage = SignupPage;
  email: string;
  password: string;
  constructor(public navCtrl: NavController) {
  }


  login() {
    let email = this.email;
    let password = this.password;
    console.log(email + '' + password);
    this.navCtrl.push(ProfilePage);

  }
}
