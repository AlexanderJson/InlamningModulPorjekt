

export async function getProductById(id){
  const allProductsByFilter = await getProducts();
  return allProductsByFilter.find(product => id === product.id);
}
