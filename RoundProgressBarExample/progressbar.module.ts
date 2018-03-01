import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressbarPage } from './progressbar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    ProgressbarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressbarPage),
    RoundProgressModule
  ],
})
export class ProgressbarPageModule {}
