import { Component } from "@angular/core";

@Component({
  selector: "app-first-component",
  templateUrl: "./first.component.html"
})
export class FirstComponent {
  // language: string = "";
  // year: string;
  // creator: string;
  // bindLanguage(event) {
  //   console.log(event);
  //   this.language = event.target.value;
  // }

  // bindLanguage(dom) {
  //   console.log(dom);
  //   this.language = dom.value;
  // }

  language = {
    name: "",
    year: "",
    creator: ""
  };

  logData() {
    console.log(this);
  }
}
