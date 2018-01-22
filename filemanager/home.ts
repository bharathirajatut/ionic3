import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info:any=[];
  private dirs:any;
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
  randomcolor="red";
  list=[{'color':'',name:'H1'},
  {'color':'',name:'H2'},
  {'color':'',name:'H3'}]
  isPressed=false;
  ce(x,index)
  {
if(this.isPressed)
{
  if(this.list[index].color=='red')
  {
    this.list[index].color='';
  }
  else
  {
    this.list[index].color='red';
  }
  
}
  }
  pe(x,index)
  {
    if(!this.isPressed)
    {
      this.isPressed=true;
      this.list[index].color='red';
    }
    else
    {
      
    }
    
    
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
    this.fileCtrl.listDir(this.fileCtrl.externalRootDirectory,'').then(
      (list) => {
        alert(JSON.stringify(list));
        //
        for(let x=0;x<list.length;x++)
        {
          if(list[x].isFile)
          {
            this.fileCtrl.
            resolveDirectoryUrl(this.fileCtrl.externalRootDirectory).then(de=>{

              //     
                this.fileCtrl.
                getFile(de,list[x].name,{}).then(data=>{
                  
                  data.file(tmpFile=> {
                    
                    alert(JSON.stringify(tmpFile) );

                    console.log('tmpFile', tmpFile);
            console.log('tmpFile.size', tmpFile.size);	
              
                    }, ((error) => alert(JSON.stringify(error) )));
                  this.info.push(JSON.stringify(data));
                  
                });
             
              //

            });
            //break
          }
          else
          {
            /*this.fileCtrl.resolveDirectoryUrl(this.fileCtrl.externalRootDirectory).then(de=>{

              this.fileCtrl.getDirectory(de,list[x].name,{}).then(data=>{
                data.getMetadata(meta=>{
                  alert(JSON.stringify(meta));
                });
                
              });
            });
            break;
            */
          }
          
        }

          

        //
          this.dirs=list;
      }
  );

  
  }
  
  public loadList(list: any)
  {
    
  }

  open(x)
  {

  }

}
