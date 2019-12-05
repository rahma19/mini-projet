import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  ch3 = "rahmaaa";
  ch1 = "Rahma";
  ch2 = "rahmaamissaouii19@gmail.com";
  mdp = "";
  name = "";
  mail = "";

  verif(x: String, y: String, z: string) {
    if (this.ch1 == x && this.ch2 == y && this.ch3 == z) return true;
    else return false;
  }
  constructor() {}

  ngOnInit() {}
}
