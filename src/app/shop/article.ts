export class Article {
  splice(i: number, arg1: number) {
    throw new Error("Method not implemented.");
  }
  public id: number;
  public img: String;
  public date: Date;
  public libelle: String;
  public prix: number;
  public dispo: boolean;
  public reduction: number;

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
