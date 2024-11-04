

function initNavbar(){
  const navbar = document.createElement('ul');
  navbar.classList.add('navbar');

  const productNav = document.createElement('li');
  productNav.textContent = 'Products';
  productNav.addEventListener('click', () => loadPage(loadProducts));

  const outletNav = document.createElement('li');
  outletNav.textContent = 'Outlet';
  outletNav.addEventListener('click', () => loadPage(loadOutlet));


  const searchNav = document.createElement('li');
  searchNav.textContent = 'Search';
  searchNav.addEventListener('click', () => loadPage(loadSearch));

  const supportNav = document.createElement('li');
  supportNav.textContent = 'Support';
  supportNav.addEventListener('click', () => loadPage(loadSupport));

  navbar.append(productNav, outletNav, searchNav, supportNav);

  const header = document.querySelector('header')
  header.appendChild(navbar);

}
