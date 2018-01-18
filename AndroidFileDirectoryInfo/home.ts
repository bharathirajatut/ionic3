import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nativepath: string;
  applicationDirectory='';
  applicationStorageDirectory='';
  dataDirectory='';
  cacheDirectory='';
  externalApplicationStorageDirectory='';
  externalDataDirectory='';
  externalCacheDirectory='';
  externalRootDirectory='';
  tempDirectory='';
  getFreeDiskSpace:any='';  
  constructor(public navCtrl: NavController, private fileCtrl: File) {
      this.goToDir();
  }
  
  public goToDir()
  {
    this.applicationDirectory=this.fileCtrl.applicationDirectory;
    this.applicationStorageDirectory=this.fileCtrl.applicationStorageDirectory;
    this.dataDirectory=this.fileCtrl.dataDirectory;
    this.cacheDirectory=this.fileCtrl.cacheDirectory;
    this.externalApplicationStorageDirectory=this.fileCtrl.externalApplicationStorageDirectory;
    this.externalDataDirectory=this.fileCtrl.externalDataDirectory;
    this.externalCacheDirectory=this.fileCtrl.externalCacheDirectory;
    this.externalRootDirectory=this.fileCtrl.externalRootDirectory;
    this.tempDirectory=this.fileCtrl.tempDirectory;
    this.fileCtrl.getFreeDiskSpace().then(data=>{
      this.getFreeDiskSpace=data;
    })
    
  
  }
  

}
