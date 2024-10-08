import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

describe('Testes de busca por Digimon', async () => {
  afterEach(() => vi.clearAllMocks());

  it('É possível inserir um valor na caixa de busca', async () => {
    const { user } = renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /Digimon/i });
    await user.type(input, 'qwerty');
    expect(input).toHaveValue('qwerty');
  });
  it('A tela inicia sem nenhum Digimon renderizado (data-testid=digimonName não está na tela)', () => {
    renderWithRouter(<App />);
    const renderedDigimon = screen.queryByTestId('digimonName');
    expect(renderedDigimon).not.toBeInTheDocument();
  });
  it('É possível buscar um Digimon com sucesso', async () => {
    const DIGIMON_MOCK = [
      {
        name: 'Agumon',
        level: 'Rookie',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      }
    ];

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(DIGIMON_MOCK),
    })) as any;

    const { user } = renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalledTimes(0);
    const input = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    await user.type(input, 'Agumon');
    await user.click(button);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
    const digimonLevel = await screen.findByText('Level: Rookie');
    expect(digimonLevel).toBeInTheDocument();
    const digimonName = await screen.findByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();
    const digimonImage = await screen.findByText('Agumon');
    expect(digimonImage).toBeInTheDocument();
  });
  it('A mensagem de erro é renderizada caso o Digimon buscado não exista', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    })) as any;

    const { user } = renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    await user.type(input, 'Pikachu');
    expect(global.fetch).toBeCalledTimes(0);
    await user.click(button);
    const errorMsg = await screen.findByText('Pikachu is not a Digimon in our database.');
    expect(errorMsg).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
  });
  it('A aplicação não realiza fetch caso a busca seja feita com o input vazio', async () => {
    const { user } = renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(input).toHaveValue('');
    await user.click(button);
    expect(global.fetch).toBeCalledTimes(0);
  });
  it('A busca falha (erro no servidor)', async () => {
    vi.spyOn(global, 'fetch');
    await (global.fetch as any).mockRejectedValue(
      new Error('Oops! Algo de errado não está certo!'),
    );
    vi.spyOn(global.console, 'log');
    const { user } = renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    await user.type(input, 'qwerty');
    await user.click(button);
    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(1);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toBeCalledWith(
        'Erro ao fazer a requisição: Error: Oops! Algo de errado não está certo!',
      );
    })
  })
});
