import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"]
})
export class ShopComponent implements OnInit {
  titre = "Best Selling";
  articles = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.lesArticles;
  }
}
