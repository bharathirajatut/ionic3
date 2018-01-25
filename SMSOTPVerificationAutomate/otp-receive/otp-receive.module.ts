import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpReceivePage } from './otp-receive';

@NgModule({
  declarations: [
    OtpReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(OtpReceivePage),
  ],
})
export class OtpReceivePageModule {}
