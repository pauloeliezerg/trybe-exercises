import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import '@testing-library/jest-dom';

import App from '../App';
test('Ao acessar a rota /profile a partir da Home, o nome da pessoa deverá ser renderizado', async () => {
  const { user } = renderWithRouterAndRedux(<App />);

  const nameInput = screen.getByRole('textbox');
  expect(nameInput).toBeInTheDocument();

  await user.type(nameInput, 'Tryber');
  expect(nameInput).toHaveValue('Tryber');

  const loginButton = screen.getByRole('button');
  await user.click(loginButton);
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});
