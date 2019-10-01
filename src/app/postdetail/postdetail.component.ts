import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";
import { switchMap } from "rxjs/operators";
import { combineLatest } from "rxjs";
@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.css"]
})
export class PostdetailComponent implements OnInit {
  post: any = {};
  rParams$ = this.activatedRoute.params.pipe(
    switchMap(data => {
      return this.appService.getPost(data.id);
    })
  );
  qParams$ = this.activatedRoute.queryParams;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {
    // this.activatedRoute.params.subscribe(data => {
    //   console.log(data);
    //   this.appService.getPost(data.id).subscribe(res => (this.post = res[0]));
    // });
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(data => {
    //       console.log(data);
    //       return this.appService.getPost(data.id);
    //     })
    //   )
    //   .subscribe(res => (this.post = res[0]));
    // this.activatedRoute.queryParams.subscribe(params => console.log(params));

    combineLatest(this.rParams$, this.qParams$).subscribe(params => {
      console.log(params);
      this.post = params[0][0];
    });
  }

  ngOnInit() {}
}
