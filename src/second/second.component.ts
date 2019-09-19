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
  editPost: FormGroup;
  msg = "";
  msg_ = "";
  postId = "";
  posts = [];
  constructor(private postService: PostService) {
    this.postForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
    this.editPost = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
    this.getPosts();
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

  getPosts() {
    this.postService.getAll().subscribe(
      (data: any) => {
        console.log(data);
        this.posts = data;
        console.log(this.posts);
      },
      err => console.log(err)
    );
  }

  delete(id) {
    this.postService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  edit(post) {
    console.log(post);
    this.editPost.patchValue(post);
    this.postId = post._id;
  }

  update() {
    console.log(this.editPost.value);
    this.msg_ = "Updating Data....";
    this.postService.update(this.postId, this.editPost.value).subscribe(
      res => {
        console.log(res);
        setTimeout(() => {
          this.editPost.reset();
          this.msg_ = "Data updated successfully";
        }, 2000);
      },
      err => {
        console.log(err);
        this.msg_ = "Data failed to update. Try again :(";
      },
      () => {
        setTimeout(() => {
          this.msg_ = "";
        }, 4000);
      }
    );
  }
}
