import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { BookService } from "./../book.service";
@Component({
  selector: "app-left",
  templateUrl: "./left.component.html",
  styleUrls: ["./left.component.css"]
})
export class LeftComponent implements OnInit {
  @Output()
  postData = new EventEmitter();
  // bookService = new BookService();
  constructor(private bookService: BookService) {}
  ngOnInit() {}

  post(bookDOM, authorDOM) {
    console.log(bookDOM.value, authorDOM.value);
    const book = {
      book: bookDOM.value,
      author: authorDOM.value
    };
    // this.postData.emit(book);
    this.bookService.setData(book);
  }
}
