import { screen } from '@testing-library/react';
import renderWithRedux from '../utils/renderWithRedux';
// import '@testing-library/jest-dom';

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
    type RootState = {
      counterReducer?: {
        count: number;
      };
    };

    const { store, user } = renderWithRedux(<App />);

    const buttonIncrementOne = screen.getByRole('button', { name: 'Incrementa 1' });
    const buttonIncrementFive = screen.getByRole('button', { name: 'Incrementa 5' });

    await user.click(buttonIncrementOne);
    let state = store.getState() as RootState;
    let count = state.counterReducer?.count ?? 0;
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(count).toBe(1);

    await user.click(buttonIncrementFive);
    state = store.getState() as RootState;
    count = state.counterReducer?.count ?? 0;
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

  it('Incrementa corretamente ao clicar no botão com estado global diferente de 0', async () => {
    const state = {
      counterReducer: {
        count: 5,
      },
    };

    const {  user } = renderWithRedux(<App />, state);
    const buttonIncrementOne = screen.getByRole('button', { name: 'Incrementa 1'});
    const buttonIncrementFive = screen.getByRole('button', { name: 'Incrementa 5'});
  
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    await user.click(buttonIncrementOne);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    
    await user.click(buttonIncrementFive);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});
