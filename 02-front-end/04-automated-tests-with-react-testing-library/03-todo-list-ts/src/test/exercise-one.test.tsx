import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const btn = screen.getByText(/Adicionar/i);

    // Verifique que existe um elemento com o texto "Adicionar".
    expect(btn).toBeInTheDocument();
    // Verifique que o elemento é do tipo button.
    // Verifique que existe um botão com o texto "Adicionar".
    expect(btn).toHaveAttribute('type', 'button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', async () => {
    render(<App />);
    const input = screen.getByLabelText(/Tarefa:/i);
    const btn = screen.getByText(/Adicionar/i);

    // Verifique que existe um input com a label "Tarefa:".
    expect(input).toBeInTheDocument();

    await userEvent.type(input, 'Teste de digitação');
    // Verifique que é possível digitar no input.
    expect(input).toHaveValue('Teste de digitação');
    // Verifique que o texto digitado só é adicionado à lista de tarefas após clicar no botão.
    expect(screen.queryByText(/Teste de digitação/i)).not.toBeInTheDocument();

    await userEvent.click(btn);
    // Verifique que, ao clicar no botão "Adicionar", o texto que está digitado no input é adicionado à lista de tarefas renderizada e que o valor do input é limpo.
    const task = screen.getByText(/Teste de digitação/i);

    expect(task).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});
