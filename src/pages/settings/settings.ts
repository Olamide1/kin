import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  cancelModal() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.id = this.navParams.get('id');
    console.log(this.id);
  }

}
