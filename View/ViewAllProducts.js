import {singleProductSkeleton} from "./singleProductSkeleton.js";


export function  buildFromSkeleton(){



  const leftContainer = document.createElement('div');
  leftContainer.id = ('left');
  const rightContainer = document.createElement('div');
  rightContainer.id = ('right');

  const productPageMain = document.createElement('div');
  productPageMain.id = ('prod');



  singleProductSkeleton.forEach((item) => {
      const element = document.createElement(item.type);
      element.classList.add('component')
      element.id = item.id
      element.textContent = item.content;
      element.style.gridColumn = `${item.columnStart} / span ${item.columnSpan}`;
      element.style.gridRow = `${item.rowStart} / span ${item.rowSpan}`;
      productPageMain.appendChild(element);
    }
  )
  return productPageMain;
}






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

*/
