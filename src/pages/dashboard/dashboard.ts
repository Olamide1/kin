import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ModalCtrl: ModalController) {
  }

  openModal() {
    this.id = this.navParams.get('id');
    var email = this.navParams.get('em');
    const modal = this.ModalCtrl.create(SettingsPage, { email: email });
    modal.present();
  }
  ionViewDidLoad() {
    this.id = this.navParams.get('em');
    console.log(this.id);
    console.log('ionViewDidLoad DashboardPage');
  }

}
