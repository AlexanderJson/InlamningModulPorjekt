import {getProducts} from "./GetProducts.js";

export async function loadOutlet(){
  const allProductsByOutlet = await getProducts();
  return allProductsByOutlet.find(product => outletID === product.outletID);
}
