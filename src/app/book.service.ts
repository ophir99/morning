import { Injectable } from "@angular/core";

@Injectable()
export class BookService {
  book = {
    book: "",
    author: ""
  };

  booksList = [];

  setData(book) {
    this.book.book = book.book;
    this.book.author = book.author;
    console.log("SETTING DATA", this.book);
    this.booksList.push(this.book);
  }

  getData() {
    console.log("Sending data");
    return this.booksList;
  }
}
