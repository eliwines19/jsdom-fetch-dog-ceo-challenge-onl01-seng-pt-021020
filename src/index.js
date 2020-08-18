console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => postBreed(json))
};

function postBreed(json) {
  let breedList = document.getElementById('dog-breeds');
  for (let key in json.messages) {
    let breed = document.createElement('li');
    if (json message[key].length > 0) {
      json.message[key].forEach(e => {
        breed.innerHTML = `${e} ${key}`;
        breed.className = "breed";
        breedList.append(breed);
      })
    }
    else {
      breed.innerHTML = `${key}`;
      breed.className = "breed";
      breedList.append(breed);
    }
  }
  breedList.addEventListener("click", e => {
    e.target.style.color = 'blue';
  })
};
