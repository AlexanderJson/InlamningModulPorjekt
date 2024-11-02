import { buildSingleProduct } from "../View/singleProduct.js";


function connection(){

  console.log("works")
  alert("works")

}
function buildApp(){

  connection();
  const appDiv = document.querySelector('main');

  const singleProduct = buildSingleProduct();

  appDiv.appendChild(singleProduct);
}
window.onload = buildApp;
