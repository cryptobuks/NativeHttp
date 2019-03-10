import { Component } from '@angular/core';
import { apikey } from '../apiurl/server.js';
import { AuthService } from '../auth.service'; 
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
user : any; 
  constructor(private authService: AuthService , private storage:Storage){
  //this.getProfile(); 
 /*   var value =   this.storage.get('token'); 
    alert(value)
    this.authService.myProfile(apikey+'api/user' , {} , { Authorization: 'Bearer ' +value })
    .then(data => {
     var error = (JSON.parse(data.data))['error'];
     alert(error)
     alert(data.data['error'])
     this.user = (JSON.parse(data.data));  
      alert(this.user)
    alert(data.status);
      alert(data.data); // data received by server
      alert(data.headers);
    })
    .catch(error => {
      alert(error.status);
      alert(error.error); // error message as string
    alert(error.headers);
    }); */ 
  }
  ngOnInit(){
this.getProfile(); 
  }
  doRefresh(event) {
    alert('Begin async operation');
  
    setTimeout(() => {
      alert('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  getProfile(){
    return new Promise((resolve , reject)=>{
      this.storage.get('token').then((value)=>{
alert(value); 
this.authService.myProfile(apikey+'api/user' , {} ,{ Authorization: 'Bearer ' +value } )
.then(data =>{
  var error = (JSON.parse(data.data))['error'];
  alert(error)
  alert(data.data['error'])
 this.user = (JSON.parse(data.data));
 alert(this.user)
 alert(data.status);
 alert(data.data); // data received by server
 alert(data.headers);
}).catch(error =>{
  alert(error.status);
  alert(error.error); // error message as string
alert(error.headers);
});
  
  })
});
  }
}