import { Component, OnInit, AfterViewInit, OnChanges } from "@angular/core";

@Component({
  selector: "app-first-component",
  templateUrl: "./first.component.html",
  styleUrls: ["first.component.css"]
})
export class FirstComponent implements OnInit, AfterViewInit, OnChanges {
  data;
  constructor() {
    console.log("Hi from constructor");
  }

  ngOnInit() {
    console.log("Hi from OnInit");
  }

  ngAfterViewInit() {
    console.log("Hi from AfterViewInit");
  }

  ngOnChanges() {}

  getData(e) {
    this.data = e;
  }
}
