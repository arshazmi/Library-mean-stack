import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  constructor(private library: LibraryService) { }
  authors:any;

  ngOnInit() {
    this.library.getAuthors().subscribe(data=>{
      console.log(data);
      this.authors = data;
    })
  }

  deleteAuthor(artitle){
    this.library.deleteAuthor(artitle).subscribe(data=>{
      this.author = data;
    })
  }
}


/****
import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private library: LibraryService) { }
 
  books:any;

  ngOnInit() {
    this.library.getBooks().subscribe(data=>{
      console.log(data);
      this.books = data;
    })
  }

  deleteBook(bktitle){
    this.library.deleteBook(bktitle).subscribe(data=>{
      this.books = data;
    })
  }
}

     */
