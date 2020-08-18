console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContenLoaded", function() {

  let dogImageContainer = document.getElementById('dog-image-container');
  let dogBreedsUl = document.getElementById('dog-breeds');

  function fetchDogImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4') 
  };

});
