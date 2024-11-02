import { Products } from "./Products.js";
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


// bakgrundfärg: r g b - 15% , 4% , 9%


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


const filePath = path.resolve(dirname, 'products.json');
// lägg på "id" funktion med, så vi inte behöver hämta ALL data varje gång


// för sök parametrar senare:

// söker efter json data baserat på filter. todo: gör dynamiskt sen med argument.

export async function getProductById(id){
  const allProductsByFilter = await getProducts();
  return allProductsByFilter.find(product => id === product.id);
}
export async function getProductByArticleNmb(articleNumber){
  const allProductsByFilter = await getProducts();
  return allProductsByFilter.filter(product => articleNumber === product.articleNumber);
}


// universiellt json sök, återanvänds i andra metoder som filtrerar data.

// asynkron funktion m. async/await. Allt körs sekventiellt på main tråden i javascript,
// koden "pausas/hoppar av tråden" tillfälligt tills den hämtat response. Suspension triggas när "await" kallas.
export async function getProducts() {

  try {

    const data = await fs.readFile(filePath, 'utf8');
    const productData = JSON.parse(data);

    if (!Array.isArray(productData)) {
      throw new Error("Product is not array!!!!!!!!!!")
    }

    return productData.map(data => new Products(
      data.articleNumber,
      data.id,
      data.name,
      data.price,
      data.type,
      data.description,
      data.stock,
      data.color
    ));



  }
    catch (error){
      console.log(error);
      return [];
    }
  }

