import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Sections } from "./../app/sections.enum";

@Component({
  selector: "app-second-component",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {
  show: boolean = true;
  sectionsEnum;
  currentSection: string;

  books: string[] = [];
  constructor() {
    console.log(Sections);
    this.sectionsEnum = Sections;
  }
  toggle(): void {
    this.show = !this.show;
  }

  changeSection(section: string): void {
    this.currentSection = section;
  }

  addBooks() {
    const book = `Book ${this.books.length}`;
    this.books.push(book);
  }

  removeBook() {
    this.books.pop();
  }
}
