export class Article {
  public id: number;
  public nom: String;
  public post: String;
  public expert: boolean;

  constructor(id, nom, post, expert) {
    this.id = id;
    this.nom = nom;
    this.post = post;
    this.expert = expert;
  }
}
