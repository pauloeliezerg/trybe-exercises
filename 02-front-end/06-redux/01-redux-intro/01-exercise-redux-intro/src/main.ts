import store from "./redux/store";
import { nextColor, previousColor } from './redux/actions';

const btnPrevious = document.getElementById('previous') as HTMLButtonElement;
const btnNext = document.getElementById('next') as HTMLButtonElement;
const btnRandom = document.getElementById('random') as HTMLButtonElement;

btnPrevious.addEventListener('click', () => {
  store.dispatch(previousColor());
});

btnNext.addEventListener('click', () => {
  store.dispatch(nextColor());
});

// realiza o subscribe da store
