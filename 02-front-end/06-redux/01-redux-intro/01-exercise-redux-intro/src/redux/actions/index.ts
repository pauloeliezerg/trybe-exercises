export const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
export const NEXT_COLOR = 'NEXT_COLOR';
export const RANDOM_COLOR = 'RANDOM_COLOR';

export const action = {
  previousColor: () => ({ type: 'PREVIOUS_COLOR' }),
  nextColor: () => ({ type: 'NEXT_COLOR' }),
  randomColor: () => ({ type: 'RANDOM_COLOR' }),
};
