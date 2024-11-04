

export function buildImageSection(product) {
  const div1 = document.createElement('div');
  div1.className = 'div1';

  const format = '.png'
  const url = `${product.articleNumber}${product.color}${format}`
  const productImage = document.createElement('img');
  productImage.id = 'product-image';
  productImage.src = url;
  div1.appendChild(productImage)


  return div1;
}
