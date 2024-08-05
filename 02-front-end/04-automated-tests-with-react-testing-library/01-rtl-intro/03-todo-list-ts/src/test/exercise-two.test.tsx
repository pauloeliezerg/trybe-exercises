import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../../src/Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', async () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium'];
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const btn = screen.getByText('Adicionar');

    // Dentro do arquivo src/test/exercise-two.test.tsx já existe um array com diversos itens. Faça com que cada elemento desse array seja um item da lista de tarefas.
    await userEvent.type(inputTask, listTodo[0]);
    await userEvent.click(btn);
    await userEvent.type(inputTask, listTodo[1]);
    await userEvent.click(btn);

    // Após adicionar todos os itens, verifique que todos eles estão sendo renderizados na tela.
    listTodo.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    // Renderize apenas o componente <Item /> no teste.
    render(<Item content="Teste" />);
    // Passe uma string como prop para o componente <Item /> e verifique que esse texto está sendo renderizado na tela.
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});
