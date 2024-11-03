import {buildFromSkeleton} from "./ViewAllProducts.js";

function connection(){
  console.log("works")
  alert("works")
}



async function buildApp() {
  const appDiv = document.querySelector('main');

  const productPageMain  =  await buildFromSkeleton();

  appDiv.appendChild(productPageMain)


  return appDiv;
}
window.onload = buildApp;
