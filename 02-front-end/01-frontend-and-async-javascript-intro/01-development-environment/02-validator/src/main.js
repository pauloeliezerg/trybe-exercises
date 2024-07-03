import validator from 'validator';
import './style.css';

const input = document.querySelector('input');
const button = document.querySelector('button');
const selector = document.querySelector('select');
const feedbackMessage = document.querySelector('p');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const { value } = input;

  const options = {
    cpf: validator.isTaxID(value, 'pt-BR'),
    hexColor: validator.isHexColor(value),
    email: validator.isEmail(value),
    uuid: validator.isUUID(value),
    url: validator.isURL(value),
  };

  feedbackMessage.innerHTML = `Validation returned ${options[selector.value]}`;
});
