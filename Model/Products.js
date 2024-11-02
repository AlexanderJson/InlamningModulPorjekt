export class Products {

constructor(id, name, price, type, description, stock, relations = []) {

  this.id = id;
  this.name = name;
  this.price = price;
  this.type = type;
  this.description = description;
  this.stock = stock;
  this.relations = relations; // relaterade varor (för rekommendationer, tips, accessoarer osv)

}



}
