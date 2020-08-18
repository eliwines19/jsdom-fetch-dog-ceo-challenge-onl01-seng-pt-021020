console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => postBreed(json))
};
