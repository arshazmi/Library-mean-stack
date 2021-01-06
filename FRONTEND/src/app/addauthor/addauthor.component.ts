import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../authormodel';
import { LibraryService } from '../library.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private libraryService: LibraryService,private router: Router) { }
  authorItem= {
    authorTitle : '',
    book : '',
    genre : '',
    description : '',
    urlToImage : ''}
  ngOnInit(): void {
  }
  addAuthor()
  {    
    this.libraryService.addAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
