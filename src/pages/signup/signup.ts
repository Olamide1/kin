import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  fullname: string = '';
  password: string = '';
  email: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    var fullname = this.fullname;
    var email = this.email;
    var password = this.password;
    if (fullname == null || email == null || password == null) {
      console.log("Please Fill the fields")
    } else {
      this.navCtrl.push(ProfilePage);
    }
  }

}
