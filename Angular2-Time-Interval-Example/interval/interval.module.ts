import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntervalPage } from './interval';

@NgModule({
  declarations: [
    IntervalPage,
  ],
  imports: [
    IonicPageModule.forChild(IntervalPage),
  ],
})
export class IntervalPageModule {}
