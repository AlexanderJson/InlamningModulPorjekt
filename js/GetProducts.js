
import {Products} from "./Products.js";


// universiellt json sök, återanvänds i andra metoder som filtrerar data.



export function testing() {
  console.log("buildFromSkeleton works");
}
// bakgrundfärg: r g b - 15% , 4% , 9%




// lägg på "id" funktion med, så vi inte behöver hämta ALL data varje gång


// för sök parametrar senare:

// söker efter json data baserat på filter. todo: gör dynamiskt sen med argument.

export async function getProductById(id){
  const allProductsByFilter = await getProducts();
  return allProductsByFilter.find(product => Number(id) === product.id);
}

//alla filter i key value form: ex. color: green, outlet:true osv.
export async function searchByFilter(query,response){
    const allProductsByFilter = await getProducts();
    return allProductsByFilter.filter(product => product[query] === product[response]);
}


export async function getProductByArticleNmb(articleNumber){
  const allProductsByFilter = await getProducts();
  return allProductsByFilter.filter(product => articleNumber === product.articleNumber);
}

// asynkron funktion m. async/await. Allt körs sekventiellt på main tråden i javascript,
// koden "pausas/hoppar av tråden" tillfälligt tills den hämtat response. Suspension triggas när "await" kallas.
export async function getProducts() {
  try {

    const baseUrl = window.location.origin;
    const response = await fetch(`${baseUrl}/products.json`);

    if (!response.ok){
      throw new Error('Could not  load data! Response: ' + response)
    }
    const productData = await response.json();

    if (!Array.isArray(productData)) {
      throw new Error("Product is not array!!!!!!!!!!");
    }
    return productData.map(product => new Products(
      product.articleNumber,
      product.id,
      product.name,
      product.price,
      product.type,
      product.description,
      product.stock,
      product.color,
      product.outlet,
    ));
  }

    catch (error){
      console.log(error);
      return [];
    }
  }

(async function test(){
  const products = await getProducts();
  console.log("Prod: ", products);
})();

