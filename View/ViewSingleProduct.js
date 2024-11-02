import { Products } from "../Model/Products";


export const singleProductSkeleton = [

  {
    id: 'price-header', //visa pris på produkt
    type: 'h2',
    className: 'headers',
    content: `${product.price}`,
  },

  {

    id: 'product-choices',
    type: 'dropdown-menu',
    className: 'dropdown-menu',
    menuTitle: 'Choose color',
    items: [
      
    ]

  }




]
