import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private dirs:any;
  
  constructor(public navCtrl: NavController, private fileCtrl: File) {
      this.goToDir();
  }
  
  public goToDir()
  {
   
    this.fileCtrl.listDir(this.fileCtrl.externalRootDirectory,'').then(
      (list) => {

          this.dirs=list;
      }
  );

  
  }
  
}
