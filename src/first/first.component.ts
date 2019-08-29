import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-first-component",
  templateUrl: "./first.component.html"
})
export class FirstComponent {
  // language = new FormControl();
  // year = new FormControl();
  // creator = new FormControl();

  languageForm: FormGroup = new FormGroup({
    name: new FormControl(),
    year: new FormControl(),
    creator: new FormControl()
  });
  constructor() {}

  print() {
    console.log(this);
  }
}
