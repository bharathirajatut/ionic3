import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private transfer: FileTransfer,private camera: Camera) {

  }

  upload()
  {
    
     let options = {

         quality: 100
          };


    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:

   const fileTransfer: FileTransferObject = this.transfer.create();

    let options1: FileUploadOptions = {
       fileKey: 'file',
       fileName: 'name.jpg',
       headers: {}
    
    }

fileTransfer.upload(imageData, 'https://ampersandacademy.com/ionic/upload.php', options1)
 .then((data) => {
   // success
   alert("success");
 }, (err) => {
   // error
   alert("error"+JSON.stringify(err));
 });


  });


}

}
