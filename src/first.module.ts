import { NgModule } from "@angular/core";
import { SecondModule } from "./second.module";
import { ThirdModule } from "./third.module";

import { BrowserModule } from "@angular/platform-browser";
import { FirstComponent } from "./first/first.component";
import { LeftComponent } from "./app/left/left.component";
import { RightComponent } from "./app/right/right.component";
import { BookService } from "./app/book.service";

@NgModule({
  declarations: [FirstComponent, LeftComponent, RightComponent],
  imports: [SecondModule, ThirdModule, BrowserModule],
  providers: [BookService],
  bootstrap: [FirstComponent]
})
export class FirstModule {
  constructor() {
    console.log("Logging from FirstModule");
  }
}
