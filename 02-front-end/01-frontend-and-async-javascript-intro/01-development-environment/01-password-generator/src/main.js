import { nanoid } from "nanoid";

const passBtn = document.querySelector('button');
const displayPass = document.querySelector('h2');

passBtn.addEventListener('click', () => displayPass.innerHTML = nanoid());
