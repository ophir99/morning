import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { BookService } from "./../book.service";

@Component({
  selector: "app-right",
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.css"]
})
export class RightComponent implements OnInit, OnChanges {
  @Input()
  bookDetails: any;

  listOfBooks: any[] = [];

  // bookService = new BookService();
  constructor(private bookService: BookService) {
    console.log("Hi from constructor of RIGHT");
    this.listOfBooks = this.bookService.getData();
  }

  ngOnInit() {
    console.log("Hi from ONINIT of RIGHT");
  }

  ngOnChanges() {
    console.log("Hi from onChanges of RIGHT");
    console.log(this.bookDetails);
    if (this.bookDetails) {
      this.listOfBooks.push(this.bookDetails);
    }
  }
}
