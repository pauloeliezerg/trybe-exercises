import { render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';

afterEach(() => vi.clearAllMocks());
it('testa a requisição para a API', async () => {
  const mockedCharacter = [{
    id: 1,
    name: 'Chapolin Colorado',
    source: 'Chaves',
    defensePoints: 60,
  }];

  vi.spyOn(global, 'fetch');
  (global.fetch as any).mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockedCharacter),
  });

  render(<App />);

  const enemy = await screen.findByRole('heading', { name: 'Chapolin Colorado'});

  expect(enemy).toBeInTheDocument();
});
