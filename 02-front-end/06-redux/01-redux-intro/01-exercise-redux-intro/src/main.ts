import store from "./redux/store";
import action from './redux/actions';

const btnPrevious = document.getElementById('previous') as HTMLButtonElement;
const btnNext = document.getElementById('next') as HTMLButtonElement;
const btnRandom = document.getElementById('random') as HTMLButtonElement;

const { previousColor, nextColor } = action;

btnPrevious.addEventListener('click', () => {
  store.dispatch(previousColor());
});

btnNext.addEventListener('click', () => {
  store.dispatch(nextColor());
});

store.subscribe(() => {
  const { colors, index } = store.getState();

  const value = document.getElementById('value') as HTMLSpanElement;
  const container = document.getElementById('container') as HTMLDivElement;

  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
})