import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token:any ;
  constructor(public http: HTTP , private storage:Storage) { }
  createAccount(url , body = {} , headers ={}){
    return this.http.post(url , body , headers)
  }
  login(url , body = {} , headers ={}){
    return this.http.post(url , body , headers)
  }
  logout(){
    this.storage.set('token' , null); 
  }
  myProfile(url  , body = {} , headers){
return this.http.get(url , body , headers)
  }
  checkAuth(){
    return new Promise ((resolve , reject) => {
      this.storage.get('token').then((value) =>{
        this.token = value; 
        resolve(this.token)
      }, (reject)=>{
        alert(reject)
      })
    }); 
  } 
}