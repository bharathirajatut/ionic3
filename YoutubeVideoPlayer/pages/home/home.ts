import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  videos:any=[{
    title:"5 Reasons to become a Business Analyst - Ampersand Academy",
    url:"https://www.youtube.com/embed/QFkqslSeFZs"
  },
{
  title:"Features of R Programming Language - Why Learn?",
  url:"https://www.youtube.com/embed/7hItW37XdFo"
}]
  constructor(public navCtrl: NavController) {

  }

}
