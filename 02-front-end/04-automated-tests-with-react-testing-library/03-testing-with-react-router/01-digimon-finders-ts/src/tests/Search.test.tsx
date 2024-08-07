import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { screen } from '@testing-library/react';

describe('Testes de busca por Digimon', async () => {
  it('É possível inserir um valor na caixa de busca', async () => {
    const { user } = renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /Digimoan/i });
    await user.type(input, 'qwerty');
    expect(input).toHaveValue('qwerty');
  });
  it('A tela inicia sem nenhum Digimon renderizado (data-testid=digimonName não está na tela)', () => {

  });
  it('É possível buscar um Digimon com sucesso', () => {

  });
  it('A mensagem de erro é renderizada caso o Digimon buscado não exista', () => {

  });
  it('A aplicação não realiza fetch caso a busca seja feita com o input vazio', () => {

  });
});
