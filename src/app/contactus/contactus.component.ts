import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"]
})
export class ContactusComponent implements OnInit {
  posts = [];
  constructor(private router: Router, private appService: AppService) {
    this.appService.getPosts().subscribe((res: any) => (this.posts = res));
  }

  ngOnInit() {}

  goto() {
    console.log("Cool");
    ///
    //
    //
    this.router.navigate(["/aboutus"]);
  }
}
