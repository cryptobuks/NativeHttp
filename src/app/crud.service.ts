import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HTTP) { }
  createBook(url , body = {} , headers ={}){
    return this.http.post(url , body , headers)
  }
  EditBook(url , body = {} , headers ={}){
    this.http.setDataSerializer('json'); 
    return this.http.put(url , body , headers)
  }
  getBooks(url , body = {} , headers ={}){
    return this.http.get(url , body , headers)
  }
  ReadBook(url , body = {} , headers ={}){
    return this.http.get(url , body , headers)
  }
  DeleteBook(url , body = {} , headers ={}){
   // this.http.setDataSerializer('json'); 
return this.http.delete(url , body , headers)
  }
    
  
}
