import Swal from 'sweetalert2';

const img = document.querySelector('img');
const name = document.querySelector('p');
const btn = document.querySelector('button');

const API_URL = `https://akabab.github.io/superhero-api/api`;

btn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 561) + 1;

  fetch(`${API_URL}/id/${randomNumber}.json`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
