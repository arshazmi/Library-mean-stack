import { Component, OnInit } from '@angular/core';
import { IBook } from '../bookmodel';
import { LibraryService } from '../library.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private libraryService: LibraryService,private router: Router) { }
  bookItem= {
    bookTitle : '',
    author : '',
    genre : '',
    description : '',
    price : '',
    urlToImage : ''}
// bookItem: IBook;
  ngOnInit(): void {
  }
  addBook()
  {    
    this.libraryService.addNewBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}





