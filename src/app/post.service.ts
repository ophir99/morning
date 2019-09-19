import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostService {
  BASEURL = "http://localhost:4567/posts";
  constructor(private http: HttpClient) {}

  create(data) {
    return this.http.post(`${this.BASEURL}/new`, data);
  }

  getAll() {
    return this.http.get(`${this.BASEURL}/getall`);
  }

  delete(id) {
    return this.http.delete(`${this.BASEURL}/delete/${id}`);
  }

  // update(id, post) {
  //   return this.http.put(`${this.BASEURL}/${id}`, post);
  // }

  update = (id, post) => this.http.put(`${this.BASEURL}/${id}`, post);
}
