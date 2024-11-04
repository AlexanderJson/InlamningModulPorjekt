
export function buildProductEvents(){




  const buyButton = document.createElement('button');
  buyButton.id = 'buy-btn';
  buyButton.textContent = `BUY NOW` ?? 'No description';
  return { buyButton}
}

