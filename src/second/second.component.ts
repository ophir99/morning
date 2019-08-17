import { Component } from "@angular/core";

@Component({
  selector: "app-second-component",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent {
  name: string = "Angular";
  age: number = 10;
  language: string = "ENG";

  countries: string[] = ["IND", "RUS", "CHI", "JAP"];
  ranks: number[] = [1, 2, 3, 4, 5];
  person = {
    name: "RAM",
    age: 10
  };

  giveText(x): string {
    let wish = "Good morning";
    const time = "09:00";
    wish = `Good afternoon ${this.name}`;
    return `Hi ${wish}  the time is ${time} O' clock by ${x}`;
    // return "Hi " + wish + " the time is " + time + " O clock by " + x;
  }

  respond(): void {
    alert(`Hi ${this.name}`);
  }

  inc(): void {
    this.age = this.age + 1;
  }

  dec(): never {
    // ..
    // ..
    throw new Error("Custom error message");
    this.age = this.age - 1;
  }
}
