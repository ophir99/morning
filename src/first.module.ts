import { NgModule } from "@angular/core";
import { SecondModule } from "./second.module";
import { ThirdModule } from "./third.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from "@angular/platform-browser";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./app/third/third.component";
import { FourthComponent } from "./app/fourth/fourth.component";

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    SecondModule,
    HttpClientModule,
    ThirdModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [SecondComponent]
})
export class FirstModule {
  constructor() {
    console.log("Logging from FirstModule");
  }
}
