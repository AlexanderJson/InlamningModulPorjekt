

 export function buildOptionMenu(productByArticle, optionType, callback){
    const dropdown = document.createElement('select');
    dropdown.id = 'color-select';
    productByArticle.forEach(productOption => {
    const option = document.createElement('option');
    option.value = productOption.id;
    option.textContent = productOption[optionType];
      dropdown.appendChild(option);
    });
   dropdown.addEventListener('change', (event) => {
     callback(event.target.value);
   });
   return dropdown;

}



