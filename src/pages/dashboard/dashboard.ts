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

  constructor(public navCtrl: NavController, public navParams: NavParams, private ModalCtrl: ModalController) {
  }

  openModal() {
    const modal = this.ModalCtrl.create(SettingsPage);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
