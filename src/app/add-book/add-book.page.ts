import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service'; 
import { apikey } from '../apiurl/server.js';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  name :string =  '' ;
  details : string =  ''; 
  constructor(private crudService:CrudService , private router:Router) { }

  ngOnInit() {
  }
  insertBook(){
this.crudService.createBook(apikey+'api/books' , { name:this.name , details:this.details }).then((data)=>{
  alert(data)
this.router.navigateByUrl('tabs'); 

          } , (err)=>{
            alert(err)
            alert('Wrong Credentials')
          }); 
        }

  }


