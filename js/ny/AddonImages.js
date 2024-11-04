export function addonImageGrid(urls){

  const gridContainer = document.createElement('div');
  gridContainer.className = 'image-grid';


  urls.forEach((url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Image'; //todo
    gridContainer.appendChild(img);
  }))
  return gridContainer;

}
