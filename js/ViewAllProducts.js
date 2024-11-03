import { singleProductSkeleton } from "./singleProductSkeleton.js";
import { getProducts } from './GetProducts.js';
import {Products} from "./Products.js";

export function testing() {
  console.log("buildFromSkeleton works");
}

function seekObjects(json, product){
  return json.replace(/\+\s*\/(\w+)/g, (match, attribute) =>{
    return product[attribute] !== undefined ? product[attribute] : "Nothing found"; // byt antingen ut med product attribut som mathcar,
    })
}

( async function test(json, product) {
  const products = await getProducts();
  console.log("TEST 1:", products);
})();


// denna funktion hämtar array med objects, itererar objects och skapar en lista för varje object (forts l. 42)
  async function iterateProductsArray(){
    const products = await getProducts();
    let singleProductList = Array;

    products.forEach(product => {
       singleProductList = product;
    })
    return singleProductList;
  }


export async function buildFromSkeleton() {


  const productPageMain = document.createElement('div');
  productPageMain.id = ('prod');


  const productContainer = document.createElement('div');
  //här hämtar vi nu listan (som const då den är statisk nu)
  const product =await  iterateProductsArray();

  // vi söker igenom varje objekt inuti vår blueprint, om trigger word "+/" finns någonstans
  //tas det bort. Ordet efter plockas ut och kollas om det matchar med en egenskap från product object array
  singleProductSkeleton.forEach((item) => {
      if (item.content.includes('+/')) {
        item.content = seekObjects(item.content, product)
      }


      // här är vår default bygglista, vi hämtar respektive statiska fält. Vissa element har t.ex inte textContent, men då är de bara satta på null i blueprint.
      const element = document.createElement(item.type);
      element.id = item.id
      element.textContent = item.content;
      element.style.gridColumn = `${item.columnStart}`;
      element.style.gridRow = `${item.rowStart} `;
      productPageMain.appendChild(element);
    }
  )

  productPageMain.appendChild(productContainer)
  return productPageMain;
}




/*
  // letar efter (+/) i filen, om den finns bytas allt efter ut med matchande produkt egenskap, ex. +/price = price
  singleProductSkeleton.forEach((item) => {
      if (item.content.includes('+/')) {
        item.content = seekObjects(item.content, products)
      }

      const element = document.createElement(item.type);
      element.id = item.id
      element.textContent = item.content;
      element.style.gridColumn = `${item.columnStart}`;
      element.style.gridRow = `${item.rowStart} `;
      productPageMain.appendChild(element);
    }
  )*/


/*
fetchId().then(() => {
  console.log("fetchProducts completed");
}).catch(error => {
  console.error("Error in fetchProducts:", error);
});

buildFromSkeleton()


______________________-

    return container;
export function buildSingleProduct() {

  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const productPageMain = document.createElement('div');
  productPageMain.id = ('prod');
  productPageMain.appendChild(leftDiv);
  productPageMain.appendChild(rightDiv);
  return productPageMain;
}




async function fetchId(){
  const products = await getProductById(51);
  console.log(products);
}

async function fetchProducts() {
  try {
    const products = await getProducts();
    console.log("Products:", products);
  } catch (error) {
    console.error("Error in fetchProducts:", error);
  }
}









///////////////////////7
import {getProductByArticleNmb} from "./GetProducts.js";


//tar in artikelnummber på produktserien för att skapa en sida enbart för produktserien
async function fetchProductsByArticleNumber(artNumber){
  const products = await getProductByArticleNmb(artNumber);
  console.log(products);
  return products;
}


  const products = await getProductByArticleNmb(100);



////////////77











  async function fetchProductsByArticleNumber(artNumber){
    const products = await getProductByArticleNmb(artNumber);
    console.log(products);
    return products;
  }


  fetchProductsByArticleNumber(100).then(() => {
    console.log("fetchProducts completed");
  }).catch(error => {
    console.error("Error in fetchProducts:", error);
  });

  const products = await getProductByArticleNmb(100);
*/
