var artsTab = [];
var artsId = 0;

var article = function(nom, description, prix) {
  let obj = {
    id: "",
    nom: nom,
    description: description,
    prix: prix,

    toString: function() {
      let op =
        "Article Id: " +
        this.id +
        ", Nom: " +
        this.nom +
        ", Description: " +
        this.description +
        ", Prix: " +
        this.prix;
      return op;
    },

    add: function() {
      artsTab.push(this);
      obj.id = artsId;
      artsId++;
    },
    findById: function(id) {
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
    delete: function(id) {
      artsTab.pop(id);
    },
    update: function(id, nom, description, prix) {
      let item = artsTab[id];
      if (nom != "") {
        item.nom = nom;
      }
      if (description != "") {
        item.description = description;
      }
      if (prix != "") {
        item.prix = prix;
      }

      artsTab[id] = item;
    }
  };

  return obj;
};

var artsMgr = article();

let art = article("rahma", "chaise", "25dt");
let art2 = article("azza", "etagaire", "70dt");

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
  }
}
