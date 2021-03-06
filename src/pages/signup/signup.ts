import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  fullname: String = '';
  password: String = '';
  email: String = '';
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public http: HttpClient, public loader: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    var fullname = this.fullname;
    var email = this.email;
    var password = this.password;
    let loading = this.loader.create({
      spinner: 'dots'
    });

    if (fullname == '' || email == '' || password == '') {
      console.log("Please Fill the fields")
    } else {
      loading.present();
      this.http.get('http://localhost:3000/api/finduser/' + email).subscribe(data => {
        console.log(data);
        if (data == null) {
          this.http.post('http://localhost:3000/api/signup', {
            fullname: fullname,
            email: email,
            password: password
          }).subscribe(data => {
            console.log(data);
            loading.dismiss();  
            this.navCtrl.push(ProfilePage, { email: email });
          }, err => {
            console.log(err);
          })
        } else {
          loading.dismiss();
          console.log('You alrady have an account, plese sign in')
        }
      }, err => {
        console.log(err);
      });
    }
  }

}
