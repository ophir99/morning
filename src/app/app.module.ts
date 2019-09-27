import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { PostdetailComponent } from "./postdetail/postdetail.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "aboutus",
        component: AboutusComponent
      },
      {
        path: "posts",
        component: ContactusComponent
      },
      {
        path: "post/:title/:id",
        component: PostdetailComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
