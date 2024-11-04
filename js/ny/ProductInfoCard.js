
export function buildProductCard(product){



  const div = document.createElement('div');
  div.className = "cardDiv";
  const productHeader = document.createElement('h2');
  productHeader.id = 'product-header';
  productHeader.className = 'headers';
  productHeader.textContent = product.name ?? '0';
  div.appendChild(productHeader)

  const priceHeader = document.createElement('h3');
  priceHeader.id = 'price-header';
  priceHeader.className = 'headers';
  priceHeader.textContent = `${product.price} SEK` ?? 'No color';
  div.appendChild(priceHeader)


  const stockHeader = document.createElement('p');
  stockHeader.id = 'stock-header';
  stockHeader.className = 'headers';
  stockHeader.textContent = `${product.stock} in stock` ?? 'Out of stock';
  div.appendChild(stockHeader)

  const colorHeader = document.createElement('h3');
  colorHeader.id = 'color-header';
  colorHeader.className = 'headers';
  colorHeader.textContent = product.color ?? 'No color';
  div.appendChild(colorHeader)

  const productDescription = document.createElement('span');
  productDescription.id = 'product-description';
  productDescription.className = 'descriptions';
  productDescription.textContent = product.description ?? 'No description';
  div.appendChild(productDescription)


return  div;
}


