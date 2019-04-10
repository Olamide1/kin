import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  cancelModal() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.email = this.navParams.get('email');
    this.http.get('http://localhost:3000/api/finduser/' + this.email).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
