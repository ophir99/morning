import { Component } from "@angular/core";

@Component({
  selector: "app-second-component",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent {
  listOfContinents: string[] = [
    "ASIA",
    "AFRICA",
    "ANTARCTICA",
    "AUSTRALIA",
    "EUROPE",
    "NORTH AMERICA",
    "SOUTH AMERICA"
  ];

  selectedContinent: string = "";
  catchContinent(e) {
    console.log("Logging in parent..", e);
    this.selectedContinent = e;
  }
}
