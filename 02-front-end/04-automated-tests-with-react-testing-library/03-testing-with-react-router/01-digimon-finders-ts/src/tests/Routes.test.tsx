import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { screen } from '@testing-library/react';

describe('Testes das rotas da aplicação', () => {
  it('A página deverá apresentar o título "Search Digimon"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /Search Digimon/i });
    expect(title).toBeInTheDocument();
  });
});
