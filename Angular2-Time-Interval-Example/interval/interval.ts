import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
/**
 * Generated class for the IntervalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interval',
  templateUrl: 'interval.html',
})
export class IntervalPage {
 
  intervals: any =[];
  constructor() {
    IntervalObservable.create(1000).subscribe(n => {

      this.intervals.push({sno:n,ctime:Date.now()}); //n will start from 0
    });
  }

}
