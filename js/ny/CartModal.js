
export function openModal(cart){

  const modal = document.createElement('div' );
  modal.id = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const closeBtn = document.createElement('span')
  closeBtn.className = 'close-btn';
  closeBtn.innerText = 'close';

  const modalText = document.createElement('p');
  //check user items här
  const cartItems = cart.seeItems();

  modalText.innerText =  cartItems.length > 0 ? cartItems : 'Your cart is empty';

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalText);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal){
      modal.style.display = 'none';
    }
  });

  return () => {
    modal.style.display = 'block';
  };


}
