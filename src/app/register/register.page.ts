import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { apikey } from '../../app/apiurl/server.js'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
name = ""; 
email =""; 
password =""; 
  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit() {
  }
  myRegister(){
    if (this.email.trim() && this.name.trim() && this.password.trim()){
      if(this.password.trim() === ''){
        alert('Please Put Valid Password')
      }else {
        this.authService.createAccount(apikey+'api/user/register' , {
          email :this.email , 
          name : this.name , 
          password : this.password}).then((result)=>{
alert(result)
this.router.navigateByUrl('tabs'); 

          } , (err)=>{
            alert(err)
            alert('Wrong Credentials')
          }); 
        }
      }else{
        alert('Valid Password')
      }
    }
  }