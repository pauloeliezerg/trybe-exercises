const btn = document.querySelector('button');
const img = document.querySelector('img');
const name = document.querySelector('p');

btn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 561) + 1;

  fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber}.json`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch(() => {
      img.src = '';
      name.innerHTML = `404 (Not Found)`;
    });
})
