import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PostService } from "src/app/post.service";

@Component({
  selector: "app-second-component",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent {
  postForm: FormGroup;
  msg = "";
  constructor(private postService: PostService) {
    this.postForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
  }

  create() {
    this.msg = "saving data....";
    console.log(this.postForm.value);
    this.postService.create(this.postForm.value).subscribe(
      res => {
        console.log(res);
        setTimeout(() => {
          this.postForm.reset();
          this.msg = "Data saved successfully";
        }, 2000);
      },
      err => {
        console.log(err);
        this.msg = "Data failed to save. Try again :(";
      },
      () => {
        setTimeout(() => {
          this.msg = "";
        }, 4000);
      }
    );
  }
}
