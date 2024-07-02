import { nanoid } from 'nanoid';
import './style.css';

const passBtn = document.querySelector('button');
const displayPass = document.querySelector('h2');

passBtn.addEventListener('click', () => {
  displayPass.innerHTML = nanoid();
});
