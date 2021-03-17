import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";

export class repositories {
  id: string;
  name: string;
  url: string;
  description: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  username: string = "AniketBhandarge38";
  baseurl: string = "https://api.github.com/";

  repos: repositories[];

  constructor(private httpvar: HttpClient) {}

  ngOnInit() {
    this.getrepositories();
  }

  public getrepositories() {
    return this.httpvar
      .get<repositories[]>(this.baseurl + "users/" + this.username + "/repos")
      .subscribe(
        responses => {
          console.log("reponse received");
          console.log(responses);
          this.repos = responses;
        },
        error => {
          console.error("error occured");
          alert(error);
        },

        () => {
          console.log("completed");
        }
      );
  }
}
