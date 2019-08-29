import { NgModule } from "@angular/core";
import { SecondModule } from "./second.module";
import { ThirdModule } from "./third.module";

import { BrowserModule } from "@angular/platform-browser";
import { FirstComponent } from "./first/first.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FirstComponent],
  imports: [SecondModule, ThirdModule, BrowserModule, FormsModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {
  constructor() {
    console.log("Logging from FirstModule");
  }
}
