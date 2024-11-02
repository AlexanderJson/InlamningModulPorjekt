import { Products } from "./Products.js";
import { buildFromSkeleton  } from "../View/ViewAllProducts.js";


function connection(){
  console.log("works")
  alert("works")
}

function buildApp(){
  const appDiv = document.querySelector('main');
  const productPage = buildFromSkeleton();

  appDiv.appendChild(productPage);
  return appDiv;
}
window.onload = buildApp;
