import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { apikey } from '../apiurl/server.js'; 
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
})
export class EditBookPage implements OnInit {

  constructor(public crudService: CrudService , public router:ActivatedRoute , public r : Router) { }
  singledata :any; 

  name : '' ;
  details : '' ;  
 
id; 
  ngOnInit() { 
     this.id = this.router.snapshot.paramMap.get('id'); 
  this.crudService.ReadBook(apikey+'api/books/'+this.id).then((data) => {
   // console.log(JSON.stringify(data))
    this.singledata = (JSON.parse(data.data))['data'];

  })

  }
  myUpdate(){

    this.id = this.router.snapshot.paramMap.get('id'); 

this.crudService.EditBook(apikey+'api/books/'+this.id , 
{  name : this.name , details : this.details } ) .then(data => {

    alert(data.status);
  alert(data.data); // data received by server
    alert(data.headers);
  //  this.singledata = data["data"]

  })
  .catch(error => {

    alert(error.status);
    alert(error.error); // error message as string
    alert(error.headers);

  });
  }


}
