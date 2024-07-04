const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const surpriseBtn = document.querySelector('#surprise-btn');
const img = document.querySelector('img');

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

const fetchPet = (URL) => {
  return fetch(URL);
};

dogBtn.addEventListener('click', () => {
  fetchPet(DOG_API_URL)
    .then((response) => response.json())
    .then((data) => img.src = data.message);
});

catBtn.addEventListener('click', () => {
  fetchPet(CAT_API_URL)
    .then((response) => response.json())
    .then((data) => img.src = data[0].url);
});

surpriseBtn.addEventListener('click', () => {
  const surprise = Math.floor(Math.random() * 2);

  const SURPRISE_URL = surprise ? DOG_API_URL : CAT_API_URL;

  fetchPet(SURPRISE_URL)
    .then((response) => response.json())
    .then((data) => img.src = data.message || data[0].url);
});
