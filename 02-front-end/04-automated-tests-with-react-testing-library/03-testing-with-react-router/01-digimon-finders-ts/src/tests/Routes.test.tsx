import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { screen } from '@testing-library/react';

describe('Testes das rotas da aplicação', async () => {
  it('A página deverá apresentar o título "Search Digimon"', () => {
    renderWithRouter(<App />);
    const homeTitle = screen.getByRole('heading', { name: /Search Digimon/i });
    expect(homeTitle).toBeInTheDocument();
  });
  it('A página deverá apresentar os links "About" e "Search Digimon"', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const searchLink = screen.getByRole('link', { name: /Search Digimon/i });
    expect(aboutLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });
  it('Ao clicar no link About, a pessoa usuária é direcionada para a página About. Teste se o título "About" será renderizado na tela', async () => {
    const { user } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    await user.click(aboutLink);
    const aboutTitle = screen.getByRole('heading', { name: /About/i });
    expect(aboutTitle).toBeInTheDocument();
  });
});
