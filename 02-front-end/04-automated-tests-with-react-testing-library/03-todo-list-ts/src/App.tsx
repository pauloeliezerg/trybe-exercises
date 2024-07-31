import React, { useState } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

function App() {
  const [listTodo, setListTodo] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setListTodo([...listTodo, todo]);
  };

  const removeTodo = (indexTodo) => {
    setListTodo(listTodo.filter((_, index) => index !== indexTodo));
  };

  return (
    <main className="App">
      <InputTodo
        addTodo={ addTodo }
      />
      <ul>
        { listTodo.map((todo, index) => (
          <li key={ index }>
            <Item content={ todo } />
            <button
              type="button"
              onClick={ () => removeTodo(index) }
            >Remover</button>
          </li>
        )) }
      </ul>
    </main>
  );
}

export default App;
