export class Products {

  constructor(articleNumber, id, name, price, type, description, stock, color, relations = []) {

  this.articleNumber = articleNumber;
  this.id = id;
  this.name = name;
  this._price = price;
  this.type = type;
  this._color = color;
  this.description = description;
  this.stock = stock;
  this.relations = relations;
  // relaterade varor (för rekommendationer, tips, accessoarer osv), ska ej finnas i json då
  // detta ska hanteras programatiskt. Skapa algoritm för rekommendationer? Neiuralt nätvekr?

}

  get color(){
  return this._color;
  }

  set color(newColor){
    this._color = newColor;
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
