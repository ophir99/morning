import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {
  URL = `http://localhost:4567/posts`;
  constructor(private http: HttpClient) {}

  getPosts = () => this.http.get(`${this.URL}/getall`);

  getPost = id => this.http.get(`${this.URL}/${id}`);
}
