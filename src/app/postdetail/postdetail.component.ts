import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";
import { switchMap } from "rxjs/operators";
@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.css"]
})
export class PostdetailComponent implements OnInit {
  post: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {
    // this.activatedRoute.params.subscribe(data => {
    //   console.log(data);
    //   this.appService.getPost(data.id).subscribe(res => (this.post = res[0]));
    // });

    this.activatedRoute.params
      .pipe(
        switchMap(data => {
          console.log(data);
          return this.appService.getPost(data.id);
        })
      )
      .subscribe(res => (this.post = res[0]));
  }

  ngOnInit() {}
}
