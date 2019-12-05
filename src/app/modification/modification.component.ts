import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";
import { NgForm, NgModel } from "@angular/forms";
import { Article } from "../shop/Article";
import { discardPeriodicTasks } from "@angular/core/testing";
import { NgForOf } from "@angular/common";
@Component({
  selector: "app-modification",
  templateUrl: "./modification.component.html",
  styleUrls: ["./modification.component.css"]
})
export class ModificationComponent implements OnInit {
  idantifiant: number = 0;
  img: string = "";
  date: Date = new Date();
  libelle: string = "";
  prix: number = 0;
  dispo: boolean = false;
  reduction: number = 0;

  art = this.articleService.lesArticles;
  constructor(private articleService: ArticleService) {}
  onSubmit(f: NgForm) {
    let add: boolean;
    add = this.articleService.add(
      this.idantifiant,
      this.img,
      this.date,
      this.libelle,
      this.prix,
      this.dispo,
      this.reduction
    );
  }
  id: number = 0;
  image: string = "";
  dat: Date = new Date();
  lib: string = "";
  prx: number = 0;
  disponible: boolean = true;
  red: number = 0;

  submit(f: NgForm) {
    let up: boolean;
    up = this.articleService.update(
      this.id,
      this.image,
      this.dat,
      this.lib,
      this.prx,
      this.disponible,
      this.red
    );
  }
  idd: number = 0;
  submt(f: NgForm) {
    let drop: boolean;
    drop = this.articleService.delete(this.idd);
  }

  dispnbl = false;
  findByReduc(f: NgForm) {
    let test: boolean;
    test = this.articleService.findByReduc(this.dispnbl);
  }
  ngOnInit() {}
}
