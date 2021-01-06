import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }
  
  getBooks(){
    return this.http.get("https://library-server-assignment.herokuapp.com/books/getbooks");
  }

  getBookById(bid){
    return this.http.get("https://library-server-assignment.herokuapp.com/books/" + bid);
  }

  getAuthors(){
    return this.http.get("https://library-server-assignment.herokuapp.com/authors/getauthors");
  }

  getAuthorById(aid){
    return this.http.get("https://library-server-assignment.herokuapp.com/authors/" + aid);
  }

  deleteBook(dbid){
    return this.http.get("https://library-server-assignment.herokuapp.com/books/delete/" + dbid);
  }

  editBook(data){
    return this.http.post("https://library-server-assignment.herokuapp.com/books/edit/", data)
  }

  addAuthor(item:any){
    return this.http.post("https://library-server-assignment.herokuapp.com/authors/addauthor/", {"author":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteAuthor(dbid){
    return this.http.get("https://library-server-assignment.herokuapp.com/authors/deleteauthor/" + dbid);
  }

  editAuthor(data){
    return this.http.post("https://library-server-assignment.herokuapp.com/authors/editauthor/", data)
  }

  addNewBook(book){
    return this.http.post("https://library-server-assignment.herokuapp.com/books/add/", book)
  }

  addUser(user){
    return this.http.post("https://library-server-assignment.herokuapp.com/signup", user)
  }

  getUser(user){
    return this.http.post("https://library-server-assignment.herokuapp.com/login", user);
  }

  checkUsernameEmail(user){
    return this.http.get("https://library-server-assignment.herokuapp.com/signup/"+user['username'])
  }
  
}
