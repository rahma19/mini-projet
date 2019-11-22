import { Injectable } from "@angular/core";
import { Article } from "./shop/article";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  lesArticles = [
    new Article(12345, "Mounir Ben Ali", "Directeur", true),
    new Article(12587, "Maha Ben Nasr", "Ingénieur", false),
    new Article(85719, "Alia Moalla", "Secrétaire", false),
    new Article(45879, "Sami Toumi", "Ingénieur", true)
  ];
  constructor() {}
}
