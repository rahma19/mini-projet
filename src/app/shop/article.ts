export class Article {
  public id: number;
  protected img: String;
  protected date: Date;
  protected libelle: String;
  protected prix: number;
  protected dispo: boolean;
  protected reduction: number;

  constructor(
    id: number,
    img: string,
    date: Date,
    libelle: string,
    prix: number,
    dispo: boolean,
    reduction: number
  ) {
    this.id = id;
    this.img = img;
    this.date = date;
    this.libelle = libelle;
    this.prix = prix;
    this.dispo = dispo;
    this.reduction = reduction;
  }
}
