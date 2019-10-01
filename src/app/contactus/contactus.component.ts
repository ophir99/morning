import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"]
})
export class ContactusComponent implements OnInit {
  posts = [];
  constructor(
    private router: Router,
    private appService: AppService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.appService.getPosts().subscribe((res: any) => (this.posts = res));
    this.activatedRoute.data.subscribe((data: any) => {
      this.posts = data.postsRES;
    });
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
