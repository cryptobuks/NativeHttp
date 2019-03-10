import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { apikey } from '../apiurl/server.js';
import { Router } from '@angular/router'; 
import { Storage } from '@ionic/storage'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name = ""; 
  email =""; 
  password =""; 
  constructor(private authService:AuthService , private router:Router , private storage : Storage) { }

  ngOnInit() {
  }
myLogin(){
if (this.email.trim() && this.password.trim()){
  if (this.password.trim() === ''){
    alert('Please Put your Password')
  }else {
    this.authService.login(apikey+'api/user/login' , { email:this.email , password:this.password}).
    then((data)=>{
  var result1 = (JSON.parse(data.data))['token'];
  var result2 = (JSON.parse(data.data))['error'];  
  alert(result1)
  this.storage.set('token' , result1);
  alert(result2) 
     this.router.navigateByUrl('tabs'); 
    } , 
    (err)=>{
      alert(err)
      alert('Some thing wrong')
    });
  }
}else{
  alert('please add Valid Password')
}
}
logout(){
  this.authService.logout(); 
}
}
