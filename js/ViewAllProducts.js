import {getProductByArticleNmb, getProductById, searchByFilter} from './GetProducts.js';
import {buildOptionMenu} from "./ProductOptionsMenu.js";
import {buildProductCard} from "./ny/ProductInfoCard.js";
import {buildImageSection} from "./ny/ProductImageSection.js";
import {openModal} from "./ny/CartModal.js";

let Total = 0;
const Cart = []
let product = {};

// hämtar alla object till lista:
async function iterateProductById(id){

  return getProductById(id);
}

export async function getIndProduct(articleNo, id){

  product = await iterateProductById(id);
  return await buildFromSkeleton(articleNo, id);
}

export async function getAddons(category, value){
  return  await searchByFilter(category, value);
}

 async function buildFromSkeleton(articleNo, id) {








   // Hämta med artikel nummer
   const productByArticle = await getProductByArticleNmb(articleNo);


   const addonImagesDiv = document.createElement('div');
   addonImagesDiv.id = 'addon-images-container'


   // hämtar alla relaterade produkter
   const addonArray = await getAddons(product.type, product.articleNumber)
   const addonObjects = addonArray.filter(url => url.articleNumber !== product.articleNumber)
   const format = '.png';
   const imageHeader = document.createElement('imgHeader');


   imageHeader.className = 'headers'
   imageHeader.innerText = `Discounted if you buy one ${product.name} `
   addonImagesDiv.appendChild(imageHeader)


  addonObjects.forEach((addon=> {
    const moreBtn = document.createElement('button');
    const singleImgDiv = document.createElement('div');
    singleImgDiv.className = 'addon-item'


    moreBtn.innerText = 'Add to cart'

    const addonUrl = `${addon.articleNumber}${addon.color}${format}`
    console.log("url:", addonUrl)

    const img = document.createElement('img');
    img.src = addonUrl;
    img.alt = addon.name; //todo

    singleImgDiv.appendChild(img);
    singleImgDiv.appendChild(moreBtn)
    addonImagesDiv.appendChild(singleImgDiv)

    moreBtn.addEventListener('click', () => {
      // cart
      addCart(addon)
    })

  }))

   /*
   addonObjects.forEach((addon => {
     const img = document.createElement('img');
     img.src = addonUrl;
     img.alt = addon.name; //todo
     gridContainer.appendChild(img);
   })) */

   const productPageMain = document.createElement('div');
   productPageMain.id = ('prod');

   const div1 =buildImageSection(product);
   div1.className = 'div1';

   const div2 = document.createElement('div');
   div2.className = 'div2';
   productPageMain.appendChild(div1)

   productPageMain.appendChild(div2)



   const imageCardDiv = buildImageSection(product);

   const productCard = buildProductCard(product);
   productPageMain.appendChild(productCard);


   const buyEventDiv = document.createElement('div');
   buyEventDiv.id = 'buy-event'
   productPageMain.appendChild(buyEventDiv)

   const buyBtn = document.createElement('button')
   buyBtn.id = 'buy-btn'
   buyBtn.innerText = 'BUY NOW'
   const dropdown = buildOptionMenu(productByArticle, 'color', handleColorChange);



   buyEventDiv.append(dropdown)
   buyEventDiv.append(buyBtn)

   buyBtn.addEventListener('click', () => {

     addCart(product)
     openCart()
   })

   const cartBtn = document.createElement('button')
   cartBtn.id = 'shoppingCart'
   cartBtn.innerText = 'Cart'
   buyEventDiv.append(cartBtn)

   cartBtn.addEventListener('click', () => {
     // cart
     openCart()
   })


   const showCart = openModal(Cart);
   const shoppingCart = document.getElementById('shoppingCart');
   shoppingCart.addEventListener('click', showCart)

   productPageMain.appendChild(addonImagesDiv)

  return productPageMain
 }


async function handleColorChange(id){
  const product = await iterateProductById(id);


  updateProductUI(product)
}






// sätt dynamiska i en och statiska i annan, skicka data igen bara och refresh destroy
function updateProductUI(newProduct) {

  product = newProduct
  const productImage = document.getElementById('product-image');
  const format = '.png';
  productImage.src = `${product.articleNumber}${product.color}${format}`;

  document.getElementById('product-header').textContent = product.name ?? '0';
  document.getElementById('price-header').textContent = `${product.price} SEK` ?? 'No color';
  document.getElementById('stock-header').textContent = `${product.stock} in stock` ?? 'Out of stock';
  document.getElementById('color-header').textContent = product.color ?? 'No color';
  document.getElementById('product-description').textContent = product.description ?? 'No description';
}


function openCart(){
   console.log(Cart)
   console.log('Total: ' , Total)
}

function addCart(product){
  const addProducts = {
    name: product.name,
    price: product.price,
    articleNumber: product.articleNumber,
    color: product.color,
    id:product.id,};

  Cart.push(addProducts);
  addTotal(addProducts);
  broomDiscount();
  robotDiscount();
  openCart();
}

function addTotal(newItem){
  Total += newItem.price
}

function broomDiscount(){
  const productOne = Cart.some(item => item.articleNumber === 100)
  const productTwo = Cart.some(item => item.articleNumber === 65)
  if (productOne && productTwo){
    const discount = 200;
    Total -= discount;
    alert('discount')
    console.log('Discount recieved', Total)
  }
}

function robotDiscount(){
  const productOne = Cart.some(item => item.id === 1)
  const productTwo = Cart.some(item => item.articleNumber === 2003)

  if (productOne && productTwo){
    Cart.forEach(item => {
      if (item.articleNumber === 2003 && !item.discountApplied){
        const discount = item.price * 0.25;
        item.price -= discount;
        item.discountApplied = true;
        alert("Discount applied")
        console.log(`25% discount applied! New price: ${item.price}`)
      }
      else if (item.discountApplied){
        alert("Only one per customer")
      }
    });
    Total = Cart.reduce((sum, item) => sum + item.price, 0);
    console.log("New total: ", Total)
  }
  else{
    alert('no discount')
  }

}
