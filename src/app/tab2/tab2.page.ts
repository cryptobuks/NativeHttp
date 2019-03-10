import { Component } from '@angular/core';
import { apikey } from '../apiurl/server.js'; 
import { CrudService } from '../crud.service'; 
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mybooks : any; 
constructor(private router:Router , private crudService : CrudService , private http:HTTP){
  this.crudService.getBooks(apikey+'/api/books', {}, {})
  .then(data => {
    this.mybooks = (JSON.parse(data.data))['data'];
   
  })
  .catch(error => {
alert(error.status);
    alert(error.error); 
  });

}


doRefresh(event) {
  alert('Begin async operation');

  setTimeout(() => {
    alert('Async operation has ended');
    event.target.complete();
  }, 2000);
}
onEdit(itemId){

  this.router.navigateByUrl('/edit-book/'+itemId); 

}
onDelete(itemId){

  this.crudService.DeleteBook(apikey+'api/books/'+itemId) .then(data => {

    alert(data.status);
    alert(data.data); // data received by server
    alert(data.headers);

  })
  .catch(error => {

    alert(error.status);
    alert(error.error); // error message as string
    alert(error.headers);

  });
}

}
