import { singleProductSkeleton } from "./singleProductSkeleton.js";

function renderProductPage(productId){

  const product = allProducts.find(placeholderId => placeholderId.id === productId);
  //null check
  if (!product){
    console.error(`Produkt kunde ej hittas!`); //throw sen
    return; //avbryt
  }

  // iterera seleton klassens data för att sätta värde
  const buildFromSkeleton = singleProductSkeleton.map(component =>
    {
      if (component.id === 'price-header' && component.content === 1){
        return {
          ...component,
          content: `Price: ${product.price}`
        }
      } return component;
    });

    buildFromSkeleton.forEach(component => {
      const element = document.createElement(component.type);
      element.className = component.className;
      element.textContent = component.content;
      document.body.appendChild(element);
    })

  // Nu kan denna funktion skapa en sida baserat på projekt id som väljs, därav kan vi ha
  // 10000000 produkter, men det kommer alltid skapas med samma layout sålänge ID finns med.
  renderProductPage(projectId);

}

