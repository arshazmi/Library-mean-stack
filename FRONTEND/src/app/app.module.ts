import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { AddbookComponent } from './addbook/addbook.component';
import { AuthordetailComponent } from './authordetail/authordetail.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
//import { EditbookComponent } from './editbook/editbook.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { LibraryService } from "./library.service";
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    //AddbookComponent,
    AuthordetailComponent,
    AuthorsComponent,
    BooksComponent,
    //EditbookComponent,
    ReadmoreComponent,
    UpdatebookComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UpdateauthorComponent,
    AddbookComponent,
    EditbookComponent,
    AddauthorComponent,
    EditauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
