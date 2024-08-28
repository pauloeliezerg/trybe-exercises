import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
// import userEvent from '@testing-library/user-event';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
import randomNumber from './utils/randomNumber';
import '@testing-library/jest-dom';

vi.mock('./utils/randomNumber');

const LOADING_TEXT = 'Loading...';

describe('Página principal', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(mockFetch as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const firstPokemonId = 656;
    const firstEndPoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    (randomNumber as any).mockReturnValue(firstPokemonId);

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndPoint);
  });

  test.skip('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    // Remova o 'skip' e implemente seu teste
  });

  test.skip('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    // Remova o 'skip' e implemente seu teste
  });
});
