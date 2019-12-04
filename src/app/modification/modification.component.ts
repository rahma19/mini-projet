import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";
import { NgForm, NgModel } from "@angular/forms";
import { Article } from "../shop/Article";
import { discardPeriodicTasks } from "@angular/core/testing";
@Component({
  selector: "app-modification",
  templateUrl: "./modification.component.html",
  styleUrls: ["./modification.component.css"]
})
export class ModificationComponent implements OnInit {
  idantifiant: number = 0;
  img: string = "";
  date: Date = new Date(2000, 1, 1);
  libelle: string = "";
  prix: number = 0;
  dispo: boolean = false;
  reduction: number = 0;

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
  dat: Date = new Date(2000, 1, 1);
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
  submt(f: NgForm) {
    let drop: boolean;
    drop = this.articleService.delete(this.id);
  }
  ngOnInit() {}
}
/*findById: function(id) {
    return artsTab[id];
  },
  findByString: function(crit) {
    for (let item in artsTab) {
      if (
        artsTab[item].description.includes(crit) == crit ||
        artsTab[item].nom.includes(crit)
      ) {
        return artsTab[item];
      }
    }
    return null;
  },
  findByPrice: function(prix) {
    for (let item in artsTab) {
      if (artsTab[item].prix == prix) {
        return artsTab[item];
      }
    }
    return null;
  },
  };

return obj;
};

art.add();
art2.add();

for (let item in artsTab) {
console.log(artsTab[item].toString());
}

artsMgr.update(art.id, "fa7ma", "", "");
let findArt = artsMgr.findByString("7ma");
if (findArt) {
console.log(findArt.toString());
}

function searchFn(elem) {
let findArt = artsMgr.findByString(elem);
if (findArt) {
  console.log(findArt.toString());
}*/
