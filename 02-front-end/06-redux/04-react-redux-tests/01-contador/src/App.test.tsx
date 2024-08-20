import { screen } from '@testing-library/react';
import renderWithRedux from './utils/renderWithRedux';
import '@testing-library/jest-dom'

import App from './App';

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const state = {
    counterReducer: {
      count: 10,
    },
  };
  renderWithRedux(<App />, state);

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});
