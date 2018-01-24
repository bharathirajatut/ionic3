import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

declare var window:any;


@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {

applist:any=[];
  
constructor(public platform:Platform) {
   
this.getAppList();
}
   

getAppList()
{
     
this.platform.ready().then((d)=>{



window.plugins.packagemanager.show(true, (s)=> {
alert(JSON.stringify(s) );
this.applist=s;
}, (e)=>{
alert('Error');
});
  

});

}
}
