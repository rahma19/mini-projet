import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  mdp = "rahmaaa";
  name = "rahma";
  /*mail = "rahmaamissaouii19@gmail.com";
  test1 = false;
  test2 = false;
  verif1(ch1: String) {
    if (this.mail == ch1) this.test1 = true;
    return this.test1;
  }
  verif2(ch2: String) {
    if (this.mdp == ch2) this.test2 = true;
    return this.test2;
  }
  verif(x: String, y: String) {
    if (this.verif1(x) && this.verif2(y)) return true;
    else return false;
  }*/
  constructor() {}

  ngOnInit() {}
}
