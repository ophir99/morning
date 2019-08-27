import { NgModule } from "@angular/core";
import { SecondModule } from "./second.module";
import { ThirdModule } from "./third.module";

import { BrowserModule } from "@angular/platform-browser";
import { SecondComponent } from "./second/second.component";
import { CountryComponent } from "./app/country/country.component";
import { ContinentComponent } from "./app/continent/continent.component";

@NgModule({
  declarations: [SecondComponent, CountryComponent, ContinentComponent],
  imports: [SecondModule, ThirdModule, BrowserModule],
  bootstrap: [SecondComponent]
})
export class FirstModule {
  constructor() {
    console.log("Logging from FirstModule");
  }
}
