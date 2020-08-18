console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContenLoaded", function() {

  let dogBreedsUl = document.getElementById('dog-breeds');

  function renderImages(images) {
    const dogImageContainer = document.getElementById('dog-image-container');
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      dogImageContainer.appendChild(img);
    })
  };

  function fetchDogImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json))
  };

  fetchDogImages();

});
