import { Injectable } from "@angular/core";
import { Article } from "./shop/Article";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  lesArticles = [
    new Article(
      12345,
      "../assets/c.jpg",
      new Date(2019, 4, 15),
      "Hiking Backpack",
      55.2,
      true,
      0.2
    ),
    new Article(
      955225,
      "../assets/jumperope.jpg",
      new Date(2019, 7, 25),
      "Jump Rope",
      35.8,
      false,
      0.13
    ),
    new Article(
      59548,
      "../assets/tente.jpg",
      new Date(2018, 4, 4),
      "Frame Tent",
      124,
      false,
      0.15
    ),
    new Article(
      6230469,
      "../assets/cc.jpg",
      new Date(2019, 12, 8),
      "Dome Tent",
      99.8,
      true,
      0.2
    ),
    new Article(
      4932502,
      "../assets/wat.jpg",
      new Date(2018, 6, 2),
      "Water Bottle",
      175.0,
      true,
      0.3
    ),
    new Article(
      299898,
      "../assets/img29.jpg",
      new Date(2019, 11, 26),
      "Golden Clock",
      200,
      false,
      0
    ),
    new Article(
      3933898,
      "../assets/set.jpg",
      new Date(2019, 5, 3),
      "Foldable Chair",
      96.14,
      true,
      0.1
    ),
    new Article(
      9665898,
      "../assets/gear.jpg",
      new Date(2019, 1, 25),
      "Sleeping Bag",
      145,
      false,
      0
    )
  ];
  constructor() {}
  public add(
    id: number,
    img: string,
    date: Date,
    libelle: string,
    prix: number,
    dispo: boolean,
    reduction: number
  ): boolean {
    this.lesArticles.push(
      new Article(id, img, date, libelle, prix, dispo, reduction)
    );
    return true;
  }

  public update(
    id: number,
    img: string,
    date: Date,
    libelle: string,
    prix: number,
    dispo: boolean,
    reduction: number
  ): boolean {
    let i = 0;
    let item: Article;
    let test: boolean;
    while (this.lesArticles[i].id != id) {
      i++;
    }
    if (this.lesArticles[i].id == id) {
      item = this.lesArticles[i];
      if (img != "") item.img = img;
      item.date = date;
      if (libelle != "") item.libelle = libelle;
      if (prix != 0) item.prix = prix;
      item.dispo = dispo;
      if (reduction != 0) item.reduction = reduction;
      this.lesArticles[i] = item;
      test = true;
    } else test = false;
    return test;
  }

  delete(id: number): boolean {
    let i: number = 0;
    let test: boolean;
    while (this.lesArticles[i].id != id) {
      i++;
    }
    if (this.lesArticles[i].id == id) {
      this.lesArticles.splice(i, 1);
      test = true;
    } else test = false;
    return test;
  }
}
