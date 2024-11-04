import { Products } from './Products.js';


export class UserCart {

  constructor(items = []) {

    this.items = items;
  }


  addItem(product){
    this.items.push(product)
  }

  seeItems(){
    return this.items.map(item => `Product: ${item.name}, Price: ${item.price}`).join('\n');
  }


}
