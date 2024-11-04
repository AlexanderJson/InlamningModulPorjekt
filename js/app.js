import {getIndProduct} from "./ViewAllProducts.js";
import {createIcon} from "./ny/Icons.js";
import {openModal} from "./ny/CartModal.js";

function connection(){
  console.log("works")
  alert("works")
}




async function buildApp() {
  const appDiv = document.querySelector('main');
  const productPageMain  =  await getIndProduct(100,1);
  appDiv.appendChild(productPageMain)
  const showCart = openModal();
  const shoppingCart = document.getElementById('shoppingCart');
  shoppingCart.addEventListener('click', showCart)


  return appDiv;
}
window.onload = buildApp;



/*

  const productPageMain  =  await buildFromSkeleton();
  appDiv.appendChild(productPageMain)
 */
