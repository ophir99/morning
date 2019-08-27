import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-continent",
  templateUrl: "./continent.component.html",
  styleUrls: ["./continent.component.css"]
})
export class ContinentComponent implements OnInit {
  x;
  y;

  @Input()
  continent: string = "AFRICA";

  @Output()
  z = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendContinent() {
    console.log("logging..");
    this.z.emit(this.continent);
  }
}
