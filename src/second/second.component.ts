import { Component } from "@angular/core";

@Component({
  selector: "app-second-component",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent {
  name = "Angular";
  age = 10;
  language = "ENG";

  giveText(x) {
    let wish = "Good morning";
    const time = "09:00";
    wish = `Good afternoon ${this.name}`;

    return `Hi ${wish}  the time is ${time} O' clock by ${x}`;
    // return "Hi " + wish + " the time is " + time + " O clock by " + x;
  }

  respond() {
    alert(`Hi ${this.name}`);
  }

  inc() {
    this.age = this.age + 1;
  }

  dec() {
    this.age = this.age - 1;
  }
}
