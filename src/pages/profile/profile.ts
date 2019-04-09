import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  age: string;
  gender: string;
  occupation: string;
  id: any;
  dashboard: any = DashboardPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    var em = this.navParams.get('email');
    console.log(em);
    this.http.get('http://localhost:3000/api/finduser/' + em).subscribe(data => {
      console.log(data);
      var id = data['_id'];
      this.id = id;
      //  console.log(this.id);
    }, err => {
      console.log(err);
    })
  }

  next() {
    this.navCtrl.push(this.dashboard, { id: this.id });
  }
  save() {
    var gender = this.gender;
    var age = this.age;
    var occupation = this.occupation;
    var id = this.id;
    this.http.post('http://localhost:3000/api/update', {
      id: id,
      gender: gender,
      age: age,
      occupation: occupation
    }).subscribe(data => {
      console.log(data);
      this.navCtrl.push(this.dashboard, { id: this.id });
    }, err => {
      console.log(err);
    })
  }
}
