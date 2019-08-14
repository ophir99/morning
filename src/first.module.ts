import { NgModule } from "@angular/core";
import { SecondModule } from "./second.module";
import { ThirdModule } from "./third.module";

import { BrowserModule } from "@angular/platform-browser";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [SecondModule, ThirdModule, BrowserModule],
  bootstrap: [SecondComponent]
})
export class FirstModule {
  constructor() {
    console.log("Logging from FirstModule");
  }
}
