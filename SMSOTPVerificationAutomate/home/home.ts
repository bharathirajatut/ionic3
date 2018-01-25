import { Component } from '@angular/core';
import { NavController,Platform,AlertController } from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { OtpReceivePage } from '../otp-receive/otp-receive';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mobile='';  
  constructor(public alertCtrl: AlertController,
    public http:Http,
  public navCtrl:NavController) {
    


      }
    
    sendOTP()
    {

      if(this.mobile.length!=12)
      {
        let alert = this.alertCtrl.create({
          title: 'Mobile Number Required!',
          subTitle: 'Please enter your 10 digit mobile number with 91 country code!',
          buttons: ['OK']
        });
        alert.present();
      }
      else
      {
        this.http.get('http://192.168.0.100/nexmosms/send-sms.php?mobile='+this.mobile)
        .map(res => res.json())
        .subscribe(res => {
        
        console.log(JSON.stringify(res));
        this.navCtrl.push(OtpReceivePage,{mobileno:this.mobile})
        }, (err) => {
        alert("failed");
        });
      }
    }

}
