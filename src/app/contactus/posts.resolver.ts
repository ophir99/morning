import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AppService } from "../app.service";
@Injectable({
  providedIn: "root"
})
export class PostsResolver implements Resolve<any> {
  constructor(private appService: AppService) {}

  resolve() {
    console.log("Executing..");
    return this.appService.getPosts();
  }
}
