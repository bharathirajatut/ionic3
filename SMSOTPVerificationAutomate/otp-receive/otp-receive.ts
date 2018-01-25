
import { Component } from '@angular/core';
import { IonicPage,NavController,Platform,AlertController,NavParams } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



declare var SMS:any;
declare var document:any;


@IonicPage()
@Component({
  selector: 'page-otp-receive',
  templateUrl: 'otp-receive.html',
})
export class OtpReceivePage {


  otp='';
  mobile='';
  

  constructor(public alertCtrl: AlertController,
    public platform:Platform,
    public androidPermissions: AndroidPermissions,
    public http:Http,
  public navCtrl:NavController,
  public navParams: NavParams) {
  
    this.mobile=this.navParams.get('mobile');

    document.addEventListener('onSMSArrive', function(e){
      var sms = e.data;
      
     console.log("received sms "+JSON.stringify( sms ) );
     
     if(sms.address=='HP-611773') //look for your message address
     {
       this.otp=sms.body.substr(0,4);
      this.stopSMS();
      this.verify_otp();
     }
      
      
      
    });
this.checkPermission();
      }
    checkPermission()
    {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {
          
          //if permission granted
          this.receiveSMS();
        },
      err =>{
        
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
        then(success=>{
          this.receiveSMS();
        },
      err=>{
        console.log("cancelled")
      });
      });
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
      
    }
    receiveSMS()
    {
      
      if(SMS) SMS.startWatch(function(){
        console.log('watching started');
      }, function(){
        console.log('failed to start watching');
      });
    }
    stopSMS()
    {
      if(SMS) SMS.stopWatch(function(){
        console.log('watching stopped');
      }, function(){
        console.log('failed to stop watching');
      });
    }

    verifyOTP()
    {
      console.log("verify otp");
      if(this.mobile.length==0)
      {
        let alert = this.alertCtrl.create({
          title: 'OTP Required!',
          subTitle: 'Please enter your OTP and proceed',
          buttons: ['OK']
        });
        alert.present();
      }
      else
      {
        this.http.get('http://192.168.0.100/nexmosms/verify_otp.php?mobile'+this.mobile+'&otp='+this.otp)
        .map(res => res.json())
        .subscribe(res => {
        
        console.log(JSON.stringify(res));
        //write your logic once otp validation is done
        
        }, (err) => {
        console.log("failed");
        });
      }
    }


}
