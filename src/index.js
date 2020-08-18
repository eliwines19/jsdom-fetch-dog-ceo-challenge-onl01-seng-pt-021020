console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContenLoaded", function() {

  let dogBreedsUl = document.getElementById('dog-breeds');

  function renderBooks() {
    const dogImageContainer = document.getElementById('dog-image-container');
  };

  function fetchDogImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json))
  };

});
