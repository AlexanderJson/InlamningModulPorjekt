export class Products {

constructor(id, name, price, type, colors, description, stock, relations = []) {

  this.id = id;
  this.name = name;
  this._price = price;
  this.type = type;
  this.color = color;
  this.description = description;
  this.stock = stock;
  this.relations = relations; // relaterade varor (för rekommendationer, tips, accessoarer osv)

}



  get price(){
  return this._price;
  }
  set price(newPrice){
  if (newPrice < 0) throw new Error("Price needs to be more than 0"); //error hsntering globalt
    this._price = newPrice;
  }

  getCurrentPrice(){

  }


  addAddon(addon){
    // logik för att lägga på vara + vara
  }

  removeAddon(addon){}

}
