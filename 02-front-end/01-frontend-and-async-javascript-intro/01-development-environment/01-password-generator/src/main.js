import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passBtn = document.querySelector('button');
const displayPass = document.querySelector('h2');

passBtn.addEventListener('click', () => {
  const generatedPass = nanoid();
  displayPass.innerHTML = generatedPass;
});

displayPass.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  // alert('Passsword copied!');
});
