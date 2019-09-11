import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  create(data) {
    return this.http.post("http://localhost:4567/posts/new", data);
  }
}
