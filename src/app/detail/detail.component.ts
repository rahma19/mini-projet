import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "../shop/Article";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  article: Article;
  identifiant: number;
  quan = 1;
  reduc() {
    return (
      this.article.prix - (this.article.prix * this.article.reduction) / 100
    );
  }
  moin() {
    this.quan--;
  }
  plus() {
    this.quan++;
  }
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params["id"];
    this.getIdArticle(this.identifiant);
  }
  getIdArticle(id: number) {
    for (var i = 0; i < this.articleService.lesArticles.length; i++)
      if (this.articleService.lesArticles[i].id == id) {
        this.article = this.articleService.lesArticles[i];
      }
  }
}
