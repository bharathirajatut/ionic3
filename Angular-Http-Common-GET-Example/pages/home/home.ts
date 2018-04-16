import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private userProvider:UserProvider) {

  }
users:any;
  get()
  {
    this.userProvider.getRandomData().then(data=>{
this.users=data
    });
  }

}
