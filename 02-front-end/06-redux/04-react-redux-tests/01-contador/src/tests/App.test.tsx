import { screen } from '@testing-library/react';
import renderWithRedux from '../utils/renderWithRedux';
import '@testing-library/jest-dom';

import App from '../App';

describe('Testa a aplicação contador', () => {
  it('Renderiza o titulo `Contador`', () => {
    renderWithRedux(<App />);
    const title = screen.getByRole('heading', { name: 'Contador' });

    expect(title).toBeInTheDocument();
  });

  it('A página deve renderizar dois botões e o número "0"', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryAllByRole('button');
  
    expect(buttonAdicionar.length).toBe(2);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Incrementa corretamente ao clicar no botão', async () => {
    const { store, user } = renderWithRedux(<App />);

    const buttonIncrement1 = screen.getByRole('button', { name: 'Incrementa 1' });
    const buttonIncrement5 = screen.getByRole('button', { name: 'Incrementa 5' });
    await user.click(buttonIncrement1);
    await user.click(buttonIncrement5);

    interface RootState {
      counterReducer?: {
        count: number;
      };
    };

    const state = store.getState() as RootState;
    const count = state.counterReducer?.count ?? 0;

    expect(screen.getByText('6')).toBeInTheDocument();
    expect(count).toBe(6);
  });

  it('O número renderizado na página deve ser o mesmo valor do estado global', () => {
    const state = {
      counterReducer: {
        count: 10,
      },
    };
    renderWithRedux(<App />, state);
  
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
})
